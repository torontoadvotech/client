import React from 'react';
import menteeImage from '../../assets/images/apply-mentee.jpg';
import mentorImage from '../../assets/images/apply-mentor.jpg';
import { Link } from 'react-router-dom';
import './mentorshipCards.scss';

const MentorshipCards = () => {
  return (
    <div className="mentorship-cards">
      <figure>
        <img src={menteeImage} alt="" />
        <figcaption>
          <h3>Apply as a mentee</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            facilis dolorum voluptates esse sint alias?
          </p>
          <Link
            to={{ pathname: '/signup', state: { role: 'mentee' } }}
            className={'button-primary'}
          >
            Apply as a mentee
          </Link>
        </figcaption>
      </figure>
      <figure>
        <img src={mentorImage} alt="" />
        <figcaption>
          <h3>Apply as a mentor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            facilis dolorum voluptates esse sint alias?
          </p>
          <Link
            to={{ pathname: '/signup', state: { role: 'mentor' } }}
            className={'button-primary'}
          >
            Apply as a mentor
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default MentorshipCards;
