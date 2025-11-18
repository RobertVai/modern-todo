import React from "react";
import styles from "../TodoList/TodoList.module.css";

const TodoList = ({ filteredTasks, toggleTask}) => {
  return filteredTasks.map((t) => (
    <li key={t.id} className={styles.taskRow}>
      <div
        className={t.completed ? styles.circleDone : styles.circle}
        onClick={() => toggleTask(t.id)}
      ></div>

      <p className={t.completed ? styles.completedText : ""}>
        {t.text}
      </p>
    </li>
  ));
};

export default TodoList;
