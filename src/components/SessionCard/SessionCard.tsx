import React from 'react';
import { Session } from '../../lib/types';

import './sessionCard.scss';

interface Props {
  session: Session;
  role: 'mentor' | 'mentee';
}

const SessionCard = ({ session, role }: Props) => {
  // Each session has data for the mentor and mentee
  // Get user data for the complementary role
  const oppositeRole = role === 'mentor' ? 'mentee' : 'mentor';
  const otherUser = session[oppositeRole];

  // format dates as eg. Sunday February 24, 2020
  const formattedDate = new Date(session.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="session-card">
      <div className="session-card--img-container">
        <img
          src="https://dummyimage.com/100x100/ffffff/0011ff"
          alt={`${otherUser.name}'s profile image`}
          className="session-card--profile-image"
        />
      </div>
      <div className="session-card--details">
        <h4>{otherUser.name}</h4>
        <span className="session-card--date">{formattedDate}</span>
      </div>
    </div>
  );
};

export default SessionCard;
