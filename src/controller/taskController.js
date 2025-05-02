const { response } = require("../app");
const taskService = require("../services/taskService");

const createNewTask = async (request, response) => {
    const newTask = await taskService.createNewTask(request.body);
    return response.status(201).json(newTask);
}

const indexAllTasks = async (_request, response) => {
    const allTasks = await taskService.indexAllTasks();
    return response.status(200).json(allTasks);
}

const updateTask = async (request, response) => {
    const updatedTask = await taskService.updateTask(request.params.id, request.body);
    return response.status(201).json(updatedTask);
}

const destroyTask = async (request, response) => {
    const destroyedTask = await taskService.destroyTask(request.params.id);
    return response.status(204).json(destroyedTask);
}

module.exports = {
    createNewTask,
    indexAllTasks,
    updateTask,
    destroyTask
}