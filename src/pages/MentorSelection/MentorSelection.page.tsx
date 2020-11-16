import React, { useEffect, useState } from 'react';
import MentorCard from '../../components/MentorCard/MentorCard';
import { v4 as uuidv4 } from 'uuid';
import API from '../../lib/API';
import { UserType } from '../../lib/types';

import './mentorSelection.scss';

const MentorSelection = () => {
  const [mentors, setMentors] = useState<UserType[]>();

  const getAllMentors = async () => {
    const res = await API.getAllMentors();

    setMentors(res.data.data);
  };

  useEffect(() => {
    getAllMentors();
  }, []);
  return (
    <main className='mentor-selection-page'>
      <div className='mentor-container'>
        {mentors &&
          mentors.map((mentor) => <MentorCard key={uuidv4()} user={mentor} />)}
      </div>
    </main>
  );
};

export default MentorSelection;
