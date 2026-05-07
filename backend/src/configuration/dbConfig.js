const mongoose = require('mongoose'); // Use require if not using ES modules

const connectDB = async () => {
    try {
        const dbURL = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/react-node-jwt';
        const conn = await mongoose.connect(dbURL, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        console.error("Start MongoDB locally or update MONGO_URI in backend/.env.");
        process.exit(1); // Exit process with failure
    }
};
connectDB();
module.exports = mongoose; // Use module.exports if not using ES modules
