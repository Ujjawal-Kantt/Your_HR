const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/uploadmiddleware'); // Import upload middleware

router.post('/signup', upload.single('resume'), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name, country, state, city, address, pincode } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    try {
        // Create new user
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            email,
            password,
            name,
            country,
            state,
            city,
            address,
            pincode,
            resume: file.buffer, // Store file data
            resumeContentType: file.mimetype, // Store MIME type
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'helloworldxyzqweere', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ msg: 'success', token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to download the resume
router.get('/resume/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user || !user.resume) {
            return res.status(404).json({ msg: 'No resume found for this user' });
        }

        res.set('Content-Type', user.resumeContentType);
        res.send(user.resume);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/login', [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'helloworldxyzqweere', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ msg: 'success', token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
