import React from "react";
import NavLinks from "../NavLinks/NavLinks";

import "./Style/Header.style.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
  return (
    <div className="header_container">
      <ToggleTheme />
      <NavLinks />
    </div>
  );
};

export default Header;
