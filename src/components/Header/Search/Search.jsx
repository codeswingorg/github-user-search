import React, { useContext } from "react";
import { UserProfileContext } from "../../../context/UserProfileContext";
import styles from "./Search.module.css";

export default function Search() {
  const { setSearchQuery } = useContext(UserProfileContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchQuery(formData.get("searchField"));
  };

  return (
    <div className={styles.search}>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name="searchField"
          className={styles.field}
          placeholder="Search by username"
        />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
}
