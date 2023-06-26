import React, { useContext } from "react";
import styles from "./UserProfile.module.css";
import { UserProfileContext } from "../../context/UserProfileContext";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

export default function UserProfile() {
  const { profile } = useContext(UserProfileContext);

  return (
    <div className={styles.profile}>
      <ProfileHeader profile={profile} />
    </div>
  );
}
