import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  console.log(props);
  return (
    <ul className="todo-list">
      {props.tasks.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
