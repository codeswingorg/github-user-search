import React, { createContext, useState, useEffect } from "react";

const UserProfileContext = createContext(null);

const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const [follwers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSearchResults = async (query) => {
      const profileResponse = await fetch(
        `https://api.github.com/users/${query}`
      );
      const profileResults = await profileResponse.json();
      setProfile(profileResults);

      const followersResponse = await fetch(profileResults.followers_url);
      const followersResults = await followersResponse.json();
      setFollowers(followersResults);

      const reposResponse = await fetch(profileResults.repos_url);
      const reposResults = await reposResponse.json();
      setRepos(reposResults);
    };

    if (searchQuery)
      try {
        fetchSearchResults(searchQuery);
      } catch (error) {
        console.log(error);
      }
  }, [searchQuery]);

  const value = {
    profile,
    follwers,
    repos,
    searchQuery,
    setSearchQuery,
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileContext, UserProfileProvider };
