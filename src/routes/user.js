const express = require('express');
const router = express.Router();
const { createUser } = require('../models/user');

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ Error: 'Email and password required' });
        }
        const userId = await createUser(email, password);
        res.status(201).json({ message: 'User created', userId });
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
module.exports = router;
