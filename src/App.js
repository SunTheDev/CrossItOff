import "./App.css";
import { useState } from "react";
import cover from "./images/cover.jpg";
import Task from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const textHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      // completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  // const completeTask = (id) => {
  //   toDoList.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, completed: true };
  //     } else {
  //       return task;
  //     }
  //   });
  // };

  return (
    <div className="App">
      <img className="image" src={cover} alt="" />
      <div className="inputbar">
        <input
          type="text"
          onChange={textHandler}
          placeholder="List item here..."
        />
        <button className="button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="tasklist">
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
