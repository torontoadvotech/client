import React, { useState } from "react";
import "./profile.scss";
import ApplicationStatus from "./ApplicationStatus";
import ProfileSummary from "./ProfileSummary";
import EditProfile from "./EditProfile";
import { User } from "../../containers/user.container";
import { Redirect } from "react-router";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <main className="profile-page">
      {!isEditing ? (
        <>
          <ProfileSummary
            startEditProfile={() => {
              setIsEditing(true);
            }}
          />
          <ApplicationStatus />
        </>
      ) : (
        <EditProfile
          endEditProfile={() => {
            setIsEditing(false);
          }}
        />
      )}
    </main>
  );
};

export default ProfilePage;
