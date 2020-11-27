import React, { useEffect, useState } from 'react';
import MentorCard from '../../components/MentorCard/MentorCard';
import { v4 as uuidv4 } from 'uuid';
import API from '../../lib/API';
import { UserType } from '../../lib/types';

import './mentorSelection.scss';

import useWindowSize from '../../hooks/useWindowWidth';

// TODO: Figure out how to use the hook above to set the limit

const MentorSelection = () => {
  const [mentors, setMentors] = useState<UserType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>();

  const getMentors = async (page: number, limit: number) => {
    const res = await API.getAllMentors(page, limit);

    setMentors([...mentors, ...res.data.data]);

    // Calculate and store last page so load more button can be hidden
    // if there are no more mentors to fetch
    setLastPage(Math.ceil(res.count / limit));
  };

  useEffect(() => {
    let limit = 8;

    if (window.innerWidth < 520) {
      limit = 4;
    } else if (window.innerWidth < 1150) {
      limit = 6;
    }

    getMentors(page, limit);
  }, [page]);

  return (
    <main className='mentor-selection-page'>
      <div className='mentor-container'>
        {mentors &&
          mentors.map((mentor) => <MentorCard key={uuidv4()} user={mentor} />)}
      </div>
      {page !== lastPage && (
        <button
          className='button-primary load-more'
          onClick={() => setPage(page + 1)}
        >
          Load More Mentors
        </button>
      )}
    </main>
  );
};

export default MentorSelection;
