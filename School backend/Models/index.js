const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.Acquire,
            idle: config.pool.idle,
        },
    }
);

const db = {};
db.sequelize =Sequelize;
db.sequelize =sequelize;
db.student = require("./Student.Models.js")(sequelize, Sequelize);

module.exports = db