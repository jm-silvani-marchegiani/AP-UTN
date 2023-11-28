import React from "react";
import TaskItem from "./TaskItem";
import { Box } from "@mui/material";
import { ReactComponent as ZeroTasks } from "../assets/zero-task.svg";
const TaskList = ({ tasks, setTasks }) => {
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
