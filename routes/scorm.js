const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const mongoose = require('mongoose');
const AdmZip = require('adm-zip');
const Course = require('../models/Course');
const User = require('../models/User');

// --- UPLOAD (MEMORY STORAGE) ---
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('scormFile'), async (req, res) => {
  try {
    const { courseId } = req.body;
    if (!req.file || !courseId) return res.status(400).json({ error: 'Missing data' });

    console.log(`📤 Uploading SCORM for courseId: ${courseId}`);

    // Define paths
    const scormDir = path.join(__dirname, '..', 'uploads', 'scorm', courseId);
    const scormPath = `/uploads/scorm/${courseId}/`;
    const tempZipPath = path.join(__dirname, '..', 'uploads', 'temp', `${courseId}_${Date.now()}.zip`);

    // Ensure directories exist
    fs.mkdirSync(path.dirname(tempZipPath), { recursive: true });
    fs.mkdirSync(scormDir, { recursive: true });

    // Save ZIP temporarily
    fs.writeFileSync(tempZipPath, req.file.buffer);

    try {
      // Extract ZIP
      const zip = new AdmZip(tempZipPath);
      zip.extractAllTo(scormDir, true);
      console.log(`✅ SCORM extracted to: ${scormDir}`);

      // Validate: Check for imsmanifest.xml
      const manifestPath = path.join(scormDir, 'imsmanifest.xml');
      if (!fs.existsSync(manifestPath)) {
        // Cleanup
        fs.rmSync(scormDir, { recursive: true, force: true });
        fs.unlinkSync(tempZipPath);
        return res.status(400).json({ error: 'Invalid SCORM Package: imsmanifest.xml not found' });
      }

      // Detect launch file
      const launchUrl = findScormLaunchFile(scormDir);
      if (!launchUrl) {
        // Cleanup
        fs.rmSync(scormDir, { recursive: true, force: true });
        fs.unlinkSync(tempZipPath);
        return res.status(400).json({ error: 'Invalid SCORM Package: No launch file found' });
      }

      // Update course
      const course = await Course.findById(courseId);
      if (!course) {
        // Cleanup
        fs.rmSync(scormDir, { recursive: true, force: true });
        fs.unlinkSync(tempZipPath);
        return res.status(404).json({ error: 'Course not found' });
      }

      // Delete old SCORM if exists
      if (course.isScormExtracted && course.scormPath) {
        const oldDir = path.join(__dirname, '..', course.scormPath.replace('/uploads/', 'uploads/'));
        if (fs.existsSync(oldDir)) {
          fs.rmSync(oldDir, { recursive: true, force: true });
        }
      }

      course.scormFileName = req.file.originalname;
      course.scormPath = scormPath;
      course.manifestPath = `${scormPath}imsmanifest.xml`;
      course.launchUrl = `${scormPath}${launchUrl}`;
      course.isScormExtracted = true;
      await course.save();

      console.log(`✅ Course updated with SCORM: ${course.title}`);

      // Optional: Delete the original ZIP
      fs.unlinkSync(tempZipPath);

      res.json({
        message: 'SCORM uploaded and extracted successfully',
        launchUrl: course.launchUrl,
        manifestPath: course.manifestPath
      });
    } catch (extractErr) {
      console.error('❌ Extraction error:', extractErr);
      // Cleanup
      if (fs.existsSync(scormDir)) fs.rmSync(scormDir, { recursive: true, force: true });
      if (fs.existsSync(tempZipPath)) fs.unlinkSync(tempZipPath);
      return res.status(500).json({ error: 'Extraction failed: ' + extractErr.message });
    }
  } catch (err) {
    console.error('❌ Upload error:', err.message);
    res.status(500).json({ error: 'Upload failed: ' + err.message });
  }
});

// --- GET ENTRY ---
router.get('/entry/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course || !course.isScormExtracted || !course.launchUrl) {
      return res.status(404).json({ error: 'SCORM not found or not extracted' });
    }

    const backendUrl = process.env.BACKEND_URL || 'http://104.250.128.20:5000';
    const fullEntryPoint = `${backendUrl}${course.launchUrl}`;

    res.json({ entryPoint: fullEntryPoint });
  } catch (err) {
    console.error('❌ Entry error:', err.message);
    res.status(500).json({ error: 'Failed to get entry point' });
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

function findScormLaunchFile(scormDir) {
  let manifestPath = path.join(scormDir, 'imsmanifest.xml');
  let baseDir = scormDir;

  // 1. Check if imsmanifest.xml is inside a single subfolder (common zip mistake)
  if (!fs.existsSync(manifestPath)) {
    try {
      const items = fs.readdirSync(scormDir);
      const subDirs = items.filter(item => {
        try { return fs.statSync(path.join(scormDir, item)).isDirectory(); } catch (e) { return false; }
      });
      if (subDirs.length === 1) {
        const subDirPath = path.join(scormDir, subDirs[0]);
        const subManifestPath = path.join(subDirPath, 'imsmanifest.xml');
        if (fs.existsSync(subManifestPath)) {
          manifestPath = subManifestPath;
          baseDir = subDirPath;
        }
      }
    } catch (e) { }
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

        if (baseDir !== scormDir) {
          const subFolderName = path.basename(baseDir);
          chosenHref = `${subFolderName}/${chosenHref}`;
        }

        const cleanHref = chosenHref.split('?')[0].split('#')[0];
        if (fs.existsSync(path.join(scormDir, cleanHref))) {
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
    'index_lms.html', 'indexAPI.html', 'scormdriver/indexAPI.html',
    'launch.html'
  ];

  for (const f of candidates) {
    if (fs.existsSync(path.join(scormDir, f))) return f.replace(/\\/g, '/');
  }

  // 4. Subfolder fallbacks
  if (baseDir !== scormDir) {
    const subFolderName = path.basename(baseDir);
    for (const f of candidates) {
      const subPath = `${subFolderName}/${f}`;
      if (fs.existsSync(path.join(scormDir, subPath.split('?')[0]))) return subPath.replace(/\\/g, '/');
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

    const htmlFile = findHtmlRecursively(scormDir);
    if (htmlFile) return htmlFile.replace(/\\/g, '/');
  } catch (e) { }

  return null; // No launch file found
}

module.exports = router;
