import React from "react";

import "./Style/Loader.style.css";

const Loader = (props) => {
  return (
    <div
      className={`loader ${props.overlay && "loader--overlay"} ${
        props.center && "loader--center"
      }`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
