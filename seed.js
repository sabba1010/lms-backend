const mongoose = require('mongoose');
const Course = require('./models/Course');
const connectDB = require('./config/db');

const initialCourses = [
  { title: 'The Complete Python Pro Bootcamp', price: 149, stock: 50, image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop', category: 'adult' },
  { title: 'Active Threat Preparation and Response for Early Childhood Settings', price: 250, stock: 30, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop', category: 'adult' },
  { title: 'Little Star Beginner Program', price: 59, stock: 100, image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop', category: 'children' },
  { title: 'Smart Kids Foundation Course', price: 85, stock: 75, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop', category: 'children' },
  { title: 'Beginner Growth Program', price: 120, stock: 20, image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop', category: 'adult' },
  { title: 'Smart Kids Foundation Course-1', price: 454, stock: 10, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop', category: 'children' },
];

(async function seed() {
  await connectDB();
  await Course.deleteMany({});
  await Course.insertMany(initialCourses);
  console.log('Seeded courses');
  process.exit(0);
})();
