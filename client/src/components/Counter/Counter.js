import React from 'react';
import './Counter.css';
import CountTo from 'react-count-to';
import './Counter.css';

export const Counter = ({ labeltext,total })  => (
    <div className="counter-display">
        <label>{labeltext}</label>&nbsp;
    <CountTo to={total} speed={5000} />
 </div>
);
