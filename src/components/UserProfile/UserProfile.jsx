import React, { useContext } from "react";
import { UserProfileContext } from "../../context/UserProfileContext";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Repositories from "./Repositories/Repositories";

export default function UserProfile() {
  const { profile, repos } = useContext(UserProfileContext);

  return (
    <div>
      <ProfileHeader profile={profile} />
      <Repositories repos={repos} />
    </div>
  );
}
