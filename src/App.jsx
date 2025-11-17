import { useState } from "react";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import TodoButtons from "../components/TodoButtons/TodoButtons";
import { useLocalStorage } from "usehooks-ts";
import "./App.css";


function App() {
  const [task,setTask] = useState ("")
  const [tasks,setTasks] = useLocalStorage ("tasks", [])
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
    <div className="taskWrapper">
    <div className="hero">
      <div className="title">
      <h1>TODO</h1>
      <h1>X</h1>
      </div>
      </div> 
    <div className="taskRow">
      <TodoItem 
      task={task}
      setTask={setTask}
      addTask={addTask}/>
    </div>
      <TodoList 
      filteredTasks={filteredTasks}
      deleteTask={deleteTask}
      toggleTask={toggleTask}/> 

    <div className="buttonsContainer">
      <TodoButtons 
      setFilter={setFilter}
      clearTasks={clearTasks}/>
      </div>
      
    </div>
  );
}

export default App;
