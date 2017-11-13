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
            Search For Articles
          </Link>
        </li>
        <li>
          <Link to={'/saved'} className="pageName">
            Saved Article List
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </div>
  </nav>
);

export default Nav;
