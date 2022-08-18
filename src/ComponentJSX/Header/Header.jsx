import React from "react";
import "./Header.css";
import EffaLogo from "../../assets/images/effa_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-content content">
      <div className="effa-logo">
        <Link to="/">
          <img src={EffaLogo}></img>{" "}
        </Link>
      </div>

      <nav className="navigation">
        <ul>
          <li>About us</li>
          <li>Brush</li>
          <li>Razor</li>
          <li>Our thoughts</li>
          <li className="sign-in">
            {" "}
            <Link to="signin"> Sign In</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
