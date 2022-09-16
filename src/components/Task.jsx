import React from "react";
import { useState } from "react";

const Task = (props) => {
  const [complete, setComplete] = useState(false);
  const handleComplete = () => {
    setComplete(!complete);
  };
  const handleDelete = () => {};
  return (
    <li>
      <span onClick={handleComplete} className={complete ? "completed" : ""}>
        {props.task}
      </span>
      <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
    </li>
  );
};

export default Task;
