import React from 'react';
import './ReplyBtn.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const ReplyBtn = props => (
  <span
    className="reply-btn glyphicon glyphicon-envelope"
    title="Reply"
    {...props}
  />
);
