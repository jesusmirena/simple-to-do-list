import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoListState, setToDoListState] = useState([]);
  const [TaskName, setTaskName] = useState("");

  const generateId = () => {
    //Function that creates a random ID
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);

    return random + dateNow;
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      TaskName,
    };

    //Adding an ID to our taskObj
    taskObj.id = generateId();

    setToDoListState([...toDoListState, taskObj]);
    setTaskName("");
  };

  const deleteTask = (taskId) => {
    const updatedList = toDoListState.filter((task) => task.id !== taskId);
    setToDoListState(updatedList);
  };
  console.log(toDoListState);
  return (
    <div className="App">
      <h1>ToDo List equipo 14</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={TaskName}
          type="text"
          placeholder="Ingresa tu tarea aquí"
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" />
      </form>
      <ToDoList toDoListState={toDoListState} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
