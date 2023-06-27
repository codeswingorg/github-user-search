import React from "react";
import styles from "./RepoFooterItem.module.css";

export default function RepoFooterItem({ icon, title }) {
  return (
    <div className={styles.footerItem}>
      {icon}
      <span> {title}</span>
    </div>
  );
}
