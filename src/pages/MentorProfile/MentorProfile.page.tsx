import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../lib/API';
import { UserType } from '../../lib/types';

import './mentorProfile.scss';

interface ParamTypes {
  mentorId: string;
}

const MentorProfilePage = () => {
  const { mentorId } = useParams<ParamTypes>();
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
  }, []);

  return (
    <main className='mentor-profile-page'>
      <h1>Mentor</h1>
      <div className='profile-summary--img-container'>
        <img
          src='https://picsum.photos/280/300'
          alt={`${mentor?.name}'s profile image`}
          className='profile-summary--img'
        />
      </div>
      <div className='profile-summary--details'>
        <h2 className='mentor-name'>{mentor?.name}</h2>
        <span className='mentor-email'>{mentor?.email}</span>
        <button
          className='button button-primary book-meeting'
          onClick={() => {}}
        >
          Request a meeting
        </button>
      </div>
    </main>
  );
};

export default MentorProfilePage;
