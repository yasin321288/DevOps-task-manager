const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

// Read tasks
const getTasks = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};

// Add task
const addTask = (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(filePath));

  const newTask = {
    id: Date.now(),
    title: req.body.title,
    status: "pending",
  };

  tasks.push(newTask);

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

  res.json(newTask);
};

module.exports = { getTasks, addTask };
