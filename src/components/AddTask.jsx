import React, { useState } from "react";

const AddTask = (props) => {
  const [task, setTask] = useState("");
  const handleChange = (e) => setTask(e.target.value);
  const handleClick = () => {
    props.addTask(task);
    setTask("");
  };
  return (
    <div className="my-todos">
      <h1 className="title">My toDo list</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add ToDo..."
          value={task}
          onChange={handleChange}
        />
        <button className="addBtn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
