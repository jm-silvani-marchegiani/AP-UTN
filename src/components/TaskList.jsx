import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <>
      <h1>Lista de tareas</h1>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}
    </>
  );
};

export default TaskList;
