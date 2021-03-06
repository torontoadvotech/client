import React from 'react';
import partnerImage from '../../assets/images/become-partner.jpg';
import MentorshipCards from '../../components/MentorshipCards/MentorshipCards';

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
        <MentorshipCards />
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
