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
      status: enrollment.status || 'incomplete',
      progress: enrollment.progress || 0
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * PATCH /api/payments/suspend
 * Body: { userId, courseId, suspendData, lessonLocation, status, progress, sessionTime }
 */
router.patch('/suspend', async (req, res) => {
  try {
    const { userId, courseId, suspendData, lessonLocation, status, sessionTime, progress } = req.body;
    
    // First, get the current enrollment status to implement protection
    const userForCheck = await User.findById(userId);
    if (!userForCheck) return res.status(404).json({ error: 'User not found.' });
    
    const enrollment = userForCheck.enrolledCourses.find(e => e.courseId.toString() === courseId.toString());
    if (!enrollment) return res.status(404).json({ error: 'Not enrolled.' });

    const updateFields = {};
    if (suspendData !== undefined) updateFields['enrolledCourses.$.suspendData'] = suspendData;
    if (lessonLocation !== undefined) updateFields['enrolledCourses.$.lessonLocation'] = lessonLocation;
    
    // ── PROGRESS SAVE (the critical fix) ──────────────────────────────
    if (progress !== undefined && !isNaN(Number(progress))) {
      const newProgress = Math.min(100, Math.max(0, Math.round(Number(progress))));
      // Never lower progress below what's already saved (protect against revert)
      if (newProgress > (enrollment.progress || 0)) {
        updateFields['enrolledCourses.$.progress'] = newProgress;
        console.log(`[SCORM Progress] user=${userId} course=${courseId} progress=${newProgress}%`);
      }
    }
    // ─────────────────────────────────────────────────────────────────

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
        console.log(`[SCORM Status] user=${userId} course=${courseId} status=${status}`);
      }
    }

    if (Object.keys(updateFields).length === 0 && Object.keys(incFields).length === 0) {
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

    res.json({ message: 'Saved.', progress: updateFields['enrolledCourses.$.progress'] ?? enrollment.progress });
  } catch (err) {
    console.error('[SCORM Suspend Error]', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/payments/debug-scorm
 * Logs ALL SCORM data sent from the player — for debugging purposes.
 * Remove this after the issue is confirmed fixed.
 */
router.post('/debug-scorm', (req, res) => {
  const body = req.body;
  console.log('\n========= SCORM DEBUG PAYLOAD =========');
  console.log('userId     :', body.userId);
  console.log('courseId   :', body.courseId);
  console.log('status     :', body.status);
  console.log('progress   :', body.progress);
  console.log('lessonLoc  :', body.lessonLocation);
  console.log('sessionTime:', body.sessionTime);
  if (body.suspendData) {
    const sd = body.suspendData;
    console.log('suspendData (raw, first 500 chars):', sd.substring(0, 500));
    // Try to parse as JSON and show structure
    try {
      const parsed = JSON.parse(sd);
      console.log('suspendData (parsed JSON keys):', Object.keys(parsed));
      console.log('suspendData (full parsed):', JSON.stringify(parsed, null, 2).substring(0, 1000));
    } catch (e) {
      console.log('suspendData is NOT JSON. Raw value shown above.');
    }
  } else {
    console.log('suspendData: (empty)');
  }
  console.log('=======================================\n');
  res.json({ received: true, progress: body.progress, suspendDataLength: body.suspendData?.length || 0 });
});

module.exports = router;

