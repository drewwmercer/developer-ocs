import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import './LoggedIn.css';
// import API from '../../utils/API';

const LoggedIn = () => (
  <div className="loggedin">
    <div>
      <Link to={'/'} className="">
        View All Posts
      </Link>
    </div>

    <div className="loggedin">
      <Link to={'/posted'} className="">
        View Your Posts
      </Link>
    </div>

    <div className="loggedin">
      <Link to={'/saved'} className="">
        View Your Favorites (Replied and Saved)
      </Link>
    </div>
  </div>
);

export default LoggedIn;
