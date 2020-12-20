import React from "react";
import PartnersForm from "./PartnersForm";
import currentPartnersImage from '../../assets/images/current-partners.png';

const PartnersPage = () => {
  return (
    <main className="partners-page">
      <section className="intro-section">
        <span className="text-slogan">
          Become a <span>Partner</span>
        </span>
        <p className="copy">
          Passionate about shifting social paradigms? Show your support for a gender forward STEM field, and apply to be an official partner of our cause! 
        </p>
      </section>
      <section className="current-partners">
        <figure>
          <img src={currentPartnersImage} alt=""/>
        </figure>
        <p className="text-slogan">
          Meet Our Team
        </p>
        <p>Current Partners</p>
        <p>Our current Team of Partners is dedicated to breaking boundaries and  creating a STEM that is accepting to all. Together, we can all contribute to creating  a healthier work environment. Our current Team of Partners is dedicated to breaking boundaries and  creating a STEM that is accepting to all. Together, we can all contribute to creating  a healthier work environment.</p>
      </section>
      <section className="partners-form">
        <PartnersForm />
      </section>
    </main>
  );
};

export default PartnersPage;
