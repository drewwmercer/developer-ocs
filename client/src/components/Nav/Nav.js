import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-default navbar-top">
    <div className="container-fluid logo">
      <a href="/">
        <img src="/assets/images/devOCS.png" />
      </a>
    </div>

    <div className="container-fluid branches">
      <ul className="nav navbar-nav">
        <li>
          <Link to={'/new'} className="pageName">
            Post a Project
          </Link>
        </li>
        <li>
          <Link to={'/saved'} className="pageName">
            Saved List
          </Link>
        </li>
        <li>
          <Link to={'/'} className="pageName">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
