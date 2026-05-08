const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const os = require('os');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const AdmZip = require('adm-zip');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// ── SCORM CACHE (courseId -> temp directory mapping) ──
const scormCache = new Map();

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
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self' http://localhost:3000 http://localhost:5173");
  next();
});

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));

connectDB();

// ── DYNAMIC SCORM FILE HANDLER (Database → Temp Extract → Serve) ──
app.use('/scorm/:courseId/*', async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const filePath = req.params[0] || 'index.html';

    // Check if already cached
    if (!scormCache.has(courseId)) {
      if (!mongoose.connection.getClient()) {
        return res.status(500).json({ error: 'Database not ready' });
      }

      const bucket = new GridFSBucket(mongoose.connection.getClient().db(mongoose.connection.name));
      const files = await mongoose.connection.collection('fs.files').find({ filename: `scorm_${courseId}` }).toArray();
      
      if (!files.length) {
        return res.status(404).json({ error: 'SCORM package not found' });
      }

      // Download from GridFS
      const downloadStream = bucket.openDownloadStream(files[0]._id);
      const chunks = [];
      
      await new Promise((resolve, reject) => {
        downloadStream.on('data', chunk => chunks.push(chunk));
        downloadStream.on('end', resolve);
        downloadStream.on('error', reject);
      });

      // Extract to temp directory
      const tempDir = path.join(os.tmpdir(), `scorm_${courseId}_${Date.now()}`);
      const buffer = Buffer.concat(chunks);
      const zip = new AdmZip(buffer);
      zip.extractAllTo(tempDir, true);

      scormCache.set(courseId, tempDir);

      // Cleanup old cache entries (keep max 10)
      if (scormCache.size > 10) {
        const firstKey = scormCache.keys().next().value;
        const oldDir = scormCache.get(firstKey);
        fs.rmSync(oldDir, { recursive: true, force: true });
        scormCache.delete(firstKey);
      }
    }

    // Serve file from cached directory
    const cachedDir = scormCache.get(courseId);
    const fullPath = path.join(cachedDir, filePath);

    // Security: prevent directory traversal
    if (!path.resolve(fullPath).startsWith(path.resolve(cachedDir))) {
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
