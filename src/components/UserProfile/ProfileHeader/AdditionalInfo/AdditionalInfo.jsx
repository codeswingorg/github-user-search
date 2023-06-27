import React from "react";
import styles from "./AdditionalInfo.module.css";

export default function AdditionalInfo({ blog, accountCreatedOn }) {
  return (
    <div className={styles.additionalInfo}>
      {blog && <a href={blog}>{blog}</a>}
      <p>Joined on {accountCreatedOn}</p>
    </div>
  );
}
