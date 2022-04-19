import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import HeaderMenu from './HeaderMenu';
import { User } from '../../containers/user.container';
import { Link } from 'react-router-dom';
import API from '../../lib/API';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import AdvotechLogo from '../../assets/images/final.png';


const Header = () => {
  const { user, setUser } = User.useContainer();

  // State for mobile menu open/close
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // State for header animation on scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const ref = useRef(null);

  // const openMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, closeMenu);

  const handleLogout = async () => {
    try {
      // Send logout request which will remove the current token
      const res = await API.logout();

      // remove user data from state
      if (res.status === "success") {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // header animation on scroll
  const shrinkNavOnScroll = () => {
    const scrollDistance = document.documentElement.scrollTop;

    if (scrollDistance > 25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // add scroll event listener on window, on load only
  useEffect(() => {
    window.addEventListener('scroll', () => shrinkNavOnScroll());
  }, [])

  return (
    <header className={`page-header ${isScrolled ? 'scrolled-header' : ''}`}>
      <div className="wrapper">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <Link to="/">
                <img src={AdvotechLogo} alt="" className="logo" />
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

            {/* <button
              className="nav-right open-menu"
              ref={ref}
              onClick={openMenu}
            >
              <span className="menu">Menu</span>
              <div className="hamburger">
                <div className="bars bars-inactive"></div>
              </div>
            </button> */}
          </div>
        </nav>
        {isOpen && <HeaderMenu />}
      </div>
    </header>
  );
};

export default Header;
