const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET all courses — public website only sees published courses
router.get('/', async (req, res) => {
  try {
    const { admin } = req.query;
    // Admin panel requests all courses; public site only gets published ones
    const filter = admin === 'true' ? {} : { isPublished: true };
    const courses = await Course.find(filter).sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single course by ID
router.get('/:id', async (req, res) => {
  try {
    const { admin } = req.query;
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ error: 'Course not found' });

    // Hide if not published and not an admin request
    if (!course.isPublished && admin !== 'true') {
      return res.status(404).json({ error: 'Course is currently on hold.' });
    }

    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create new course
router.post('/', async (req, res) => {
  try {
    const { title, description, price, image, category, stock, scormFileName, instructor, status, isPublished } = req.body;
    const newCourse = new Course({
      title, description, price, image, category, stock,
      scormFileName, instructor, status,
      isPublished: isPublished !== undefined ? isPublished : true,
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ error: 'Invalid course data', details: err.message });
  }
});

// PUT update course (full edit)
router.put('/:id', async (req, res) => {
  try {
    const { title, description, price, image, category, stock, scormFileName, instructor, status, isPublished } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description, price, image, category, stock, scormFileName, instructor, status, isPublished },
      { new: true }
    );
    if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ error: 'Invalid course data' });
  }
});

// PATCH toggle publish/hold status
router.patch('/:id/toggle-publish', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    course.isPublished = !course.isPublished;
    await course.save();

    res.json({
      message: course.isPublished ? 'Course is now published.' : 'Course is now on hold.',
      isPublished: course.isPublished,
      course,
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE course
router.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST add a review
router.post('/:id/reviews', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const course = await Course.findById(req.params.id);

    if (course) {
      const review = { name, rating: Number(rating), comment };
      course.reviews.push(review);
      course.numReviews = course.reviews.length;
      course.rating =
        course.reviews.reduce((acc, item) => item.rating + acc, 0) /
        course.reviews.length;

      await course.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Error adding review' });
  }
});

module.exports = router;
