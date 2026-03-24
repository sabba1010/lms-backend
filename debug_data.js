const mongoose = require('mongoose');
const User = require('./models/User');
const Course = require('./models/Course');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lms';

async function debugData() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const students = await User.find({ role: 'student' })
      .populate('enrolledCourses.courseId')
      .limit(5);

    students.forEach(s => {
      console.log(`Student: ${s.name} (${s.email})`);
      s.enrolledCourses.forEach(e => {
        console.log(` - Enrollment: courseId=${JSON.stringify(e.courseId)}, title=${e.courseId?.title}`);
      });
    });

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

debugData();
