const { DataTypes, sequelize } = require("../resources/sequelize");

const Task = sequelize.define("Task", {
    id: {
        autoIncrement: true,
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

module.exports = Task;