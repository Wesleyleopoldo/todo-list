const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./tasks.sqlite",
    logging: false
})

module.exports = { Sequelize, DataTypes, sequelize }