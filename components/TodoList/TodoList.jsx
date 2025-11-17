import React from 'react'
import styles from "../TodoList/TodoList.module.css"

const TodoList = ({filteredTasks,toggleTask,deleteTask}) => {
  return (
        
        
        filteredTasks.map((t) => (
        <li key={t.id} className={styles.taskRow}>
          <input 
          className={styles.checkbox}
          type="checkbox"
          checked={t.completed}
          onClick={() => toggleTask(t.id)}></input>
          <p style={{textDecoration: t.completed ? "line-through" : "none"}}>{t.text}</p>
          <button onClick={() => deleteTask(t.id)}>X</button>

        </li>
      ))
 
  )
  
}

export default TodoList