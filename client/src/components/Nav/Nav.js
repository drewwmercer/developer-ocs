import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-default navbar-top">
    <Link to={'/allprojects'}>
      <img src="/assets/images/devOCS.png" className="pull-left logo" />
    </Link>
    <div className="branches">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to={'/allprojects'} className="pageName">
            View All Projects
          </Link>
        </li>
        <li>
          <Link to={'/new'} className="pageName">
            Post a Project
          </Link>
        </li>
        <li>
          <Link to={'/posted'} className="pageName">
            Posted Projects
          </Link>
        </li>
        <li>
          <Link to={'/saved'} className="pageName">
            Saved List
          </Link>
        </li>
        <li>
          <a href='/auth/logout' rel="external" className="pageName">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
