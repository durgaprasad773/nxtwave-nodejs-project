const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite', // Path to your SQLite database file
});

module.exports = sequelize;
