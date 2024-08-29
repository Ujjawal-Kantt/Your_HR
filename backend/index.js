const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

connectDB();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Import routes
app.use('/api/auth', require('./api/auth'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
