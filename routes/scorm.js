const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const AdmZip = require('adm-zip');
const Course = require('../models/Course');
const User = require('../models/User');

// --- UPLOAD ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, safe);
  },
});
const upload = multer({ storage });

router.post('/upload', upload.single('scormFile'), async (req, res) => {
  try {
    const { courseId } = req.body;
    if (!req.file || !courseId) return res.status(400).json({ error: 'Missing data' });

    const extractDir = path.join(__dirname, '..', 'public', 'scorm', courseId);
    if (fs.existsSync(extractDir)) fs.rmSync(extractDir, { recursive: true, force: true });
    fs.mkdirSync(extractDir, { recursive: true });

    const zip = new AdmZip(req.file.path);
    zip.extractAllTo(extractDir, true);

    const course = await Course.findById(courseId);
    if (course) {
      course.scormFileName = courseId;
      await course.save();
    }

    fs.unlinkSync(req.file.path);
    const entry = findScormEntry(extractDir);
    res.json({ entryPoint: `/scorm/${courseId}/${entry}` });
  } catch (err) { res.status(500).json({ error: 'Upload failed' }); }
});

// --- GET ENTRY ---
router.get('/entry/:courseId', async (req, res) => {
  const { courseId } = req.params;
  const dir = path.join(__dirname, '..', 'public', 'scorm', courseId);
  const entry = findScormEntry(dir);
  res.json({ entryPoint: `/scorm/${courseId}/${entry}` });
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
  const candidates = ['index.html', 'story.html', 'story_html5.html', 'scormcontent/index.html'];
  for (const f of candidates) {
    if (fs.existsSync(path.join(dir, f))) return f;
  }
  return 'index.html';
}

module.exports = router;

module.exports = router;
