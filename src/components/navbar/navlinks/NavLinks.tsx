import React from "react";
import { Link } from "react-router-dom";

import "./NavLinks.css";

const NavLinks: React.FC = () => {
  return (
    <div className="navLinks">
      <Link className="navLinks__link " to="/">
        <span className="navlinks__logo">MB</span>
      </Link>
      <div className="navLinks__links">
        <Link className="navLinks__link" to="/">
          Home
        </Link>
        <Link
          className="navLinks__link"
          to="/account"
          style={{ textDecoration: "none" }}
        >
          My Account
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
