import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ setTasks, tasks }) => {
  const [task, setTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    //Sintaxis de desestructuración, arreglo compuesto por estado inicial de tasks + la tarea que le agregamos con task.
    setTasks([...tasks, task]);
    setTask({});
  };

  const handleTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      completed: false,
      id: uuidv4(),
      createdAt: new Date(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>TO DO LIST</h1>
        <Input
          placeholder="Tarea"
          name="title"
          variant="outlined"
          value={task.title || ""}
          onChange={handleTask}
          required
        />
        <br />
        <Input
          placeholder="Descripcion"
          name="description"
          variant="outlined"
          value={task.description || ""}
          onChange={handleTask}
        />

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>

      <TaskList setTasks={setTasks} tasks={tasks} />
    </>
  );
};

export default TaskForm;
