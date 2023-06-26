import React from "react";
import styles from "./ProfileLink.module.css";

export default function ProfileLink({ href }) {
  return (
    <a className={styles.profileLink} target="_blank" href={href}>
      Visit profile
    </a>
  );
}
