import React from "react";
import PartnersForm from "./PartnersForm";
import currentPartnersImage from "../../assets/images/current-partners.png";

import "./partners.scss";

const PartnersPage = () => {
  return (
    <main className='partners-page'>
      <section className='intro-section'>
        <h1 className='text-slogan'>
          Become a <span>Partner</span>
        </h1>
        <p className='copy'>
          Passionate about shifting social paradigms? Show your support for a
          gender forward STEM field, and apply to be an official partner of our
          cause!
        </p>
      </section>
      <section className='current-partners'>
        <figure>
          <img src={currentPartnersImage} alt='' />
        </figure>
        <div className='current-partners-text-content'>
          <h2 className='text-slogan'>Meet Our Team</h2>
          <h2 className='text-slogan'>
            Current <span className='red'>Partners</span>
          </h2>
          <p>
            Our current Team of Partners is dedicated to breaking boundaries and
            creating a STEM that is accepting to all. Together, we can all
            contribute to creating a healthier work environment. Our current
            Team of Partners is dedicated to breaking boundaries and creating a
            STEM that is accepting to all. Together, we can all contribute to
            creating a healthier work environment.
          </p>
        </div>
      </section>
      <section className='partners-form'>
        <PartnersForm />
      </section>
    </main>
  );
};

export default PartnersPage;
