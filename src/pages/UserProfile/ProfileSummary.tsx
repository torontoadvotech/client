import React, { useState, useEffect } from "react";
import { User } from "../../containers/user.container";
import { Link } from "react-router-dom";
import "./userProfile.scss";

interface Props {
  startEditProfile: () => void;
  accepted: boolean;
}

const ProfileSummary = ({ startEditProfile, accepted }: Props) => {
  const { user } = User.useContainer();
  console.log(user, 'user');
  const [returningUser, setReturningUser] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // would call setReturningUser with true after user has been on this page,
  // maybe when they navigate away from page?

  useEffect(() => {
    //TODO - setting role manually
    // user.role = 'mentee';
    // user.role = 'mentor';
    console.log(user, 'user');
    setIsLoaded(true);
  }, []);

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
    if( !isLoaded ) return null;

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
            user?.role === "mentee" ? <Link className="cta-button" to="/mentors">Connect with a Mentor</Link> : <Link className="cta-button" to="/mentor-availability">Set Your Availability</Link>
            
            // <button className="cta-button">
            //   {user?.role === "mentee" ? "Connect with a Mentor >" : "Set Your Availability"}            
            // </button>
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
            Edit Profile
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
