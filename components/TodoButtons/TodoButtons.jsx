import React from 'react'
import styles from "../TodoButtons/TodoButtons.module.css"

const TodoButtons = ({setFilter,clearTasks}) => {
  return (
    <>
    <button className={styles.taskButton}>5 ITEMS LEFT</button>
    <div>
        <button onClick={() => setFilter("all")} className={styles.taskButton}>ALL</button>
      <button onClick={() => setFilter("active")} className={styles.taskButton}>ACTIVE</button>
      <button onClick={() => setFilter("done")} className={styles.taskButton}>DONE</button>
    </div>
      <button onClick={clearTasks} className={styles.taskButton}>CLEAR TASKS</button>
    </>
  )
}

export default TodoButtons