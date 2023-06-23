import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchResultsProvider } from "./context/searchResultsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchResultsProvider>
      <App />
    </SearchResultsProvider>
  </React.StrictMode>
);
