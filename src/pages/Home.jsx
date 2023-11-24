import React, { useState } from "react";
import NavBar from "../components/NavBar";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <NavBar />
      <TaskForm setTasks={setTasks} tasks={tasks} />
    </>
  );
};

export default Home;
