import React from "react";
import ItemForm from "./ItemForm/ItemForm.organism";

import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarRight,
  PrimaryMainBar,
} from "./ItemBar.styles";
import Logo from "./download5.png";
function MainBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar>
      <InnerMainBarRight>
          <img src={Logo} alt={Logo}></img>
        </InnerMainBarRight>
        <InnerMainBarLeft>
        <ItemForm></ItemForm>
        <img src={Logo} alt={Logo}></img>
        </InnerMainBarLeft>
       
      </InnerMainBar>
    </PrimaryMainBar>
  );
}

export default MainBar;
