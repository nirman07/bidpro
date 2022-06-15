
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer.organism";
import NavBar from "../../molecules/NavBar.organism";
import { ProfileWrapper } from "./ProfilePage.styles";

function ProfilePage() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }

  return (
    <ProfileWrapper>
      <NavBar></NavBar>
      <Footer></Footer>
    </ProfileWrapper>
  );
}

export default ProfilePage;
