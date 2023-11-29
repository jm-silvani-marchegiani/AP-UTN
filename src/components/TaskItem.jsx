import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ReactComponent as DeleteButton } from "../assets/button-delete.svg";
import styled from "@emotion/styled";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const StyledDeleteButton = styled(DeleteButton)({
  "&:hover": {
    "& rect": {
      fill: "#23221F",
    },
  },
});

const TaskItem = ({ task, setTasks, tasks }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id, confirmation) => {
    setOpen(true);
    if (confirmation) {
      let result = tasks.filter((element) => element.id !== id);
      setTasks(result);
      setOpen(false);
    }
  };

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
    <>
      {/* DIALOG FEATURE */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "281px",
            height: "143px",
            borderBlockStart: "5px solid #A35709",
            borderRadius: "0px",
            backgroundColor: "#242320",
          },
        }}
      >
        <DialogContent>
          <DialogContentText
            sx={{
              fontSize: "24px",
              textAlign: "center",
              color: "#fff",
              paddingBlockStart: "0.4rem",
            }}
            id="alert-dialog-description"
          >
            ¿Borrar ésta tarea?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                width: "64px",
                height: "24px",
                border: "1px solid #A35709",
                borderRadius: "4px",
                color: "#D9D9D9",
                ":hover": { backgroundColor: "#2B2A27" },
                textTransform: "none",
              }}
              onClick={() => handleDelete(task.id, true)}
              autoFocus
            >
              Si
            </Button>
            <Button
              sx={{
                width: "64px",
                height: "24px",
                border: "1px solid #A35709",
                borderRadius: "4px",
                color: "#D9D9D9",
                ":hover": { backgroundColor: "#2B2A27" },
                textTransform: "none",
              }}
              onClick={handleClose}
            >
              No
            </Button>
          </Container>
        </DialogActions>
      </Dialog>
      {/* DIALOG FEATURE */}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          minWidth: { xs: "24rem", sm: "33rem", md: "48rem" },
          marginBottom: "16px",
        }}
      >
        <Grid
          container
          onClick={() => toggleTaskStatus(task.id)}
          sx={{
            border: "2px solid #A35709",
            borderRadius: "8px",
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
    </>
  );
};

export default TaskItem;
