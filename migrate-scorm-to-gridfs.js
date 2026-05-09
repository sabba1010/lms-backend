/**
 * SCORM Migration Script
 * Migrates SCORM files from public/scorm/ to MongoDB GridFS
 * Usage: node migrate-scorm-to-gridfs.js
 */

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const AdmZip = require('adm-zip');
const dotenv = require('dotenv');

dotenv.config();

const SCORM_DIR = path.join(__dirname, 'public', 'scorm');

const connectDB = async () => {
  try {
    const defaultUri = 'mongodb://localhost:27017/clent11';
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI || defaultUri;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
    return true;
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    return false;
  }
};

const migrateScormFiles = async () => {
  if (!fs.existsSync(SCORM_DIR)) {
    console.log('⚠️  SCORM directory not found:', SCORM_DIR);
    return;
  }

  const courseDirs = fs.readdirSync(SCORM_DIR);
  if (courseDirs.length === 0) {
    console.log('ℹ️  No SCORM files to migrate');
    return;
  }

  const bucket = new GridFSBucket(mongoose.connection.getClient().db(mongoose.connection.name));
  let migratedCount = 0;

  for (const courseId of courseDirs) {
    const coursePath = path.join(SCORM_DIR, courseId);
    const stat = fs.statSync(coursePath);

    if (!stat.isDirectory()) {
      console.log(`⏭️  Skipping non-directory: ${courseId}`);
      continue;
    }

    try {
      console.log(`📦 Migrating SCORM: ${courseId}`);

      // Delete old file if exists
      const existing = await mongoose.connection
        .collection('fs.files')
        .findOne({ filename: `scorm_${courseId}` });
      
      if (existing) {
        console.log(`  🗑️  Deleting old GridFS file`);
        await bucket.delete(existing._id);
      }

      // Create ZIP from directory
      const zip = new AdmZip();
      const addDirToZip = (dir, zipPath) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            addDirToZip(filePath, path.join(zipPath, file));
          } else {
            const data = fs.readFileSync(filePath);
            zip.addFile(path.join(zipPath, file), data);
          }
        }
      };

      addDirToZip(coursePath, '');
      const zipBuffer = zip.toBuffer();

      // Upload to GridFS
      const uploadStream = bucket.openUploadStream(`scorm_${courseId}`);
      uploadStream.write(zipBuffer);

      await new Promise((resolve, reject) => {
        uploadStream.end(() => resolve());
        uploadStream.on('error', reject);
      });

      console.log(`  ✅ Migrated successfully (${zipBuffer.length} bytes)`);
      migratedCount++;
    } catch (err) {
      console.error(`  ❌ Migration failed: ${err.message}`);
    }
  }

  console.log(`\n✨ Migration complete! ${migratedCount}/${courseDirs.length} courses migrated.`);
};

const main = async () => {
  console.log('🚀 Starting SCORM migration to GridFS...\n');

  const connected = await connectDB();
  if (!connected) {
    process.exit(1);
  }

  await migrateScormFiles();

  mongoose.connection.close();
  console.log('\n✅ Done!');
};

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
