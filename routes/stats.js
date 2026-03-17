const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const courseCount = await Course.countDocuments();
    const userCount = await User.countDocuments();
    
    // For demo purposes, we'll return some static stats for revenue and server load
    // but the counts will be real
    res.json({
      revenue: '$45,231', // Placeholder
      students: userCount,
      courses: courseCount,
      serverLoad: '24%',
      recentUsers: await User.find().sort({ createdAt: -1 }).limit(5).select('name role createdAt'),
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
