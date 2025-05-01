const express = require("express");
const taskController = require("./controller/taskController")

const router = express.Router();

router.post("/newtask", taskController.createNewTask);

module.exports = router;