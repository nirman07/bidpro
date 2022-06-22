import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import useHooks from "./DetailBid.hooks";
// styles
import {
  InnerMenuBar,
  InnerMenuBarLeft,
  InnerMenuBarRight,
  PrimaryMenuBar,
} from "./Detailbid.styles";


import LoginForm from "../LoginForm/LoginForm.organism";

function Addbid() {
  let { finalData } = useHooks();
  const history = useNavigate();

  const bidPage = () => {
    history("/Bidpage");
  };

  return (
    <PrimaryMenuBar>
      <InnerMenuBar>
        <InnerMenuBarLeft>
        
       
          <h1> All AVAILABLE BIDS </h1>
        
            {finalData.map((val: any) => {
              return <ul><li>Name:{val.value} </li> <li>Prize(in USD):{val.value2}(USD)</li><li> <PrimaryButton type="submit" onClick={bidPage}>
              BID
            </PrimaryButton>
          </li>
              </ul>;
             
            })}
      
        
        </InnerMenuBarLeft>
      </InnerMenuBar>
    </PrimaryMenuBar>
  );
}

export default Addbid;
