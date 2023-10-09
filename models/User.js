const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const User = db.define('User', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
  },
  user_email: {
    type: DataTypes.STRING,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING,
  },
  user_image: {
    type: DataTypes.STRING,
  },
  total_orders: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_logged_in: {
    type: DataTypes.DATE,
  },
});

module.exports = User;
