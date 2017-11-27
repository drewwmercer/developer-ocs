import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';

import './LogIn.css';
import API from '../../utils/API';

class LogIn extends Component {

  render() {
    return(
      // Creates LogIn
      <div>
        {/* Google+ LogIn Button */}
        <div className="img__wrap">
          <a href="/auth/google" rel="external" className="btn btn-danger google">
            <span className="fa fa-google-plus fa-2x" />
          </a>
          <p className="img__description">Google+</p>
        </div>
        &nbsp; &nbsp;
        {/* Github LogIn Button */}
        <div className="img__wrap">
          <a href="/auth/github" rel="external" className="btn btn-default github">
            <span className="fa fa-github fa-2x" />
          </a>
          <p className="img__description">Github</p>
        </div>
      </div>
    );
  }
}

export default LogIn;
