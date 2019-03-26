const Sequelize = require('sequelize');
module.exports = new Sequelize('Registration', 'root', 'wallmart01', {
    host: 'localhost',
    dialect: 'mysql'
  });

