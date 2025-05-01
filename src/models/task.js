const { DataTypes } = require("sequelize")
const sequelize = require("../resources/db");

const Task = sequelize.define("Task",{
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { sequelize, Task };