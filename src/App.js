import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Walk with dog" },
    { id: 3, text: "Do homework" },
  ]);
  const addTask = (task) => {
    setTasks((prevData) => {
      return [...prevData, { id: prevData.length + 1, text: task }];
    });
  };
  const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };
  return (
    <div className="App">
      <div className="ToDoList">
        <div className="title">To Do List</div>
        <AddTaskForm addTask={addTask} />
        <div className="tasks">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                name={task.text}
                removeTask={removeTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
