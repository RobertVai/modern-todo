import React from 'react'
import styles from "../MobileButtons/MobileButtons.module.css"

const MobileButtons = ({setFilter,filter}) => {
  return (
    
              <div className={styles.mobileButtons}> 
              <button onClick={() => setFilter("all")} 
              className={filter === "all" ? styles.activeButton : styles.taskButton}>All</button>
              <button onClick={() => setFilter("active")}
                className={filter === "active" ? styles.activeButton : styles.taskButton}>Active</button>
              <button onClick={() => setFilter("done")}
                className={filter === "done" ? styles.activeButton : styles.taskButton}>Completed</button>
              </div>
    
  )
}

export default MobileButtons