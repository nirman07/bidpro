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
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route  path="" 
                    element={<HomePage></HomePage>} />

                <Route  path="/ProfilePage" 
                    element={<ProfilePage/>} />
                 <Route  path="/LoginForm" 
                    element={<LoginForm/>} />   
            </Routes>
        </Router>
    </>
);
}

export default App;
