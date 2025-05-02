const { Task, initDb } = require("../resources/db")

const createNewTask = async (body) => {
    const datas = body;
    
    const newTask = await Task.create(datas)

    return newTask;
}

const indexAllTasks = async () => {
    const tasks = await Task.findAll();
    return tasks;
}

const updateTask = async (id, body) => {
    const task = await Task.findByPk(id);

    if(!task) {
        throw new Error("Task não encontrada!!");
    }

    if(body.title) task.title = body.title;
    if(body.description) task.description = body.description;

    await task.save();

    return task;
}

const destroyTask = async (id) => {
    const task = await Task.findByPk(id);

    if(!task) {
        throw new Error("Task não encontrada!!");
    }

    await Task.destroy({
        where: { id: id }
    });

    return "Task excluída";
}

module.exports = {
    createNewTask,
    indexAllTasks,
    updateTask,
    destroyTask
}