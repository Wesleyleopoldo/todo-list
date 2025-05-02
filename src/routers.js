const express = require("express");
const taskController = require("./controller/taskController")

const router = express.Router();

router.post("/newtask", taskController.createNewTask);
router.get("/tasks", taskController.indexAllTasks);
router.put("/updatetask/:id", taskController.updateTask);
router.delete("/destroytask/:id", taskController.destroyTask);

module.exports = router;