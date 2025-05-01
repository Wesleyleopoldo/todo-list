const { sequelize } = require("./sequelize")

const Task = require("../models/task")

async function initDb() {
    await sequelize.sync();
    console.log("Banco de dados sicronizado em memória");
}

module.exports = { sequelize, Task, initDb };