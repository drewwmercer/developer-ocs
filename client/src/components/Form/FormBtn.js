import React from "react";

export const FormBtn = props =>
  <button {...props} className="btn btn-default">
    {props.children}
  </button>;
