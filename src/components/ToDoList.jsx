import React from "react";
import Task from "./Task";

const ToDoList = ({ toDoListState, deleteTask }) => {
  return (
    <div>
      <h2>To Do List</h2>
      {toDoListState.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            TaskName={task.TaskName}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
