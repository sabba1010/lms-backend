const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');
const Course = require('../models/Course');

// ── Multer config: store SCORM zips in /uploads ──────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Keep original name so we can track it
    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, safeName);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname).toLowerCase() !== '.zip') {
      return cb(new Error('Only .zip files are allowed'));
    }
    cb(null, true);
  },
  limits: { fileSize: 500 * 1024 * 1024 }, // 500 MB max
});

/**
 * POST /api/scorm/upload
 * Multipart form fields: courseId, scormFile (the zip)
 *
 * 1. Receives the zip
 * 2. Extracts it to /public/scorm/<courseId>/
 * 3. Updates course.scormFileName in DB
 */
router.post('/upload', upload.single('scormFile'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No SCORM file uploaded.' });

    const { courseId } = req.body;
    if (!courseId) return res.status(400).json({ error: 'courseId is required.' });

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: 'Course not found.' });

    // Extract location: public/scorm/<courseId>/
    const extractDir = path.join(__dirname, '..', 'public', 'scorm', courseId);

    // Clean any previous extraction
    if (fs.existsSync(extractDir)) {
      fs.rmSync(extractDir, { recursive: true, force: true });
    }
    fs.mkdirSync(extractDir, { recursive: true });

    // Unzip
    const zip = new AdmZip(req.file.path);
    zip.extractAllTo(extractDir, true);

    // Update DB — store the courseId as the scorm folder name
    course.scormFileName = courseId;
    await course.save();

    // Clean up the uploaded zip file
    fs.unlinkSync(req.file.path);

    // Determine the entry point (index.html or imsmanifest.xml)
    const entryPoint = findScormEntry(extractDir);

    // Ensure package allows standalone execution (no LMS parent) for cross-origin React deployment
    if (entryPoint) {
      const entryFile = path.join(extractDir, entryPoint);
      patchScormHtml(entryFile);

      const scormContentEntry = path.join(extractDir, 'scormcontent', 'index.html');
      patchScormHtml(scormContentEntry);
    }

    res.json({
      message: 'SCORM package uploaded and extracted successfully.',
      scormPath: `/scorm/${courseId}/`,
      entryPoint: entryPoint ? `/scorm/${courseId}/${entryPoint}` : null,
      course,
    });
  } catch (err) {
    console.error('SCORM upload error:', err);
    res.status(500).json({ error: 'Failed to process SCORM package.', details: err.message });
  }
});

function patchScormHtml(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  let source = fs.readFileSync(filePath, 'utf8');

  source = source.replace(/const allowOutsideDriver = (true|false)/, 'const allowOutsideDriver = true');

  source = source.replace(
    /return window\.location\.protocol === 'file:'[\s\S]*?typeof window\.parent\.IsLmsPresent === 'function'\)/,
    'return true'
  );

  source = source.replace(
    /throw new Error\("Content launched outside of a supported LMS enviroment\."\);/,
    'console.warn("Content launched outside of a supported LMS environment (standalone mode).")'
  );

  fs.writeFileSync(filePath, source, 'utf8');
}

/**
 * GET /api/scorm/entry/:courseId
 * Returns the entry point URL for a course's SCORM package
 */
router.get('/entry/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const extractDir = path.join(__dirname, '..', 'public', 'scorm', courseId);

    if (!fs.existsSync(extractDir)) {
      return res.status(404).json({ error: 'SCORM package not found for this course.' });
    }

    const entryPoint = findScormEntry(extractDir);
    if (!entryPoint) {
      return res.status(404).json({ error: 'No valid SCORM entry point found.' });
    }

    // Patch each requested package on-the-fly to run in standalone mode as needed
    const entryFile = path.join(extractDir, entryPoint);
    patchScormHtml(entryFile);

    const scormContentEntry = path.join(extractDir, 'scormcontent', 'index.html');
    patchScormHtml(scormContentEntry);

    res.json({
      entryPoint: `/scorm/${courseId}/${entryPoint}`,
      scormPath: `/scorm/${courseId}/`,
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Helper: find the HTML entry point of the extracted SCORM package ─────────
function findScormEntry(dir) {
  // Priority order for SCORM entry points
  const candidates = [
    'index.html',
    'index.htm',
    'story.html',
    'story_html5.html',
    'scormcontent/index.html',
    'content/index.html',
    'res/index.html',
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(path.join(dir, candidate))) {
      return candidate;
    }
  }

  // Fallback: find any .html file at root level
  const files = fs.readdirSync(dir);
  const htmlFile = files.find((f) => f.toLowerCase().endsWith('.html') || f.toLowerCase().endsWith('.htm'));
  return htmlFile || null;
}

module.exports = router;
