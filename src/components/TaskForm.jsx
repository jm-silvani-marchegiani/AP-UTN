import { Box, Grid, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import TaskList from "./TaskList";

import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { StyledAddButton } from "../utils/Icons";



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
    <Box
      sx={{ display: "grid", justifyContent: "space-around", width: "100%" }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container sx={{ height: "70px", marginBottom: "33px" }}>
          <Grid
            container
            item
            xs={9.5}
            md={10}
            sx={{ height: "100%", rowGap: "7px" }}
          >
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
                border: "1px solid #FF8303",
                borderRadius: "4px",
                color: "#F0E3CA",
                paddingInline: "10px",
                ":hover": { backgroundColor: "#2B2A27" },
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
                border: "1px solid #FF8303",
                borderRadius: "4px",
                color: "#F0E3CA",
                paddingInline: "10px",
                ":hover": { backgroundColor: "#2B2A27" },
              }}
            />
          </Grid>
          <Grid
            container
            item
            xs={2}
            sx={{ height: "100%", alignContent: "center" }}
          >
            <IconButton type="submit" variant="contained">
              <StyledAddButton title="Añadir tarea" />
            </IconButton>
          </Grid>
        </Grid>
      </form>
      <Grid container>
        <Grid container item sx={{ display: "flex", justifyContent: "center" }}>
          <TaskList setTasks={setTasks} tasks={tasks} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskForm;
