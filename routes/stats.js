const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const courseCount = await Course.countDocuments();
    const userCount = await User.countDocuments();
    
    // Fetch all users with their enrolled courses to calculate revenue and transactions
    const users = await User.find().populate('enrolledCourses.courseId');
    
    let totalRevenue = 0;
    const allEnrollments = [];

    users.forEach(user => {
      user.enrolledCourses.forEach(enrollment => {
        if (enrollment.courseId) {
          totalRevenue += (enrollment.courseId.price || 0);
          allEnrollments.push({
            id: `#ENR-${enrollment._id.toString().slice(-4).toUpperCase()}`,
            user: user.name,
            amount: `$${(enrollment.courseId.price || 0).toFixed(2)}`,
            status: 'Completed',
            date: enrollment.enrolledAt,
            timestamp: new Date(enrollment.enrolledAt).getTime()
          });
        }
      });
    });

    // Sort enrollments as transactions by most recent
    const recentTransactions = allEnrollments
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 5)
      .map(({ timestamp, ...rest }) => ({
        ...rest,
        date: rest.date ? new Date(rest.date).toLocaleString('en-US', { 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }) : 'N/A'
      }));

    res.json({
      revenue: `$${totalRevenue.toLocaleString()}`,
      students: userCount,
      courses: courseCount,
      serverLoad: 'Normal', // Static for now as it requires system-level monitoring
      recentUsers: await User.find().sort({ createdAt: -1 }).limit(5).select('name role createdAt'),
      recentTransactions: recentTransactions
    });
  } catch (err) {
    console.error('Stats error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
