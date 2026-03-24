const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');

/**
 * GET /api/company/students/:companyId
 * Returns all students linked to a specific company
 */
router.get('/students/:companyId', async (req, res) => {
  try {
    const students = await User.find({ 
      companyId: req.params.companyId,
      role: 'student'
    }).select('-password');

    // Fetch all courses once to create a robust lookup map
    const allCourses = await Course.find({}).select('title');
    const courseLookup = {};
    allCourses.forEach(c => {
      courseLookup[c._id.toString()] = c.title;
      courseLookup[c.title] = c.title; // Also map title to itself for title-string enrollments
    });
    
    // Map to a cleaner format for the frontend
    const studentsWithCourses = students.map((student) => {
      const studentObj = student.toObject();
      const courseMap = new Map();
      
      (studentObj.enrolledCourses || []).forEach((enrollment) => {
        const rawId = enrollment.courseId ? enrollment.courseId.toString() : null;
        const matchingTitle = courseLookup[rawId];
        
        if (matchingTitle) {
          // De-duplicate by title or ID
          if (!courseMap.has(matchingTitle)) {
            courseMap.set(matchingTitle, {
              title: matchingTitle,
              progress: enrollment.progress || 0,
              enrolledAt: enrollment.enrolledAt,
              totalTime: enrollment.totalTime || 0
            });
          }
        }
      });

      studentObj.courses = Array.from(courseMap.values());
      delete studentObj.enrolledCourses;
      return studentObj;
    });

    res.json(studentsWithCourses);
  } catch (err) {
    console.error('Fetch student error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/company/add-student
 * Body: { companyId, studentEmail }
 * Links an existing student to a company by email
 */
router.post('/add-student', async (req, res) => {
  try {
    const { companyId, studentEmail } = req.body;

    if (!companyId || !studentEmail) {
      return res.status(400).json({ error: 'companyId and studentEmail are required.' });
    }

    const student = await User.findOne({ email: studentEmail, role: 'student' });
    if (!student) {
      return res.status(404).json({ error: 'No student account found with this email.' });
    }

    if (student.companyId && student.companyId.toString() === companyId) {
       return res.status(400).json({ error: 'This student is already added to your company.' });
    }

    student.companyId = companyId;
    await student.save();

    res.json({ 
      message: 'Student added to company successfully!',
      student: {
        id: student._id,
        name: student.name,
        email: student.email
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
