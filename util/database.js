const Sequelize = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'mysql', // Use the appropriate dialect
  });
  

module.exports = sequelize;
