import React, { useState } from "react";
import "./userProfile.scss";
import ApplicationStatus from "./ApplicationStatus";
import ProfileSummary from "./ProfileSummary";
import EditProfile from "./EditProfile";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const accepted = true;


  return (
    <main className="profile-page">
      {!isEditing ? (
        <>
          <ProfileSummary
            startEditProfile={() => {
              setIsEditing(true);
            }}
            accepted={accepted}
          />
          <ApplicationStatus accepted={accepted} />
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
