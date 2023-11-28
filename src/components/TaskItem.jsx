import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task, setTasks, tasks }) => {
  const handleDelete = (id) => {
    let result = tasks.filter((element) => element.id !== id);
    setTasks(result);
  };

  const toggleTaskStatus = (id) => {
    let result = tasks.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          completed: !element.completed,
        };
      }
      return element;
    });

    setTasks(result);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid black",
      }}
    >
      <div style={{ width: "50%" }}>
        <h4
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </h4>
        <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.description}
        </p>
      </div>
      <div style={{ width: "30%" }}>
        <Button
          onClick={() => handleDelete(task.id)}
          variant="outlined"
          type="button"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button onClick={() => toggleTaskStatus(task.id)} variant="outlined">
          {!task.completed ? "Completar Tarea" : "Marcar como Pendiente"}
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
