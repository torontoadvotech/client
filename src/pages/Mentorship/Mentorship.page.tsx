import React from 'react';
import mentorshipIntroImage from '../../assets/images/mentorship-raise-standard.jpg';
import slackImage from '../../assets/images/slack-img.png';
import { Link } from 'react-router-dom';
import MentorshipCards from '../../components/MentorshipCards/MentorshipCards';
require('./mentorship.scss');

const MentorshipPage = () => {
  return (
    <main className="mentorship-page">
      <section className="intro">
        <div className="intro__text">
          <h2>Worksmart Mentorship</h2>
          <h1>Raise the Standard of Learning</h1>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic brew for the evil queen and jack. The quick brown fox jumps
            over the dog.
          </p>
          <div className="intro__text--buttons">
            <Link
              to={{ pathname: '/signup', state: { role: 'mentee' } }}
              className={'button button-secondary'}
            >
              Apply as a Mentee
            </Link>
            <Link
              to={{ pathname: '/signup', state: { role: 'mentor' } }}
              className={'button button-primary'}
            >
              Apply as a Mentor
            </Link>
          </div>
        </div>
        <div className="intro__image">
          <img
            src={mentorshipIntroImage}
            alt="Group of young adults huddled together."
          />
        </div>
      </section>
      <section className="highlights">
        <div className="highlights__text">
          <h2>Building Relationships</h2>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic.
          </p>
        </div>
        <div className="highlights__text">
          <h2>The Right Questions to Ask</h2>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic.
          </p>
        </div>
        <div className="highlights__text">
          <h2>Work Smart, Not Hard</h2>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic.
          </p>
        </div>
        <div className="highlights__text">
          <h2>A New Level of Design</h2>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic.
          </p>
        </div>
        <div className="highlights__text">
          <h2>Networking 101</h2>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic.
          </p>
        </div>
        <div className="highlights__text">
          <h2>Tips and Tricks</h2>
          <p>
            The quick brown fox jumps over the lazy dog. Grumpy wizards make
            toxic.
          </p>
        </div>
      </section>
      <section className="program">
        <h2>
          Join a supportive network with our
          <span>Worksmart Mentorship Program</span>
        </h2>
        <MentorshipCards />
      </section>
      <section className="slack">
        <img src={slackImage} alt="Three slack profile pictures." />
        <h2>towomenintech.slack.com</h2>
        <a href="#" className="button-secondary">
          Join Slack
        </a>
      </section>
    </main>
  );
};

export default MentorshipPage;
