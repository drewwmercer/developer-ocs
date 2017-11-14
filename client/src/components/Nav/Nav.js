import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-default navbar-top">
    <div className="container-fluid">
      {/* <div className="navbar-header"> */}
      <ul class="nav navbar-nav">
        <li>
          <Link to={'/'} className="pageName">
            Log In
          </Link>
        </li>
        <li>
          <Link to={'/saved'} className="pageName">
            Saved List
          </Link>
        </li>
        <li>
          <Link to={'/new'} className="pageName">
            Post a Project
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </div>
  </nav>
);

export default Nav;
