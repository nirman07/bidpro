import React from "react";
import RegistrationForm from "./Registration/Registration.organism";
import { PrimaryButton } from "../atoms/forms/Button/Button.styles";

import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarRight,
  InnerMainBarRightTop,
  InnerMainBarRightBottom,
  InnerMainBarBottom,
  PrimaryMainBar,
} from "./MainBar.styles";
import Logo from "./download13.png";
import Logo1 from "./download14.png";
import Logo2 from "./download10.png";
import Logo3 from "./download12.jpg";
function MainBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar style={{backgroundImage: `url(${Logo2})`}}>
        <InnerMainBarRight>
        <InnerMainBarRightTop>
        <img src={Logo1}  alt={Logo1}></img>
        </InnerMainBarRightTop>
        <InnerMainBarRightBottom>
        <img src={Logo}  alt={Logo}></img>
        </InnerMainBarRightBottom>
         
          
        </InnerMainBarRight>
        <InnerMainBarLeft>
        <RegistrationForm></RegistrationForm>
        
        </InnerMainBarLeft>
      
      </InnerMainBar>
      <InnerMainBarBottom style={{backgroundImage: `url(${Logo3})`}}><h1>India's No#1 Discount Auction Bidding Platform</h1>
100% RISKFREE ONLINE AUCTIONS, WIN or BUY BRANDED NEW PRODUCTS AT UP TO 89% HUGE DISCOUNT<br></br>
5 Free Credits On Sign Up, Worldwide Shipping , Latest Gadgets, Click To BID Easy Auctions<br></br>
60000+ Members , 15000+ Completed Auctions , Always Fair Auction Guaranteed.<br></br> <br></br>
 <PrimaryButton type="submit" id="submit">JOIN NOW</PrimaryButton></InnerMainBarBottom>
    </PrimaryMainBar>
  );
}

export default MainBar;
