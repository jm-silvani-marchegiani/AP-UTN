import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ReactComponent as DeleteButton } from "../assets/button-delete.svg";
import styled from "@emotion/styled";

const StyledDeleteButton = styled(DeleteButton)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});

const TaskItem = ({ task, setTasks, tasks }) => {
  const handleDelete = (id) => {
    let result = tasks.filter((element) => element.id !== id);
    setTasks(result);
  };
  // eslint-disable-next-line
  // eslint-disable-next-line
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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minWidth: { xs: "24rem", sm: "33rem", md: "48rem" },
        marginTop: "33px",
      }}
    >
      <Grid
        container
        sx={{
          border: "2px solid #A35709",
          borderRadius: "8px",
          marginBottom: "16px",
          maxWidth: "45rem",
          marginRight: { lg: "3rem", xs: "0" },
          ":hover": { backgroundColor: "#2B2A27" },
        }}
      >
        <Grid
          container
          item
          xs={10}
          sx={{
            display: "grid",
            wordBreak: "break-word",
            padding: "16px",
          }}
        >
          <Typography
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              fontSize: "22px",
              color: "#F0E3CA",
              fontWeight: "bold",
            }}
            gutterBottom
          >
            {task.title}
          </Typography>
          <Typography
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              fontSize: "14px",
              color: "#F0E3CA",
            }}
            gutterBottom
          >
            {task.description}
          </Typography>
        </Grid>

        <Grid container item xs={2} sx={{ display: "grid" }}>
          <IconButton variant="outlined" type="button" disableRipple>
            <StyledDeleteButton onClick={() => handleDelete(task.id)} />
          </IconButton>
          {/* <Button onClick={() => toggleTaskStatus(task.id)} variant="outlined">
            {!task.completed ? "Completar Tarea" : "Marcar como Pendiente"}
          </Button> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskItem;
