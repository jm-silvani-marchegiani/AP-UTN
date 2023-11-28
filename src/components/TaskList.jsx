import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <>
      <h2>Lista de tareas</h2>
      {tasks
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((task, index) => {
          return (
            <TaskItem
              setTasks={setTasks}
              tasks={tasks}
              key={index}
              task={task}
            />
          );
        })}
    </>
  );
};

export default TaskList;
