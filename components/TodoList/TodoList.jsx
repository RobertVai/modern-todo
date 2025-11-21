import React from "react";
import styles from "../TodoList/TodoList.module.css";

const TodoList = ({ filteredTasks, toggleTask,deleteTask, theme}) => {
  return filteredTasks.map((t) => (
    <li key={t.id} className={theme === "dark" ? styles.taskRow : styles.taskRowLight}>
      <div
        className={t.completed ? styles.circleDone : styles.circle}
        onClick={() => toggleTask(t.id)}
      ></div>

      <p className={t.completed ? styles.completedText : ""}>
        {t.text}
      </p>
      <button className={styles.deleteButton} onClick={() => deleteTask(t.id)}>X</button>
    </li>
  ));
};

export default TodoList;
