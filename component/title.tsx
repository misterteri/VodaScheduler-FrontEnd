import React from "react";
import styles from "../styles/Title.module.css";

export default function Title() {
  return (
    <div style={{ marginTop: `4rem`, marginBottom: `4rem` }}>
      <div className={styles.h1}>Voda</div>
      <div className={styles.h2}>
        Scheduler<span>.</span>
      </div>
    </div>
  );
}
