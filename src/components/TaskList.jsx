import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { Box } from "@mui/material";
import { ReactComponent as ZeroTasks } from "../assets/zero-task.svg";
const TaskList = ({ tasks, setTasks }) => {
  // eslint-disable-next-line
  const [tasksChanged, setTasksChanged] = useState(false);

  // Efecto que se ejecuta cada vez que cambian las tareas "tasks"
  useEffect(() => {
    // Actualiza la variable de estado para desencadenar un nuevo renderizado
    //Al cambiar el estado de una variable useState.. ya es suficiente para provocar el re-renderizado de un componente de react.
    setTasksChanged((prev) => !prev);
  }, [tasks]);

  return (
    <Box sx={{ display: "grid", justifyItems: "center" }}>
      {tasks.length === 0 && <ZeroTasks style={{ marginTop: "2rem" }} />}
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
    </Box>
  );
};

export default TaskList;
