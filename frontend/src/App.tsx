import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from "./component/organism/HomePage/HomePage.organism";
import ProfilePage from "./component/organism/ProfilePage/ProfilePage.organism";
import LoginForm from "./component/molecules/LoginForm/LoginForm.organism";
import BidPage from "./component/organism/Bidpage/Bidpage.organism";
import Addbid from "./component/molecules/Addbid/Addbid.organism";
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route  path="" 
                    element={<HomePage></HomePage>} />
                <Route  path="/ProfilePage" 
                    element={<ProfilePage/>} />
                    <Route  path="/BidPage" 
                    element={<BidPage/>} />  
                 <Route  path="/LoginForm" 
                    element={<LoginForm/>} />  
                     <Route  path="/Addbid" 
                    element={<Addbid/>} />    
            </Routes>
        </Router>
    </>
);
}

export default App;
