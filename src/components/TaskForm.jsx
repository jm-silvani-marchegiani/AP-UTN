import { Container, Grid, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import TaskList from "./TaskList";
import { ReactComponent as ButtonAdd } from "../assets/button-add.svg";

import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

const StyledButtonAdd = styled(ButtonAdd)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});

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
    <Container
      sx={{ display: "grid", justifyContent: "center", maxWidth: "80%" }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid container item xs={10} sx={{ paddingY: "1rem", gap: "8px" }}>
            <Input
              placeholder="Tarea..."
              name="title"
              variant="outlined"
              value={task.title || ""}
              onChange={handleTask}
              fullWidth
              disableUnderline
              required
              sx={{
                height: "32px",
                border: "1px solid orange",
                borderRadius: "4px",
                color: "#F0E3CA",
                padding: "10px",
              }}
            />
            <Input
              placeholder="Descripción..."
              name="description"
              variant="outlined"
              fullWidth
              disableUnderline
              value={task.description || ""}
              onChange={handleTask}
              sx={{
                height: "32px",
                border: "1px solid orange",
                borderRadius: "4px",
                color: "#F0E3CA",
                padding: "10px",
              }}
            />
          </Grid>
          <Grid container item xs={2}>
            <IconButton type="submit" variant="contained">
              <StyledButtonAdd />
            </IconButton>
          </Grid>
        </Grid>
      </form>

      <TaskList setTasks={setTasks} tasks={tasks} />
    </Container>
  );
};

export default TaskForm;
