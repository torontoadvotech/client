import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <span className="red">&lt;TO/</span>AdvoTech&gt;
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
