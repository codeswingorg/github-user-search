import { useContext } from "react";
import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";
import EmptyState from "./components/EmptyState/EmptyState";
import { UserProfileContext } from "./context/UserProfileContext";

function App() {
  const { profile } = useContext(UserProfileContext);

  return (
    <>
      <Header />
      <div className="container">
        {profile.length === 0 ? (
          <EmptyState
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            }
            title={"Search for a profile!"}
          />
        ) : (
          <UserProfile />
        )}
      </div>
    </>
  );
}

export default App;
