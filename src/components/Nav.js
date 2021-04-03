import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/images/logo.svg";

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function navToggle() {
    setToggle(!toggle);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>
          <div className={toggle ? "header__menus menu-open" : "header__menus"}>
            <Link className="header__link" to="/" onClick={navToggle}>
              Home
            </Link>
            <Link className="header__link" to="/rooms" onClick={navToggle}>
              Rooms
            </Link>
          </div>
          <div className="nav-btn" onClick={navToggle}>
            <FaAlignRight />
          </div>
        </div>
      </div>
    </header>
  );
};
