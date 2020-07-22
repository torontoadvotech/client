import React from 'react';
import menteeImage from '../../assets/images/apply-mentee.jpg';
import mentorImage from '../../assets/images/apply-mentor.jpg';
import partnerImage from '../../assets/images/become-partner.jpg';
import { Link } from 'react-router-dom';

require('./home.scss');

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="intro-section">
        <span className="text-slogan">
          The future<span>has female</span>
        </span>
        <p className="copy">
          We are a grassroots movement that aims to neutralize workplace
          cultures in technology to address intersectional gender inequality.
        </p>
        <a href="mailto:info@torontoadvotech.com" className="button-secondary">
          Learn More
        </a>
      </section>
      <section className="signup-section">
        <h2>
          Be worksmart{' '}
          <span className="text-color-primary">Join the movement</span>
        </h2>
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
      </section>
      <section className="partner-section">
        <div className="partner-section--details">
          <h2>
            Become a <span className="text-color-primary">partner</span>
          </h2>
          <p>
            Passionate about shifting social paradigms? Show your support for a
            gender forward STEM field, and apply to be an official partner of
            our cause!
          </p>
          <a
            href="mailto:info@torontoadvotech.com"
            className="button-secondary"
          >
            Learn More
          </a>
        </div>
        <div className="partner-section--image">
          <img src={partnerImage} alt="" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
