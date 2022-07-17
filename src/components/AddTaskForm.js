import React, { useState } from "react";
import "./AddTaskForm.css";

const AddTaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const enteredTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const addNewTask = (event) => {
    event.preventDefault();
    props.addTask(enteredTask);
    setEnteredTask("");
  };
  return (
    <form className="task-form" onSubmit={addNewTask}>
      <input
        className="input-field"
        type="text"
        value={enteredTask}
        onChange={enteredTaskHandler}
      ></input>
      <button className="input-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
