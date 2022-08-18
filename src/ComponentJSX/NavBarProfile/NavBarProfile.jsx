import React from "react";
import "./NavBarProfile.css";
import Logo from "../../assets/images/white-logo.png";
import ProfileLogo from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

function NavBarProfile() {
  return (
    <div className="NavBarProfile">
      <div className="navlink">
        <div className="navlink-logo">
          <img src={Logo}></img>
        </div>
        <div className="profileLogo">
          <img src={ProfileLogo}></img>
          <p>Cavliuc Igor</p>
        </div>
        <div className="nav">
          <ul>
            <li>Main</li>
            <li>Photo</li>
            <li>Posts</li>
            <li>Dashboard</li>
            <li>Metrics</li>
          </ul>
        </div>
        <div className="nav">
          <ul>
            <li>Mail</li>
            <li>Todo</li>
            <li>Chats</li>
            <li>Notes</li>
            <li>F.A.Q.</li>
          </ul>
        </div>
      </div>
      <div className="logOut">
        <Link to="/">Log Out</Link>
      </div>
    </div>
  );
}

export default NavBarProfile;
