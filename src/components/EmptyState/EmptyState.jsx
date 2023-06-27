import React from "react";
import styles from "./EmptyState.module.css";

export default function EmptyState({ icon, title }) {
  return (
    <div className={styles.emptyState}>
      {icon}
      <h2>{title}</h2>
    </div>
  );
}
