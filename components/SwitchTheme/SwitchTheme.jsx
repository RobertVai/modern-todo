import styles from "./SwitchTheme.module.css";

export default function SwitchTheme({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className={styles.btn}>
      <img
        src={theme === "dark" ? "/icons/icon-sun.svg" : "/icons/icon-moon.svg"}
        className={styles.icon}
      />
    </button>
  );
}
