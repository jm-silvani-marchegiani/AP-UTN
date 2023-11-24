import { Button, Input} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import TaskList from "./TaskList";

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault() 
    //Sintaxis de desestructuración, arreglo compuesto por estado inicial de tasks + la tarea que le agregamos con task.
    setTasks([...tasks, task])
  }
  const handleTask = (e) => {
    setTask(e.target.value)
  }
  console.log(tasks)
  console.log(task)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>TaskForm</div>
        <Input label="Tarea" variant="outlined" onChange={handleTask}/>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
      
      <TaskList tasks={tasks}/>
    </>
  );
};

export default TaskForm;
