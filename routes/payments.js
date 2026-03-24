const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');

/**
 * POST /api/payments/enroll
 * Body: { userId, courseIds: [...] }
 *
 * Marks each course as enrolled for the user.
 * In a production app this would verify a real payment gateway callback.
 * Here we treat it as a "pay and enroll immediately" demo flow.
 */
router.post('/enroll', async (req, res) => {
  try {
    const { userId, courseIds } = req.body;

    if (!userId || !courseIds || !Array.isArray(courseIds) || courseIds.length === 0) {
      return res.status(400).json({ error: 'userId and courseIds are required.' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    // Validate all courses exist
    const courses = await Course.find({ _id: { $in: courseIds } });
    if (courses.length !== courseIds.length) {
      return res.status(404).json({ error: 'One or more courses not found.' });
    }

    // Add courses that aren't already enrolled
    const alreadyEnrolledIds = user.enrolledCourses.map((e) => e.courseId.toString());
    const newEnrollments = courseIds.filter((id) => !alreadyEnrolledIds.includes(id.toString()));

    for (const courseId of newEnrollments) {
      user.enrolledCourses.push({ courseId, enrolledAt: new Date(), progress: 0 });
    }

    await user.save();

    // Return the enrolled course details
    const enrolledCourseDetails = await Course.find({
      _id: { $in: user.enrolledCourses.map((e) => e.courseId) },
    }).select('_id title description image price category scormFileName instructor rating');

    res.json({
      message: `Successfully enrolled in ${newEnrollments.length} course(s).`,
      enrolledCourses: enrolledCourseDetails,
    });
  } catch (err) {
    console.error('Enroll error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

/**
 * GET /api/payments/enrolled/:userId
 * Returns all enrolled courses for a user with their full details
 */
router.get('/enrolled/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found.' });

    // Fetch full course details for each enrolled course
    const enrolledWithDetails = await Promise.all(
      user.enrolledCourses.map(async (enrollment) => {
        const course = await Course.findById(enrollment.courseId).select(
          '_id title description image price category scormFileName instructor rating'
        );
        if (!course) return null;
        return {
          ...course.toObject(),
          enrolledAt: enrollment.enrolledAt,
          progress: enrollment.progress,
          totalTime: enrollment.totalTime || 0,
        };
      })
    );

    res.json(enrolledWithDetails.filter(Boolean));
  } catch (err) {
    console.error('Fetch enrolled error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

/**
 * PATCH /api/payments/progress
 * Body: { userId, courseId, progress }
 * Updates the local progress percentage for a course
 */
router.patch('/progress', async (req, res) => {
  try {
    const { userId, courseId, progress } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const enrollment = user.enrolledCourses.find(
      (e) => e.courseId.toString() === courseId.toString()
    );
    if (!enrollment) return res.status(404).json({ error: 'Not enrolled in this course.' });

    enrollment.progress = Math.min(100, Math.max(0, Number(progress)));
    await user.save();

    res.json({ message: 'Progress updated.', progress: enrollment.progress });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/payments/suspend/:userId/:courseId
 * Retrieves bookmarking data for a specific course
 */
router.get('/suspend/:userId/:courseId', async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const enrollment = user.enrolledCourses.find(
      (e) => e.courseId.toString() === courseId.toString()
    );
    if (!enrollment) return res.status(404).json({ error: 'Not enrolled.' });

    res.json({ 
      suspendData: enrollment.suspendData || '',
      lessonLocation: enrollment.lessonLocation || '',
      status: enrollment.status || 'incomplete'
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * PATCH /api/payments/suspend
 * Body: { userId, courseId, suspendData, lessonLocation, status }
 */
router.patch('/suspend', async (req, res) => {
  try {
    const { userId, courseId, suspendData, lessonLocation, status, sessionTime } = req.body;
    
    // First, get the current enrollment status to implement protection
    const userForCheck = await User.findById(userId);
    if (!userForCheck) return res.status(404).json({ error: 'User not found.' });
    
    const enrollment = userForCheck.enrolledCourses.find(e => e.courseId.toString() === courseId.toString());
    if (!enrollment) return res.status(404).json({ error: 'Not enrolled.' });

    const updateFields = {};
    if (suspendData !== undefined) updateFields['enrolledCourses.$.suspendData'] = suspendData;
    if (lessonLocation !== undefined) updateFields['enrolledCourses.$.lessonLocation'] = lessonLocation;
    
    const incFields = {};
    if (sessionTime !== undefined && !isNaN(sessionTime)) {
      incFields['enrolledCourses.$.totalTime'] = Number(sessionTime);
    }
    
    // Status protection logic
    const newStatus = status?.toLowerCase();
    const oldStatus = enrollment.status?.toLowerCase();
    const isFinished = oldStatus === 'completed' || oldStatus === 'passed';
    const isReverting = newStatus === 'incomplete' || newStatus === 'browsed';

    if (status !== undefined) {
      if (isFinished && isReverting) {
        console.log(`[Atomic] Protected status for user ${userId}.`);
      } else {
        updateFields['enrolledCourses.$.status'] = status;
      }
    }

    if (Object.keys(updateFields).length === 0) {
      return res.json({ message: 'No changes provided.' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId, 'enrolledCourses.courseId': courseId },
      { 
        $set: updateFields,
        $inc: incFields 
      },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ error: 'Update failed (user or enrollment not found).' });

    res.json({ message: 'Bookmarking saved atomically.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
