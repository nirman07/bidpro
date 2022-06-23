import React from "react";
import RegistrationForm from "./Registration/Registration.organism";
import DetailBid from "./DetailBid/DetailBid.organism";
import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarRight,
  PrimaryMainBar,
} from "./DetailBar.styles";
import Logo from "./download7.png";
function DetailBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar>
      
        <InnerMainBarRight>
        <img src={Logo} alt={Logo}></img>
        </InnerMainBarRight>
        <InnerMainBarLeft>
      <DetailBid></DetailBid>
        </InnerMainBarLeft>
       
      </InnerMainBar>
    </PrimaryMainBar>
  );
}

export default DetailBar;
