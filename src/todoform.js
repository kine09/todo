import React from "react";
import { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <div>
      <form type="submit">
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button onClick={handleSubmit}>click</button>
      </form>
    </div>
  );
};

export default ToDoForm;
