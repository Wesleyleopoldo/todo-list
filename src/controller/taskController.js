const taskService = require("../services/taskService");

const createNewTask = async (request, response) => {
    const newTask = await taskService.createNewTask(request.body);
    return response.status(201).json(newTask);
}

module.exports = {
    createNewTask
}