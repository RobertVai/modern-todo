import React from 'react'
import styles from "../TodoButtons/TodoButtons.module.css"

const TodoButtons = ({setFilter,clearTasks, itemsLeft, filter}) => {
  return (
    <>
    <button className={styles.taskButton}>{itemsLeft} items left</button>
    <div className={styles.filterButtons}>
      <button onClick={() => setFilter("all")} 
      className={filter === "all" ? styles.activeButton : styles.taskButton}>All</button>
      <button onClick={() => setFilter("active")}
        className={filter === "active" ? styles.activeButton : styles.taskButton}>Active</button>
      <button onClick={() => setFilter("done")}
        className={filter === "done" ? styles.activeButton : styles.taskButton}>Completed</button>
    </div>
      <button onClick={clearTasks} className={styles.taskButton}>Clear Completed</button>

    </>
  )
}

export default TodoButtons