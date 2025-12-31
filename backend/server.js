import express from "express";
import mongoose from "mongoose";
import Todo from "./models/Todo.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

// POST: Add Todo
app.post("/todos", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo" });
  }
});

// GET: Fetch Todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// Start server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
