import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-default navbar-top">
    <a href="/">
      <img src="/assets/images/devOCS.png" className='pull-left logo' />
    </a>
    <div className="branches">
      <ul className="nav navbar-nav navbar-right">
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
