import React from 'react';
// import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
				<div className="wrapper">
					<p>&copy; Toronto Advocacy in Technology 2020 All Rights Reserved</p>
					<div className="social-container">
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's LinkedIn page"
						href="https://www.linkedin.com/company/torontoadvotech/">
						<i className="linkedin fab fa-linkedin-in"></i>
					</a>
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Instagram profile"
					href="https://www.instagram.com/torontoadvotech/">
						<i className="fab fa-instagram"></i>
					</a>
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Facebook page"
						href="https://www.facebook.com/torontoadvotech/">
						<i className="fab fa-facebook-f"></i>
					</a>
					{/* <!-- <a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Youtube page"
						href="">
						<i class="fab fa-youtube"></i>
  </a> --> */}
					<a rel="noopener noreferrer" target="_blank" aria-label="Go to Toronto Advotech's Twitter profile"
						href="https://twitter.com/toadvotech">
						<i className="fab fa-twitter"></i>
					</a>
					</div>
					<button className="scroll-top"><i className="chevron"></i></button>
				</div>
			</footer>
  );
};

export default Footer;
