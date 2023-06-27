import React, { useContext } from "react";
import styles from "./Header.module.css";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.innerContainer}>
          <Logo />
          <Search />
        </div>
      </div>
    </header>
  );
}
