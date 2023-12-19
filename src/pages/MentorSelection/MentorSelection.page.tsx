import React, { useEffect, useState } from 'react';
import MentorCard from '../../components/MentorCard/MentorCard';
import { v4 as uuidv4 } from 'uuid';
import API from '../../lib/API';
import { UserType } from '../../lib/types';

import './mentorSelection.scss';

const MentorSelection = () => {
  const [mentors, setMentors] = useState<UserType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>();

  useEffect(() => {
    const getMentors = async (page: number, limit: number) => {
      const res = await API.getAllMentors(page, limit);
      console.log(res, "allmentors");
      //TODO: remove line below - mockData
      const mockData = {
        "status": "success",
        "count": 15,
        "results": 8,
        "data": {
            "data": [
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.64133,
                            -79.38907
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791fd",
                    "name": "Clark Kent",
                    "email": "ckent@gmail.com",
                    "photo": "photo7.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat."
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.660319,
                            -79.388428
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791f8",
                    "name": "Jessica Jones",
                    "email": "jjones@gmail.com",
                    "photo": "photo2.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat.",
                    "refreshToken": "d6a5af4fea5f662bce6edfd36187d8243033be9662f11205469ee1dede8762b8",
                    "refreshTokenExpires": "2020-11-16T17:34:11.600Z"
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.661657,
                            -79.374329
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791f7",
                    "name": "Thor Odinson",
                    "email": "thor@asgard.com",
                    "photo": "photo1.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat.",
                    "refreshToken": "7d9d06fc60aed429931903b6e26d451626bc808656c4ec61b90e51c176b8acf3",
                    "refreshTokenExpires": "2021-08-21T07:12:56.878Z"
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.648284,
                            -79.374556
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791fe",
                    "name": "Diana Prince",
                    "email": "dprince@gmail.com",
                    "photo": "photo8.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat."
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.634749,
                            -79.40971
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b7679200",
                    "name": "Arthur Curry",
                    "email": "acurry@gmail.com",
                    "photo": "photo10.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat."
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.656259,
                            -79.402751
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791f9",
                    "name": "Stephen Strange",
                    "email": "sstrange@gmail.com",
                    "photo": "photo3.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat."
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.662263,
                            -79.380293
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791fc",
                    "name": "Brunnhilde",
                    "email": "brunnhilde@gmail.com",
                    "photo": "photo6.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat."
                },
                {
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            43.646087,
                            -79.381562
                        ],
                        "description": "Toronto, CAN"
                    },
                    "role": "mentor",
                    "mentors": [],
                    "mentees": [],
                    "_id": "5e85365528f22e04b76791ff",
                    "name": "Natasha Romanoff",
                    "email": "nromanoff@gmail.com",
                    "photo": "photo9.jpg",
                    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac velit nec neque pulvinar blandit malesuada eget libero. Nullam vitae euismod tortor. Vestibulum ullamcorper ex vitae nulla facilisis, et feugiat."
                }
            ]
        }
    };
      // setMentors([...mentors, ...res.data.data]);
      //TODO: remove line below and uncomment line above
      setMentors([...mentors, ...mockData.data.data]);

      // Calculate and store last page so load more button can be hidden
      // if there are no more mentors to fetch
      setLastPage(Math.ceil(res.count / limit));
    };

    const limit = 8;

    getMentors(page, limit);
  }, [page]);

  console.log(mentors, 'mentors');

  return (
    <main className='mentor-selection-page'>
      <div className='mentor-container'>
        {mentors.map((mentor) => (
          <MentorCard key={uuidv4()} user={mentor} />
        ))}
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
