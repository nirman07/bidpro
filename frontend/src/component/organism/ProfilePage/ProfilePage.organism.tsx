
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer.organism";
import NavBar from "../../molecules/NavBar.organism";

import { ProfileWrapper } from "./ProfilePage.styles";
import Addbid from "../../molecules/Addbid/Addbid.organism";
import DetailBid from "../../molecules/DetailBar.Organism"

function ProfilePage() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }

  return (
    <ProfileWrapper>
      <NavBar></NavBar>
      <Addbid></Addbid>
     
  <DetailBid></DetailBid>
      <Footer></Footer>
    </ProfileWrapper>
  );
}

export default ProfilePage;
