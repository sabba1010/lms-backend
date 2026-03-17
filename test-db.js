const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function testConnection() {
  const uri = process.env.MONGO_URI;
  console.log('Testing MONGO_URI:', uri ? (uri.substring(0, 20) + '...') : 'NULL');
  
  if (!uri) {
    console.error('ERROR: MONGO_URI is not set in .env file!');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log('SUCCESS: Connected to MongoDB Atlas!');
    
    // Check if courses collection has data
    const coursesCount = await mongoose.connection.db.collection('courses').countDocuments();
    console.log('Courses in database:', coursesCount);
    
    if (coursesCount === 0) {
      console.warn('WARNING: Database is empty. You might need to run: node seed.js');
    }

    await mongoose.connection.close();
    console.log('Connection closed.');
  } catch (err) {
    console.error('FAILED to connect to MongoDB Atlas:');
    console.error(err.message);
    if (err.message.includes('IP address')) {
      console.error('HINT: Your Vercel or local IP might not be whitelisted in MongoDB Atlas Network Access.');
    }
  }
}

testConnection();
