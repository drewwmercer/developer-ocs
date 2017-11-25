import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import './LogIn.css';
import API from '../../utils/API';

class LogIn extends Component {
  render() {
    return (

      // Creates LogIn

      // Google+ LogIn Button
      <a href="http://localhost:3000/auth/google" className="btn btn-danger">
        <span className="fa fa-google-plus" /> Google
      </a>

      // Github LogIn Button
    );
  }
}

export default LogIn;
