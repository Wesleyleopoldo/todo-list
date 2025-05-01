const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const { Task } = require("../models/task");

async function initDb() {
    await sequelize.sync();
    console.log("Banco de dados sicronizado em memória");
}

module.exports = { sequelize, initDb, Task };