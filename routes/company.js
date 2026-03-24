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
    
    // Fetch course details for each student's enrolled courses
    const studentsWithCourses = await Promise.all(students.map(async (student) => {
      const enrolledWithDetails = await Promise.all(student.enrolledCourses.map(async (enrollment) => {
        const course = await Course.findById(enrollment.courseId).select('title');
        return {
          title: course ? course.title : 'Unknown Course',
          progress: enrollment.progress,
          enrolledAt: enrollment.enrolledAt,
          totalTime: enrollment.totalTime || 0
        };
      }));
      
      return {
        ...student.toObject(),
        courses: enrolledWithDetails
      };
    }));

    res.json(studentsWithCourses);
  } catch (err) {
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
