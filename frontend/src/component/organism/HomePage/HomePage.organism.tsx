
import React from "react";
import Textbox from '../../atoms/forms/Textbox/Textbox.atom';
import Button from "../../atoms/forms/Button/Button.atom";
import CheckBox from "../../atoms/forms/CheckBox/CheckBox.atom";
import Footer from "../../molecules/Footer.organism";
import { Footer1, Footer2 } from "../../molecules/Footer.styles";
import NavBar from "../../molecules/NavBar.organism";
import MenuBar from "../../molecules/Menubar.organism";
import MainBar from "../../molecules/MainBar.organism";
import { HomeWrapper } from "./HomePage.styles";


import LoginForm from "../../molecules/LoginForm/LoginForm.organism"

function HomePage() {
  return (
    <HomeWrapper>

      

      <NavBar></NavBar>
      <MenuBar></MenuBar>
      <MainBar></MainBar>
      <Footer></Footer>
   
      
    </HomeWrapper>
  );
}

export default HomePage;
