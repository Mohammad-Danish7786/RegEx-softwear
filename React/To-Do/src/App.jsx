import { useEffect, useState } from "react";
import "./App.css";
import "./style.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    filterHandler();
  }, [todos, status]);

  // Filter todos
  const filterHandler = () => {
    switch (status) {
      case "Complete":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;

      case "Uncomplete":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>DANISH TODO LIST</h1>
      </header>

      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;