import React from "react";
import TaskItem from "./TaskItem";
import { Container, Typography } from "@mui/material";
import { ReactComponent as ZeroTasks } from "../assets/zero-task.svg";
const TaskList = ({ tasks, setTasks }) => {
  return (
    <Container sx={{ display: "grid", justifyItems: "center" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "1rem" }}
        gutterBottom
      >
        Lista de Tareas
      </Typography>
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
    </Container>
  );
};

export default TaskList;
