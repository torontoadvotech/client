import React, { useEffect, useState } from 'react';
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
  return <main className='mentor-selection-page'></main>;
};

export default MentorSelection;
