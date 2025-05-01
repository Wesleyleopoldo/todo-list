const { Task, initDb } = require("../resources/db")

const createNewTask = async (body) => {
    const datas = body;
    
    const newTask = await Task.create(datas)

    return newTask;
}

module.exports = {
    createNewTask
}