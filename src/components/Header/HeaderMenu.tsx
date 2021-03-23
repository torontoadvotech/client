import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <div>
      <div className="nav-menu">
        <div className="wrapper">
          <div className="menu-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <a
                  className="coming-soon"
                  href="#"
                  aria-label="Mentoring page is coming soon!"
                >
                  <span className="coming-soon-hide" aria-hidden>
                    Mentoring
                  </span>
                  <span className="coming-soon-show" aria-hidden>
                    Coming Soon
                  </span>
                </a>
              </li>
              <li>
                <a href="https://medium.com/torontowomenintech">Blog</a>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
