import React from "react";
import { HeaderWrapper } from "./Header.style";
import { Link } from "react-router-dom";

const HeaderRender = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/orchard"> Orchard</Link>
    </HeaderWrapper>
  );
};

export default HeaderRender;
