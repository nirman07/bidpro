import React from "react";
import  {useNavigate}  from "react-router-dom";
import { PrimaryButton } from "../../atoms/forms/Button/Button.styles";
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
  const history = useNavigate();

  const bidPage = () => {
      history("/Bidpage")
  }
  

  return (
    <PrimaryMenuBar>
      <InnerMenuBar>
        <InnerMenuBarRight>
        <a href="#" id="about"></a>
        <a href="#" id="Additem">HELLO</a>
        <a href="#" id="categorie">BID</a>
        
        <img src={Logo} alt={Logo}></img>
        </InnerMenuBarRight>
        <InnerMenuBarLeft>
        <a href="#" id="about"></a>
        <a href="#" id="editid">HELLO</a>
        <a href="#" id="logout">BID</a>
        <h1 id ="h1" > Welcome to BIDBID</h1>
        <input type='text' id ="box" required={true} readOnly={true} value="Nirman" /><br></br>
        <input type='text' id ="box1"required={true} readOnly={true} value="nirmandas54@gmai.com" /><br></br>
        <input type='text' id ="box1"required={true} readOnly={true} value="+91-7003223386" />
        <PrimaryButton type="submit" onClick={bidPage}>Add Item</PrimaryButton>
        </InnerMenuBarLeft>
        
      </InnerMenuBar>
    </PrimaryMenuBar>
  );
}

export default Addbid;
