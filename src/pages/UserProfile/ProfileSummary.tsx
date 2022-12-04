import React, { useState } from "react";
import { User } from "../../containers/user.container";

interface Props {
  startEditProfile: () => void;
}

const ProfileSummary = ({ startEditProfile }: Props) => {
  const { user } = User.useContainer();
  const [returningUser, setReturningUser] = useState<boolean>(false);
  // would call setReturningUser with true after user has been on this page,
  // maybe when they navigate away from page?

  const accepted = false;
  // I don't know where we're getting the user's application status
  // so I just mocked it for now

  const renderHeader = (acceptedStatus: boolean) => {
    let header;
    if (acceptedStatus && !returningUser) {
      header = (
        <h3>
          <span>&#127881;</span> Accepted <span>&#127881;</span>
        </h3>
      );
    } else if (acceptedStatus && returningUser) {
      header = null;
    } else {
      header = <h3>Pending</h3>;
    }
    return header;
  };

  const renderStatus = (acceptedStatus: boolean) => {
    return (
      <div>
        <div className="status-container">
          {renderHeader(acceptedStatus)}
          <p>
            Enim nostrud ex do elit et pariatur voluptate laboris mollit nulla
            dolor.
          </p>
        </div>
        <div className="button-container">
          {!acceptedStatus ? null : (
            <button className="cta-button">
              Connect with a {user?.role === "mentee" ? "mentor" : "mentee"}{" "}
              {">"}
            </button>
            // this button does not go anywhere yet
          )}
        </div>
      </div>
    );
  };

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
        {renderStatus(accepted)}
      </div>
    </div>
  );
};

export default ProfileSummary;
