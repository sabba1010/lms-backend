const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb+srv://arifursajid3456_db_user:GhNinyoVBxcCl2ze@cluster0.2ow2yio.mongodb.net/?appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const users = await User.find({ 'enrolledCourses.progress': { $gt: 0 } });
    if (!users.length) {
        console.log('No users with progress > 0');
        process.exit();
    }
    
    users.forEach(user => {
      user.enrolledCourses.forEach(c => {
        if (c.progress > 0) {
          console.log('\n--- Found Progress ---');
          console.log('Email:', user.email);
          console.log('Progress:', c.progress);
          console.log('Score:', c.score);
          console.log('suspendData:', c.suspendData ? c.suspendData.substring(0, 500) : 'none');
          
          c.progress = 0; // reset for testing
        }
      });
      user.save();
    });
    
    setTimeout(() => {
        console.log('\nProgress reset to 0 for these users so they can test correctly.');
        process.exit();
    }, 1000);
  })
  .catch(e => { console.error(e); process.exit(1); });
