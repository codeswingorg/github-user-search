import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <UserProfile />
      </div>
    </>
  );
}

export default App;
