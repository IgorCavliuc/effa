import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/white-logo.png";
import VisaMaster from "../../assets/images/visa-master.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top ">
        <div className="content">
          <div className="top-left">
            <img src={Logo}></img>
            <nav>
              <ul>
                <li>About</li>
                <li>Brush</li>
                <li>Razor</li>
                <li>Corparate</li>
                <li>Our thoughts</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-bottom ">
        <div className="bottom content">
          <div className="botton-left">
            <img src={VisaMaster}></img>
          </div>
          <div className="bottom-right">
            <p>Shipping</p>
            <p>How to Use</p>
            <p>Privacy Policy</p>
            <p>
              © 2012-22 EFFA. ALL RIGHTS RESERVED.
              <br /> California, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
