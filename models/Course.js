const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  scormFileName: { type: String },
  instructor: { type: String, default: 'Admin Instructor' },
  status: { type: String, default: 'published' },
  // isPublished controls visibility on the public website
  // true  = Published (shows on site)
  // false = On Hold (hidden from public)
  isPublished: { type: Boolean, default: true },
  reviews: [ReviewSchema],
  rating: { type: Number, default: 5 },
  numReviews: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', CourseSchema);
