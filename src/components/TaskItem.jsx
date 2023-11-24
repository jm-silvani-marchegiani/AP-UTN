import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div>
      <h4>{task.tarea}</h4>
      <p>{task.descripcion}</p>
      <hr />
    </div>
  );
};

export default TaskItem;
