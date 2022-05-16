import React from "react";

const Task = ({ id, TaskName, deleteTask }) => {
  const handleDelete = (taskId) => {
    const response = confirm("Do you want to delete this task?");
    if (response) {
      deleteTask(taskId);
    }
  };
  return (
    <div>
      <p>{TaskName}</p>
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
};

export default Task;
