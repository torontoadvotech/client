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
      <div className="user-info">
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
            Edit account
          </button>
        </div>
      </div>
      <div className="profile-status">
        <h2>Application status</h2>
        <div className="status-container">
          <h3>Pending</h3>
          <p>
            Enim nostrud ex do elit et pariatur voluptate laboris mollit nulla
            dolor.
          </p>
        </div>
        <div className="button-container"></div>
        {/* left off here */}
      </div>
    </div>
  );
};

export default ProfileSummary;
