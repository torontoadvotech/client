import React, { useState, useEffect } from 'react';
import './header.scss';
import HeaderMenu from './HeaderMenu';
import { User } from '../../containers/user.container';
import { Link } from 'react-router-dom';
import API from '../../lib/API';

const Header = () => {
  const { user, setUser } = User.useContainer();

  // State for mobile menu open/close
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  // header animation on scroll
  const shrinkNavOnScroll = () => {
    const scrollDistance = document.documentElement.scrollTop;
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo a');

    if (scrollDistance > 25) {
      header!.classList.add('scrolled-header');
      logo!.innerHTML = `<span class="red">to/</span>a`;
    } else {
      header!.classList.remove('scrolled-header')
      logo!.innerHTML = `<span class="red">toronto/</span>advocacy`;
    }
  };

  // add scroll event listener on window, on load only
  useEffect(() => {
    window.addEventListener('scroll', () => shrinkNavOnScroll());
  }, [])

  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <Link to="/">
                <span className="red">toronto/</span>advocacy
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
