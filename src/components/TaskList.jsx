import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <>
      <h2>Lista de tareas</h2>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}
    </>
  );
};

export default TaskList;
