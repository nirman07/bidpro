import React from "react";
import ItemForm from "./ItemForm/ItemForm.organism";

import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarRight,
  PrimaryMainBar,
} from "./ItemBar.styles";

import Logo2 from "./download10.png";
function MainBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar style={{backgroundImage: `url(${Logo2})`}}>
      <InnerMainBarRight>
        
        </InnerMainBarRight>
        <InnerMainBarLeft>
        <ItemForm></ItemForm>
     
        </InnerMainBarLeft>
       
      </InnerMainBar>
    </PrimaryMainBar>
  );
}

export default MainBar;
