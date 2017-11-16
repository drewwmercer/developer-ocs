import React from 'react';
import './FormBtn.css';

export const FormBtn = props => (
  <button {...props} className="btn btn-default form-btn">
    {props.children}
  </button>
);
