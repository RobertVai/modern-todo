import React from 'react'
import styles from "../TodoList/TodoList.module.css"

const TodoList = ({filteredTasks,toggleTask,deleteTask}) => {
  return (
        
        
        filteredTasks.map((t) => (
        <li key={t.id} className={styles.taskRow}>
     <div
  className={t.completed ? styles.circleDone : styles.circle}
  onClick={() => toggleTask(t.id)}
></div>


          <p style={{textDecoration: t.completed ? "line-through" : "none"}}>{t.text}</p>
          <button onClick={() => deleteTask(t.id)}>X</button>

        </li>
      ))
 
  )
  
}

export default TodoList