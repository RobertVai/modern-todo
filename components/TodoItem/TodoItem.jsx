import React from "react";
import styles from "../TodoItem/TodoItem.module.css";

const TodoItem = ({ task, setTask, addTask }) => {
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      ></input>
    </div>
  );
};

export default TodoItem;
