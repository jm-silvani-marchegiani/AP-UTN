import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import TaskList from "./TaskList";

const TaskForm = ({ setTasks, tasks }) => {
  const [task, setTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    //Sintaxis de desestructuración, arreglo compuesto por estado inicial de tasks + la tarea que le agregamos con task.
    setTasks([...tasks, task]);
    setTask({});
  };

  const handleTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>TO DO LIST</h1>
        <Input
          placeholder="Tarea"
          name="tarea"
          variant="outlined"
          value={task.tarea || ""}
          onChange={handleTask}
        />
        <br />
        <Input
          placeholder="Descripcion"
          name="descripcion"
          variant="outlined"
          value={task.descripcion || ""}
          onChange={handleTask}
        />

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>

      <TaskList tasks={tasks} />
    </>
  );
};

export default TaskForm;
