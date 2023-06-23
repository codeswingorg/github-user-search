import React, { createContext, useState, useEffect } from "react";

const SearchResultsContext = createContext(null);

const SearchResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSearchResults = (query) => {
      fetch(`https://api.github.com/users/${query}`)
        .then((response) => response.json())
        .then((result) => {
          setResults(result);
        })
        .catch(() => console.log("An error happened"));
    };

    if (searchQuery) fetchSearchResults(searchQuery);
  }, [searchQuery]);

  const value = {
    results,
    searchQuery,
    setSearchQuery,
  };

  return (
    <SearchResultsContext.Provider value={value}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export { SearchResultsProvider, SearchResultsContext };
