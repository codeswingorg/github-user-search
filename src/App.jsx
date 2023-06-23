import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchResults />
      </div>
    </>
  );
}

export default App;
