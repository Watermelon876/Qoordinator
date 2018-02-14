const Sequelize = require('sequelize');

const sequelize = new Sequelize('development', 'Username', null, {
    host: 'localhost',
    dialect: 'postgres',
});
