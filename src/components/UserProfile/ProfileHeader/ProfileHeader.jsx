import React from "react";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfileLink from "./ProfileLink/ProfileLink";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import ProfileStats from "./ProfileStats/ProfileStats";
import { formatDate } from "../../../util/formatDate";

export default function ProfileHeader({ profile }) {
  const {
    name,
    login,
    avatar_url,
    html_url,
    bio,
    blog,
    followers,
    following,
    created_at,
  } = profile;

  const accountCreatedOn = formatDate(created_at);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ProfilePicture avatar_url={avatar_url} login={login} />
        <ProfileLink href={html_url} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <ProfileInfo name={name} login={login} bio={bio} />
        <AdditionalInfo blog={blog} accountCreatedOn={accountCreatedOn} />
        <ProfileStats followers={followers} following={following} />
      </div>
    </div>
  );
}
