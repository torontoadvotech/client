import React from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../../lib/types';

import './mentorCard.scss';

interface Props {
  user: UserType;
}

const MentorCard: React.FC<Props> = ({ user }) => {
  // Each session has data for the mentor and mentee
  // Get user data for the complementary role

  console.log(user, 'user');
  // to={`/mentors/${user._id}`}
  return (
    <Link  to={{ pathname: `/mentors/${user._id}`, state: { user } }}>
      <div className='mentor-card'>
        <div className='mentor-card--img-container'>
          <img
            src='https://dummyimage.com/500x500/ffffff/0011ff'
            alt={`${user.name}'s profile image`}
            className='mentor-card--profile-image'
          />
        </div>
        <div className='mentor-card--details'>
          <h4 className='mentor-card--name'>{user.name}</h4>
          <span className='mentor-card--location'>
            {user.location.description}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MentorCard;
