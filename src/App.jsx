import { useState } from "react";

import "./App.css";

function App() {
  const [task,setTask] = useState ("")
  const [tasks,setTasks] = useState ([])
  const [filter,setFilter] = useState ("all")
  const [theme,setTheme] = useState ("light")

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Math.random(),
      text: task,
      completed: false
    }
    setTasks ([...tasks,newTask]);
    setTask("");
  }

  const deleteTask = (id) => {
    setTasks (tasks.filter((t) => t.id !== id))
  }

  const toggleTask = (id) => {
    setTasks (tasks.map((t) => t.id === id ? {...t, completed: !t.completed} : t))
  }

  const filteredTasks = tasks.filter((t) =>{
    if (filter === "active") return !t.completed;
    if (filter === "done") return t.completed;
    return true;
  })

  const clearTasks = () => {
    setTasks([])
  }
  
  

  return (
    <div>
      <input 
      type="text"
      placeholder="Add a new task ..."
      value={task}
      onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={addTask}>ADD</button>

      {filteredTasks.map((t) => (
        <li key={t.id}>
          <input type="checkbox"
          checked={t.completed}
          onClick={() => toggleTask(t.id)}></input>
          <p style={{textDecoration: t.completed ? "line-through" : "none"}}>{t.text}</p>
          <button onClick={() => deleteTask(t.id)}>X</button>

        </li>
      ))}

      <button onClick={() => setFilter("all")}>ALL</button>
      <button onClick={() => setFilter("active")}>ACTIVE</button>
      <button onClick={() => setFilter("done")}>DONE</button>

      <button onClick={clearTasks}>CLEAR TASKS</button>
    </div>
  );
}

export default App;
