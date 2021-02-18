import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "./search/Search";
import NavLinks from "./navlinks/NavLinks";

const Navbar: React.FC = () => {
  const [show, toggleShow] = useState<boolean>(false);

  const transformNavbar = () => {
    if (window.scrollY > 100) {
      toggleShow(true);
    } else {
      toggleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transformNavbar);
    return () => window.removeEventListener("scroll", transformNavbar);
  }, []);

  return (
    <div className={`${show ? " navbar navbar__darken" : "navbar"}`}>
      <div className="navbar__contents">
        <NavLinks />
        <div className="navbar__right">
          <Search />
          <Link to="/account">
            <img
              className="navbar__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="navbar-avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
