import { useState } from "react";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import TodoButtons from "../components/TodoButtons/TodoButtons";
import SwitchTheme from "../components/SwitchTheme/SwitchTheme";
import MobileButtons from "../components/MobileButtons/MobileButtons";
import { useLocalStorage } from "usehooks-ts";
import "./App.css";


function App() {
  const [task,setTask] = useState ("")
  const [tasks,setTasks] = useLocalStorage ("tasks", [])
  const [filter,setFilter] = useState ("all")
  const [theme,setTheme] = useLocalStorage ("theme", "dark")

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

  const toggleTask = (id) => {
    setTasks (tasks.map((t) => t.id === id ? {...t, completed: !t.completed} : t))
  }

  const filteredTasks = tasks.filter((t) =>{
    if (filter === "active") return !t.completed;
    if (filter === "done") return t.completed;
    return true;
  })

  const clearTasks = () => {
    setTasks(tasks.filter((t) => !t.completed));
  }
  
  const itemsLeft = tasks.filter(t => !t.completed).length; 

  const toggleTheme = () => {
    setTheme (theme === "dark" ? "light" : "dark")
  }

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
    <div className="taskWrapper">
    <div className="hero">
      <div className="title">
      <h1>TODO</h1>
      <SwitchTheme toggleTheme={toggleTheme} theme={theme} />
      </div>
      </div> 
    <div className="taskRow">
      <TodoItem 
      task={task}
      setTask={setTask}
      addTask={addTask}/>
    </div>
    <div className="todoList">
      <TodoList 
      filteredTasks={filteredTasks}
      toggleTask={toggleTask}/> 
  </div>
    <div className="buttonsContainer">
      <TodoButtons 
      filter={filter}
      setFilter={setFilter}
      clearTasks={clearTasks}
      itemsLeft={itemsLeft}/>
      </div>
             <div className="mobileButtons">
        <MobileButtons 
        setFilter={setFilter}
        filter={filter}/>
      </div>
    </div>
    </div>
  );
}

export default App;
