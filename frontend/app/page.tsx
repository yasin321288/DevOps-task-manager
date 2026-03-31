"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  // ✅ Dynamic API URL (IMPORTANT FIX)
  const API_BASE = "http://localhost:5000";

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_BASE}/tasks`);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    try {
      await fetch(`${API_BASE}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevOps Task Manager 🚀</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
