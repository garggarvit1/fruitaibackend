const mongoose = require('mongoose');

const connectDB = async () => {
    const api=`mongodb+srv://garggarvit12:garg1234@cluster0.7bembvg.mongodb.net/fruitAi`
  try {
    const conn = await mongoose.connect(api, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

// process.env.MONGO_URI 
