import React from 'react';
import ApplicationStatus from './ApplicationStatus';
import { User } from '../../containers/user.container';

import './profile.scss';

const ProfilePage = () => {
  const { user } = User.useContainer();

  return (
    <main className="profile-page">
      <div className="profile-summary">
        <h2>Your account</h2>
        <div className="profile-summary--img-container">
          <img
            src="https://dummyimage.com/200x200/ffffff/0011ff"
            alt={`${user?.name}'s profile image`}
            className="profile-summary--img"
          />
        </div>
        <div className="profile-summary--details">
          <h1 className="user-name">{user?.name}</h1>
          <span className="user-email">{user?.email}</span>
          <button className="edit-profile">Edit profile</button>
        </div>
      </div>
      <ApplicationStatus />
    </main>
  );
};

export default ProfilePage;
