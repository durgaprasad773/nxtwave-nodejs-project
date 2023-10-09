const express = require('express');
const app = express();
const sequelize = require('./db/connection');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

// Initialize Sequelize and sync the database
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.use(express.json());

// API routes
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
