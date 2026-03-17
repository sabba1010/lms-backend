const mongoose = require('mongoose');

const connectDB = async () => {
  const defaultUri = 'mongodb://localhost:27017/clent11';
  const uri = process.env.MONGO_URI || defaultUri;

  const connect = async (connectionString) => {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connectionString}`);
  };

  try {
    await connect(uri);
  } catch (error) {
    console.error('Primary MongoDB connection error:', error.message);
    if (uri !== defaultUri) {
      console.warn('Retrying with local MongoDB fallback...');
      try {
        await connect(defaultUri);
      } catch (localError) {
        console.error('Local MongoDB fallback error:', localError.message);
        console.error('Please start MongoDB locally or configure a working Atlas URI.');
        process.exit(1);
      }
    } else {
      console.error('Please start MongoDB locally or configure a working Atlas URI.');
      process.exit(1);
    }
  }
};

module.exports = connectDB;
