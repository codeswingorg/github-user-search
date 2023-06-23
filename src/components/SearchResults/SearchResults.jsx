import React, { useContext } from "react";
import { SearchResultsContext } from "../../context/searchResultsContext";

export default function SearchResults() {
  const { results } = useContext(SearchResultsContext);
  console.log(results);
  return <div>SearchResults</div>;
}
