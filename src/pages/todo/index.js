import { useState, useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Todo List</h1>
      <input placeholder="..." />
      <button>add</button>
      <ul>
        {todos ??
          todos.map((todo) => {
            <li>{todo}</li>;
          })}
      </ul>
    </div>
  );
}
export default Todo;
