import React from "react";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
