const express = require("express");
const router = express.Router();

const { getTasks, addTask } = require("../controllers/taskController");

router.get("/tasks", getTasks);
router.post("/tasks", addTask);

module.exports = router;
