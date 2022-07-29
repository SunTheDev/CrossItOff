import React from "react";

const Task = (props) => {
  return (
    <div className="eachitem">
      <li
        style={{
          listStyle: "none",
        }}
      >
        {props.taskName}
      </li>
      <button
        className="deletebutton"
        onClick={() => props.deleteTask(props.id)}
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default Task;
