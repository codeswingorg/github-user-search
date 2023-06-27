import React from "react";
import styles from "./RepoName.module.css";

export default function RepoName({ name, href }) {
  return (
    <h3 className={styles.repoName}>
      <a target="_blank" href={href}>
        {name}
      </a>
    </h3>
  );
}
