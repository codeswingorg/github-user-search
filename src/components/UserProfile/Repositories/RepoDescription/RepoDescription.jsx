import React from "react";
import styles from "./RepoDescription.module.css";

export default function RepoDescription({ description }) {
  return <p className={styles.repoDescription}>{description}</p>;
}
