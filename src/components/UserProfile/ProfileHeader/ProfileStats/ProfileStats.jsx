import React from "react";
import styles from "./ProfileStats.module.css";

export default function ProfileStats({ followers, following }) {
  return (
    <div className={styles.profileStats}>
      <div>
        <span>{followers}</span>
        <p>Followers</p>
      </div>
      <div>
        <span>{following}</span>
        <p>Following</p>
      </div>
    </div>
  );
}
