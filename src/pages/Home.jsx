import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TaskForm from "../components/TaskForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    // Verificar si storedTasks es válido antes de intentar parsearlo
    const isValidStoredTasks =
      storedTasks !== null && storedTasks !== "null" && storedTasks !== "";

    if (isValidStoredTasks) {
      setTasks((prevTasks) => [...prevTasks, ...JSON.parse(storedTasks)]);
    }
  }, []);

  useEffect(() => {
    // Ordenar las tareas por createdAt de forma descendente
    const sortedTasks = tasks.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    localStorage.setItem("tasks", JSON.stringify(sortedTasks));
  }, [tasks]);

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
            App de Tareas
          </Typography>
          <TaskForm setTasks={setTasks} tasks={tasks} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
