const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const os = require('os');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// ── Security & middleware ────────────────────────────────────────────────────
// Relax helmet CSP so SCORM packages (iframes) load correctly
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    frameguard: false, // disable default X-Frame-Options header
  })
);

// Allow local frontend to render backend-hosted scorm iframes
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self' http://localhost:3000 http://localhost:5173 http://104.250.128.20/");
  next();
});

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://104.250.128.20'],
    credentials: true,
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));

// Serve static files from uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.get('/scorm/:courseId', (req, res) => {
  return res.redirect(`/uploads/scorm/${req.params.courseId}/index.html`);
});

app.get('/scorm/:courseId/', (req, res) => {
  return res.redirect(`/uploads/scorm/${req.params.courseId}/index.html`);
});

// ── DYNAMIC SCORM FILE HANDLER (Serve from extracted files) ──
app.use('/uploads/scorm/:courseId/*', async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const filePath = req.params[0] || 'index.html';

    // Check if course has extracted SCORM
    const Course = require('./models/Course');
    const course = await Course.findById(courseId);
    if (!course || !course.isScormExtracted || !course.scormPath) {
      return res.status(404).json({ error: 'SCORM package not found' });
    }

    // Serve file from extracted directory
    const scormDir = path.join(__dirname, 'uploads', 'scorm', courseId);
    const fullPath = path.join(scormDir, filePath);

    // Security: prevent directory traversal
    if (!path.resolve(fullPath).startsWith(path.resolve(scormDir))) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.sendFile(fullPath);
  } catch (err) {
    console.error('SCORM handler error:', err);
    res.status(500).json({ error: 'Failed to serve SCORM file' });
  }
});

// ── API Routes ───────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ message: 'Clent-11 Backend API is running' });
});

app.use('/api/courses', require('./routes/courses'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/stats', require('./routes/stats'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/scorm', require('./routes/scorm'));
app.use('/api/company', require('./routes/company'));

// ── Error handlers ───────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export the app for Vercel Serverless
module.exports = app;
