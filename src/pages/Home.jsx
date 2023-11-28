import React, { useState } from "react";
import NavBar from "../components/NavBar";
import TaskForm from "../components/TaskForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginTop: "1rem" }}
            gutterBottom
          >
            Trabajo Integrador Final
          </Typography>
          <TaskForm setTasks={setTasks} tasks={tasks} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
