const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const AdmZip = require('adm-zip');
const Course = require('../models/Course');
const User = require('../models/User');

// --- GRIDFS SETUP ---
let bucket;
mongoose.connection.once('open', () => {
  bucket = new GridFSBucket(mongoose.connection.getClient().db(mongoose.connection.name));
});

// --- UPLOAD (MEMORY STORAGE) ---
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('scormFile'), async (req, res) => {
  try {
    const { courseId } = req.body;
    if (!req.file || !courseId) return res.status(400).json({ error: 'Missing data' });
    
    if (!bucket) return res.status(500).json({ error: 'Database not ready' });

    // Delete old SCORM file if exists
    const existing = await mongoose.connection.collection('fs.files').findOne({ filename: `scorm_${courseId}` });
    if (existing) {
      await bucket.delete(existing._id);
    }

    // Save ZIP to GridFS
    const uploadStream = bucket.openUploadStream(`scorm_${courseId}`);
    uploadStream.write(req.file.buffer);
    
    await new Promise((resolve, reject) => {
      uploadStream.end(() => resolve());
      uploadStream.on('error', reject);
    });

    // Extract ZIP in memory and find entry point
    const zip = new AdmZip(req.file.buffer);
    const tempDir = path.join(os.tmpdir(), `scorm_${Date.now()}`);
    fs.mkdirSync(tempDir, { recursive: true });
    zip.extractAllTo(tempDir, true);

    const entry = findScormEntry(tempDir);

    // Update course
    const course = await Course.findById(courseId);
    if (course) {
      course.scormFileName = courseId;
      await course.save();
    }

    // Cleanup temp dir
    fs.rmSync(tempDir, { recursive: true, force: true });

    res.json({ entryPoint: `/scorm/${courseId}/${entry}` });
  } catch (err) { 
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Upload failed' }); 
  }
});

// --- GET ENTRY ---
router.get('/entry/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    if (!bucket) return res.status(500).json({ error: 'Database not ready' });

    // Download from GridFS
    const files = await mongoose.connection.collection('fs.files').find({ filename: `scorm_${courseId}` }).toArray();
    if (!files.length) return res.status(404).json({ error: 'SCORM file not found' });

    const downloadStream = bucket.openDownloadStream(files[0]._id);
    const chunks = [];
    
    await new Promise((resolve, reject) => {
      downloadStream.on('data', chunk => chunks.push(chunk));
      downloadStream.on('end', resolve);
      downloadStream.on('error', reject);
    });

    const buffer = Buffer.concat(chunks);
    const tempDir = path.join(os.tmpdir(), `scorm_read_${Date.now()}`);
    fs.mkdirSync(tempDir, { recursive: true });

    const zip = new AdmZip(buffer);
    zip.extractAllTo(tempDir, true);

    const entry = findScormEntry(tempDir);

    // Cleanup
    fs.rmSync(tempDir, { recursive: true, force: true });

    res.json({ entryPoint: `/scorm/${courseId}/${entry}` });
  } catch (err) { 
    console.error('Entry error:', err);
    res.status(500).json({ error: 'Failed to get entry' }); 
  }
});

// --- SAVE SUSPEND (RESUME) ---
router.patch('/suspend', async (req, res) => {
  try {
    const { userId, courseId, suspendData, lessonLocation, status } = req.body;
    if (!userId || !courseId) return res.status(400).json({ error: 'Missing IDs' });

    await User.findOneAndUpdate(
      { _id: userId, 'enrolledCourses.courseId': courseId },
      { 
        $set: { 
          'enrolledCourses.$.suspendData': suspendData || '',
          'enrolledCourses.$.lessonLocation': lessonLocation || '',
          'enrolledCourses.$.status': status || 'incomplete'
        } 
      }
    );
    res.json({ message: 'Saved' });
  } catch (err) { res.status(500).json({ error: 'Save failed' }); }
});

// --- GET SUSPEND ---
router.get('/suspend/:userId/:courseId', async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const user = await User.findById(userId);
    const course = user?.enrolledCourses.find(c => c.courseId.toString() === courseId);
    if (!course) return res.status(404).json({});

    res.json({
      suspendData: course.suspendData || '',
      lessonLocation: course.lessonLocation || '',
      status: course.status || 'incomplete'
    });
  } catch (err) { res.status(500).json({}); }
});

// --- COMPLETE ---
router.post('/complete', async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    await User.findOneAndUpdate(
      { _id: userId, 'enrolledCourses.courseId': courseId },
      { $set: { 'enrolledCourses.$.progress': 100, 'enrolledCourses.$.status': 'completed' } }
    );
    res.json({ message: 'Completed' });
  } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

function findScormEntry(dir) {
  let manifestPath = path.join(dir, 'imsmanifest.xml');
  let baseDir = dir;

  // 1. Check if imsmanifest.xml is inside a single subfolder (common zip mistake)
  if (!fs.existsSync(manifestPath)) {
    try {
      const items = fs.readdirSync(dir);
      const subDirs = items.filter(item => {
        try { return fs.statSync(path.join(dir, item)).isDirectory(); } catch (e) { return false; }
      });
      if (subDirs.length === 1) {
        const subDirPath = path.join(dir, subDirs[0]);
        const subManifestPath = path.join(subDirPath, 'imsmanifest.xml');
        if (fs.existsSync(subManifestPath)) {
          manifestPath = subManifestPath;
          baseDir = subDirPath;
        }
      }
    } catch (e) {}
  }

  let entryPoint = null;

  // 2. Parse manifest if found
  if (fs.existsSync(manifestPath)) {
    try {
      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const resourceRegex = /<resource[^>]*href=["']([^"']+)["'][^>]*>/gi;
      let match;
      let scoHref = null;
      let firstHref = null;

      while ((match = resourceRegex.exec(manifestContent)) !== null) {
        const fullTag = match[0];
        const href = match[1];

        if (!firstHref) firstHref = href;
        if (fullTag.toLowerCase().includes('scormtype="sco"') || fullTag.toLowerCase().includes("scormtype='sco'")) {
          scoHref = href;
          break;
        }
      }

      let chosenHref = scoHref || firstHref;
      if (chosenHref) {
        chosenHref = chosenHref.replace(/&amp;/g, '&');
        
        if (baseDir !== dir) {
           const subFolderName = path.basename(baseDir);
           chosenHref = `${subFolderName}/${chosenHref}`;
        }
        
        const cleanHref = chosenHref.split('?')[0].split('#')[0];
        if (fs.existsSync(path.join(dir, cleanHref))) {
          entryPoint = chosenHref;
        }
      }
    } catch (err) {
      console.error('Error reading imsmanifest.xml:', err);
    }
  }

  if (entryPoint) return entryPoint.replace(/\\/g, '/');

  // 3. Fallback candidates
  const candidates = [
    'index.html', 'story.html', 'story_html5.html', 
    'scormcontent/index.html', 'res/index.html', 
    'index_lms.html', 'indexAPI.html', 'scormdriver/indexAPI.html'
  ];
  
  for (const f of candidates) {
    if (fs.existsSync(path.join(dir, f))) return f.replace(/\\/g, '/');
  }
  
  // 4. Subfolder fallbacks
  if (baseDir !== dir) {
    const subFolderName = path.basename(baseDir);
    for (const f of candidates) {
      const subPath = `${subFolderName}/${f}`;
      if (fs.existsSync(path.join(dir, subPath.split('?')[0]))) return subPath.replace(/\\/g, '/');
    }
  }

  // 5. Any .html file recursive search
  try {
    const findHtmlRecursively = (currentDir, relativePath = '') => {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const itemRelative = relativePath ? `${relativePath}/${item}` : item;
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          const res = findHtmlRecursively(fullPath, itemRelative);
          if (res) return res;
        } else if (item.toLowerCase().endsWith('.html') || item.toLowerCase().endsWith('.htm')) {
          return itemRelative;
        }
      }
      return null;
    };
    
    const htmlFile = findHtmlRecursively(dir);
    if (htmlFile) return htmlFile.replace(/\\/g, '/');
  } catch(e) {}

  return 'index.html';
}

module.exports = router;
