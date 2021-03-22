import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../lib/API';
import { UserType } from '../../lib/types';

import './mentorProfile.scss';

const MentorProfilePage = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState<UserType>();

  useEffect(() => {
    const loadMentor = async () => {
      try {
        const res = await API.getOneMentor(mentorId);

        setMentor(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadMentor();
  });

  return (
    <main className='mentor-profile-page'>
      <h1>Mentor</h1>
      <div className='profile-summary--img-container'>
        <img
          src={mentor?.photo}
          alt={`${mentor?.name}'s profile image`}
          className='profile-summary--img'
        />
      </div>
      <div className='profile-summary--details'>
        <h1 className='mentor-name'>{mentor?.name}</h1>
        <span className='mentor-email'>{mentor?.email}</span>
        <button className='book=meeting' onClick={() => {}}>
          Book a call with {mentor?.name}
        </button>
      </div>
    </main>
  );
};

export default MentorProfilePage;
