import "./App.css";
import React from "react";
import Login from "./pages/login";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("login");
  }
  function handleTodo() {
    navigate("todo");
  }
  return (
    <div>
      <header id="header">
        <ul id="nav">
          <li className="nav-item">Home</li>
          <li className="nav-item" onClick={handleTodo}>
            Todo
          </li>
          <li className="nav-item">More</li>
        </ul>

        <button onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default App;
