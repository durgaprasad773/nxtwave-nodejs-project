const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');

// GET /users/details
router.get('/details', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ where: { user_id: req.query.user_id } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT /users/update
router.put('/update', authenticateToken, async (req, res) => {
  const { user_id, user_name, user_email, user_password } = req.body;

  try {
    const user = await User.findOne({ where: { user_id } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.user_name = user_name;
    user.user_email = user_email;
    user.user_password = user_password;

    await user.save();

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add other routes for /users/image, /users/insert, and /users/delete here

module.exports = router;
