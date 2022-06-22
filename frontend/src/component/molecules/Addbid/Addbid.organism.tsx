import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
import useHooks from "./Addbid.hooks";
// styles
import {
  InnerMenuBar,
  InnerMenuBarLeft,
  InnerMenuBarRight,
  PrimaryMenuBar,
} from "./Addbid.styles";
import Logo from "./download2.png";

import LoginForm from "../LoginForm/LoginForm.organism";

function Addbid() {
  let { bidData } = useHooks();
  const history = useNavigate();

  const bidPage = () => {
    history("/Bidpage");
  };

  return (
    <PrimaryMenuBar>
      <InnerMenuBar>
        <InnerMenuBarRight>
          <a href="#" id="about"></a>
          <a href="#" id="Additem">
          <PrimaryButton type="submit" onClick={bidPage}>
            Add Item
          </PrimaryButton>
          </a>
          <a href="#" id="categorie">
          <PrimaryButton type="submit" onClick={bidPage}>
           LOGOUT
          </PrimaryButton>
          </a>

          <img src={Logo} alt={Logo}></img>
        </InnerMenuBarRight>
        <InnerMenuBarLeft>
        
       
          <h1> WELCOME to BIDBID</h1>
        
            {bidData.map((val: any) => {
              return <ul><li>{val.value} </li><li>{val.value2}</li>
              </ul>;
        
            })}
        
        
        </InnerMenuBarLeft>
      </InnerMenuBar>
    </PrimaryMenuBar>
  );
}

export default Addbid;
