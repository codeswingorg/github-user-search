import React from "react";
import styles from "./ProfileInfo.module.css";

export default function ProfileInfo({ name, login, bio }) {
  return (
    <div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.userName}>@{login}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
}
