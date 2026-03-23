const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const { days } = req.query;
    const filterDays = days ? parseInt(days) : null;
    const cutoffDate = filterDays ? new Date(Date.now() - filterDays * 24 * 60 * 60 * 1000) : null;

    // 1. Basic counts
    const courseCount = await Course.countDocuments();
    const userCount = await User.countDocuments();
    
    // 2. Fetch all users for aggregations
    // In a massive app, we'd use mongo aggregation pipelines, 
    // but for this scale, processing in memory is fine and more flexible for the existing schema.
    const users = await User.find().populate('enrolledCourses.courseId');
    
    let totalRevenue = 0;
    const allEnrollments = [];
    const courseEnrollmentCounts = {}; // { courseId: { title, count } }
    let activeStudentsCount = 0;

    // Monthly revenue map for last 12 months
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const lastTwelveMonths = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      lastTwelveMonths.push({ month: monthNames[d.getMonth()], revenue: 0, yearMonth: `${d.getFullYear()}-${d.getMonth()}` });
    }

    users.forEach(user => {
      let userIsActive = false;
      user.enrolledCourses.forEach(enrollment => {
        if (!enrollment.courseId) return;

        const enrDate = new Date(enrollment.enrolledAt);
        const price = enrollment.courseId.price || 0;

        // Apply time filter for total revenue and transactions
        if (!cutoffDate || enrDate >= cutoffDate) {
          totalRevenue += price;
          allEnrollments.push({
            id: `#ENR-${enrollment._id.toString().slice(-4).toUpperCase()}`,
            user: user.name,
            amount: `$${price.toFixed(2)}`,
            status: 'Completed',
            date: enrollment.enrolledAt,
            timestamp: enrDate.getTime()
          });
        }

        // Top Courses (All time)
        const cid = enrollment.courseId._id.toString();
        if (!courseEnrollmentCounts[cid]) {
          courseEnrollmentCounts[cid] = { title: enrollment.courseId.title, count: 0 };
        }
        courseEnrollmentCounts[cid].count++;

        // Engagement (Active if progress > 0)
        if (enrollment.progress > 0) userIsActive = true;

        // Monthly Revenue (Last 12 months)
        const yearMonth = `${enrDate.getFullYear()}-${enrDate.getMonth()}`;
        const monthEntry = lastTwelveMonths.find(m => m.yearMonth === yearMonth);
        if (monthEntry) {
          monthEntry.revenue += price;
        }
      });
      if (userIsActive) activeStudentsCount++;
    });

    // Sort and slice top 4 courses
    const topCoursesRaw = Object.values(courseEnrollmentCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);
    
    const totalEnrollments = Object.values(courseEnrollmentCounts).reduce((sum, c) => sum + c.count, 0) || 1;
    const topCourses = topCoursesRaw.map(c => ({
      label: c.title,
      percent: Math.round((c.count / totalEnrollments) * 100)
    }));

    const engagement = userCount > 0 ? Math.round((activeStudentsCount / userCount) * 100) : 0;

    // Sort recent transactions
    const recentTransactions = allEnrollments
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 5)
      .map(({ timestamp, ...rest }) => ({
        ...rest,
        date: rest.date ? new Date(rest.date).toLocaleString('en-US', { 
          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
        }) : 'N/A'
      }));

    res.json({
      revenue: `$${totalRevenue.toLocaleString()}`,
      students: userCount,
      courses: courseCount,
      engagement: `${engagement}%`,
      topCourses: topCourses,
      monthlyRevenue: lastTwelveMonths.map(({ month, revenue }) => ({ month, revenue })),
      recentTransactions: recentTransactions
    });
  } catch (err) {
    console.error('Stats error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
