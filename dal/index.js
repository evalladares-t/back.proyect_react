const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('proyect_react', 'postgres', 'Desarrollo2020', {
    host: 'localhost',
    dialect:'postgres',
    dialectOptions: {
        timezone: 'Etc/GMT+0'
    },
    logging:false
});

module.exports = db;