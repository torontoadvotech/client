import React from "react";
import { User } from "../../containers/user.container";

interface Props {
  startEditProfile: () => void;
}

const ProfileSummary = ({ startEditProfile }: Props) => {
  const { user } = User.useContainer();

  return (
    <div className="profile-summary">
      <h2>Your account</h2>
      <div className="profile-summary--img-container">
        <img
          src={user?.photo}
          alt={`${user?.name}'s profile image`}
          className="profile-summary--img"
        />
      </div>
      <div className="profile-summary--details">
        <h1 className="user-name">{user?.name}</h1>
        <span className="user-email">{user?.email}</span>
        <button className="edit-profile" onClick={startEditProfile}>
          Edit profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSummary;
