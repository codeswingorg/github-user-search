import React from "react";
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture({ avatar_url, login }) {
  return (
    <div className={styles.profilePic}>
      <img src={avatar_url} alt={`${login} profile pic`} />
    </div>
  );
}
