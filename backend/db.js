const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://kanttujjawal06:J0LkX5zTKEaqTKA7@argobatsdb.fwzkicu.mongodb.net/?retryWrites=true&w=majority&appName=ArgoBatsDB';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;