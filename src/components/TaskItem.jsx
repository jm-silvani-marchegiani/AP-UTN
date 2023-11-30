import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {
  StyledCheckedButton,
  StyledDeleteButton,
  StyledEditButton,
  StyledUncheckedButton,
} from "../utils/Icons";

const TaskItem = ({ task, setTasks, tasks }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", description: "" });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleDelete = (id, confirmation) => {
    setOpen(true);
    if (confirmation) {
      let result = tasks.filter((element) => element.id !== id);
      setTasks(result);
      setOpen(false);
    }
  };

  const handleEdit = (id, confirmation) => {
    setOpenEditModal(true);
    if (confirmation) {
      const taskIndex = tasks.findIndex((element) => element.id === id);
      const updatedTasks = [...tasks];
      const updatedTask = { ...updatedTasks[taskIndex] };
      //Modificar titulo
      updatedTask.title =
        modalData.title !== "" ? modalData.title : updatedTask.title;
      //Modificar descripcion
      updatedTask.description =
        modalData.description !== ""
          ? modalData.description
          : updatedTask.description;

      updatedTasks[taskIndex] = updatedTask;
      setTasks(updatedTasks);
      setModalData({ title: "", description: "" });
      setOpenEditModal(false);
    }
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
    <>
      {/*DELETE DIALOG FEATURE */}
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
      {/*DELETE DIALOG FEATURE */}

      {/*EDIT DIALOG FEATURE */}
      <Dialog
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "360px",
            height: "451px",
            borderBlockStart: "5px solid #A35709",
            borderRadius: "0px",
            backgroundColor: "#242320",
          },
        }}
      >
        <DialogContent>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Grid
              container
              sx={{ height: "70px", marginBottom: "33px", paddingBlock: "" }}
            >
              <Grid
                container
                item
                xs={12}
                sx={{ height: "100%", rowGap: "7px" }}
              >
                <Input
                  placeholder="Tarea..."
                  name="modalTitle"
                  variant="outlined"
                  defaultValue={task.title || ""}
                  onChange={(e) => {
                    setModalData({
                      ...modalData,
                      title: e.target.value,
                    });
                  }}
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
                  name="modalDescription"
                  variant="outlined"
                  fullWidth
                  rows={14}
                  multiline
                  disableUnderline
                  defaultValue={task.description || ""}
                  onChange={(e) => {
                    setModalData({
                      ...modalData,
                      description: e.target.value,
                    });
                  }}
                  sx={{
                    height: "343px",
                    border: "1px solid #FF8303",
                    borderRadius: "4px",
                    color: "#F0E3CA",
                    paddingInline: "10px",
                    ":hover": { backgroundColor: "#2B2A27" },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
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
                width: "70px",
                height: "24px",
                border: "1px solid #A35709",
                borderRadius: "4px",
                color: "#D9D9D9",
                ":hover": { backgroundColor: "#2B2A27" },
                textTransform: "none",
              }}
              onClick={() => handleEdit(task.id, true)}
              autoFocus
            >
              Guardar
            </Button>
            <Button
              sx={{
                width: "70px",
                height: "24px",
                border: "1px solid #A35709",
                borderRadius: "4px",
                color: "#D9D9D9",
                ":hover": { backgroundColor: "#2B2A27" },
                textTransform: "none",
              }}
              onClick={handleCloseEditModal}
            >
              Cancelar
            </Button>
          </Container>
        </DialogActions>
      </Dialog>
      {/*EDIT DIALOG FEATURE */}

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
          sx={{
            border: "2px solid #A35709",
            borderRadius: "8px",
            maxWidth: "45rem",
            marginRight: { lg: "3rem", xs: "0" },
            ":hover": { backgroundColor: "#2B2A27" },
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: task.completed && 'url("./assets/completed.png")',
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
              // backgroundColor: task.completed
              //   ? "rgba(0, 255, 0, 0.3)" : "rgba(255, 230, 0, 0.3)"
            }}
          >
            <Typography
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
                fontSize: "22px",
                // color: "#F0E3CA",
                color: "#FF8303",

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
                // color: "#F0E3CA",
                color: "#FF8303",
              }}
              gutterBottom
            >
              {task.description}
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={2}
            sx={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              container
              item
              xs={12}
            >
              <IconButton
                onClick={() => handleDelete(task.id)}
                variant="outlined"
                type="button"
                disableRipple
              >
                <StyledDeleteButton title="Eliminar tarea" />
              </IconButton>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              container
              item
              xs={12}
            >
              <IconButton
                onClick={() => handleEdit(task.id)}
                variant="outlined"
                type="button"
                disableRipple
              >
                <StyledEditButton title="Editar tarea" />
              </IconButton>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              container
              item
              xs={12}
            >
              <IconButton
                onClick={() => toggleTaskStatus(task.id)}
                variant="outlined"
                type="button"
                disableRipple
              >
                {task.completed ? (
                  <StyledUncheckedButton title="Marcar tarea como pendiente" />
                ) : (
                  <StyledCheckedButton title="Marcar tarea como completada" />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaskItem;
