import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper>
      <h3>something went wrong...</h3>
      <NavLink to="/" className="btn">
        back home
      </NavLink>
    </Wrapper>
  );
};

export default Error;
