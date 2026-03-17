const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    // Only return student and company users — admins are excluded
    const users = await User.find({ role: { $in: ['student', 'company'] } }).select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, email, bio, password } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    if (name) user.name = name;
    if (email) user.email = email;
    if (bio !== undefined) user.bio = bio;
    if (password) user.password = password; // The pre-save hook in User model will handle hashing

    await user.save();

    const updatedUser = user.toObject();
    delete updatedUser.password;

    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
