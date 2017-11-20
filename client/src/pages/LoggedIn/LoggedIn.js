import React from 'react';
import { Link } from 'react-router-dom';
import './LoggedIn.css';
// import API from '../../utils/API';

const LoggedIn = () => (
  <div className="loggedIn">
    {/* Link to view All Posts */}
    <div>
      <Link to={'/'} className="linkName">
        View All Projects
      </Link>
    </div>

    {/* Link to view posts by the user */}
    <div>
      <Link to={'/posted'} className="linkName">
        View Your Projects
      </Link>
    </div>

    {/* Link to view saved and replied to posts */}
    <div>
      <Link to={'/saved'} className="linkName">
        View Your Favorites (Replied and Saved)
      </Link>
    </div>
  </div>
);

export default LoggedIn;
