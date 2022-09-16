import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
