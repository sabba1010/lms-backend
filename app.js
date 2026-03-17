const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
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

// ── Serve extracted SCORM packages as static files ──────────────────────────
// Access via: http://localhost:5000/scorm/<courseId>/index.html
app.use('/scorm', express.static(path.join(__dirname, 'public', 'scorm')));

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
