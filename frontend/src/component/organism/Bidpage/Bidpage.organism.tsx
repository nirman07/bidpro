
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer.organism";
import NavBar from "../../molecules/NavBar.organism";
import { BidWrapper } from "./Bidpage.styles";
import ItemBar from "../../molecules/ItemBar.organism";

function BidPage() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }

  return (
    <BidWrapper>
     <NavBar></NavBar>
     <ItemBar></ItemBar>
     <Footer></Footer>
    </BidWrapper>
  );
}

export default BidPage;
