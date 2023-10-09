const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// POST /auth/login
router.post('/login', async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    const user = await User.findOne({ where: { user_email, user_password } });
    if (!user) return res.status(401).json({ message: 'Authentication failed' });

    const token = jwt.sign({ user_id: user.user_id }, 'your_secret_key');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add other authentication routes (e.g., registration) as needed

module.exports = router;
