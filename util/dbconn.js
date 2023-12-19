const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

module.exports = connectDB;
