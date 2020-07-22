import React from 'react';

const HeaderMenu = () => {
  return (
    <div>
      <div className="nav-menu">
        <div className="wrapper">
          <div className="menu-items">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a
                  className="coming-soon"
                  href="#"
                  aria-label="Events page is coming soon!"
                >
                  <span className="coming-soon-hide" aria-hidden>
                    Events
                  </span>
                  <span className="coming-soon-show" aria-hidden>
                    Coming Soon
                  </span>
                </a>
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
                <a
                  className="coming-soon"
                  href="#"
                  aria-label="About page is coming soon!"
                >
                  <span className="coming-soon-hide" aria-hidden>
                    About
                  </span>
                  <span className="coming-soon-show" aria-hidden>
                    Coming Soon
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
