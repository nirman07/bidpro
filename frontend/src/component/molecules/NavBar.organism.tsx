import React from "react";
import Button from "../atoms/forms/Button/Button.atom";
import CheckBox from "../atoms/forms/CheckBox/CheckBox.atom";
import {
  InnerNavBar,
  InnerNavBarLeft,
  InnerNavBarLeftDiv,
  InnerNavBarRight,
  PrimaryNavBar,
} from "./NavBarr.styles";
import Logo from "./download2.png";
import { useHref } from "react-router-dom";
function NavBar() {
  return (
    <PrimaryNavBar>
      <InnerNavBar>
        <InnerNavBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerNavBarRight>
        <InnerNavBarLeft>
          <InnerNavBarLeftDiv>Home</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>About</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>Bids</InnerNavBarLeftDiv>
          <InnerNavBarLeftDiv>Wishlist</InnerNavBarLeftDiv>
         

        </InnerNavBarLeft>
      </InnerNavBar>
    </PrimaryNavBar>
  );
}

export default NavBar;
