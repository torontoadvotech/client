import React, { useState } from 'react';
import './header.scss';
import HeaderMenu from './HeaderMenu';
import { User } from '../../containers/user.container';
import { Link } from 'react-router-dom';
import API from '../../lib/API';

const Header = () => {
  const { user, setUser } = User.useContainer();

  // State for mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      // Send logout request which will remove the current token
      const res = await API.logout();

      // remove user data from state
      if (res.status === 'success') {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <Link to="/">
                <span className="red">&lt;TO/</span>AdvoTech&gt;
              </Link>
            </div>
          </div>
          <div className="nav-right">
            {user?.token ? (
              <ul className="user-nav">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button className="logout" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="login-nav">
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              </ul>
            )}

            <button
              className="nav-right open-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="menu">Menu</span>
              <div className="hamburger">
                <div className="bars bars-inactive"></div>
              </div>
            </button>
          </div>
        </nav>
        {isOpen && <HeaderMenu />}
      </div>
    </header>
  );
};

export default Header;
