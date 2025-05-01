const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:", {
    logging: false
})

module.exports = { Sequelize, DataTypes, sequelize }