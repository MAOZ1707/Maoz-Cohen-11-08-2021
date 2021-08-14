import React from "react";
import { NavLink } from "react-router-dom";

import "./Style/NavLinks.style.css";

const NavLinks = () => {
  return (
    <ul className="nav_link-list">
      <li className="nav_link-item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="nav_link-item">
        <NavLink exact to="/favorites">
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
