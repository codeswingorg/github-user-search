import React, { useContext } from "react";
import styles from "./Header.module.css";
import { SearchResultsContext } from "../../context/searchResultsContext";

export default function Header() {
  const { setSearchQuery, searchQuery } = useContext(SearchResultsContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchQuery(formData.get("searchField"));
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.innerContainer}>
          <div className={styles.logo}>
            <h3>Github user search</h3>
          </div>

          <div className={styles.search}>
            <form onSubmit={onSubmit}>
              <input
                type="search"
                name="searchField"
                className={styles.field}
                placeholder="Github username"
              />
              <button type="submit" className={styles.searchBtn}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
