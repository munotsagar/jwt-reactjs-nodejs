const mongoose = require('mongoose'); // Use require if not using ES modules
const connectDB = async () => {
    try {
        const dbURL = 'mongodb://127.0.0.1:27017/react-node-jwt';
        const conn = await mongoose.connect(dbURL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            serverSelectionTimeoutMS: 5000,

        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1); // Exit process with failure
    }
};
connectDB();
module.exports = mongoose; // Use module.exports if not using ES modules
