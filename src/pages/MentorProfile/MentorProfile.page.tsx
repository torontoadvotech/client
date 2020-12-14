import React from 'react';
import { useParams } from 'react-router';

import './mentorProfile.scss';

const MentorProfilePage = () => {
  const { mentorId } = useParams();

  return (
    <main className='mentor-profile-page'>
      <div className='div'></div>
    </main>
  );
};

export default MentorProfilePage;
