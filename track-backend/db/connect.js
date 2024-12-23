const mongoose = require('mongoose');

const dbConnect = async () => {
  const mongoURI = process.env.MONGODB_URI;
  console.log('MONGODB_URI:', process.env.MONGODB_URI);
  if (!mongoURI) {
    throw new Error('MONGODB_URI is not defined');
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = dbConnect;