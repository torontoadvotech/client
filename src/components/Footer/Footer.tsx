import React from 'react';
// Font Awesome packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';

import './footer.scss';

interface Props {
  title: string;
  icon: any;
  className?: string;
}

// const Footer = () => {
  const Footer: React.FunctionComponent<Props> = () => {
  return (
    <footer>
				<div className="wrapper">
					<p>&copy; Toronto Advocacy in Technology 2020 All Rights Reserved</p>
					<div className="social-container">
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's LinkedIn page"
						href="https://www.linkedin.com/company/torontoadvotech/">
            <FontAwesomeIcon icon={faLinkedinIn} />
					</a>
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Instagram profile"
					href="https://www.instagram.com/torontoadvotech/">
            <FontAwesomeIcon icon={faInstagram} />
					</a>
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Facebook page"
						href="https://www.facebook.com/torontoadvotech/">
            <FontAwesomeIcon icon={faFacebookF} />
					</a>
					{/* <a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Youtube page"
						href="">
             <FontAwesomeIcon icon={faYoutube} />
          </a> */}
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Twitter profile"
						href="https://twitter.com/toadvotech">
            <FontAwesomeIcon icon={faTwitter} />
					</a>
					</div>
					<button className="scroll-top"><FontAwesomeIcon icon={faChevronUp} /></button>
				</div>
			</footer>
  );
};

export default Footer;
