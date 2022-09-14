const Sequelize = require('sequelize');

//allow for use of .env data
require('dotenv').config();

// create connection to db, whether local on on heroku using jawsdb
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("tech_blog_db", "root", "Kishore@123", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;
