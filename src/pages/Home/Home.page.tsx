import React from "react";
import partnerImage from "../../assets/images/become-partner.jpg";
import MentorshipCards from "../../components/MentorshipCards/MentorshipCards";

require("./home.scss");

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="intro-section">
        <h1 className="text-slogan">What is Worksmart?</h1>
        <p className="copy">
          <span className="worksmart-spacing">WORKSMART</span> is an online
          mentorship platform connecting youth to mentors in technology by using
          an intersectional lens.
        </p>
        <a href="mailto:people@advocacyintech.com" className="button-secondary">
          Learn More
        </a>
      </section>
      <section className="signup-section">
        <h2>
          work smart{" "}
          <span className="text-color-primary">Join the movement</span>
        </h2>
        <MentorshipCards />
      </section>
      <section className="partner-section">
        <div className="partner-section--details">
          <h2>
            Become a <span className="text-color-primary">partner</span>
          </h2>
          <p className="copy">
            Passionate about shifting social paradigms? Show your support for a
            gender forward STEM field, and apply to be an official partner of
            our cause.
          </p>
          <a
            href="mailto:people@advocacyintech.com"
            className="button button-secondary cta"
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
