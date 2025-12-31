import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to fetch all todos from backend
  const fetchTodos = () => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  // Used to load todos initially
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to add a new todo
  const addTodo = async () => {
    if (!title || !description) return;

    // Backend POST API call to save todo
    await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  //Function to delete a todo by ID, but this is not added now for my backend
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  return (
    <div className="container">
      <h2>Todo App</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="add-btn" onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span>
              <b>{todo.title}</b> <br />
              {todo.description}
            </span>

            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
