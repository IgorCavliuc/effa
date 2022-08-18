import React from "react";
import "./Main.css";
import RazorAndBrush from "../../assets/images/Razzor-Brush.jpg";
import TimeMap from "../../assets/images/group-72.svg";
import SolutionImg from "../../assets/images/solution.svg";

import Brush from "../../assets/images/brush.png";
import Razor from "../../assets/images/razor.png";
import Soap from "../../assets/images/soap.png";
import Stick from "../../assets/images/stick.png";
import Glass from "../../assets/images/glass.png";
import Dishes from "../../assets/images/dishes.png";
import HomeCare from "../../assets/images/alll-1.jpg";

function Main() {
  

//   function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.add("mystyle");
// } 


  return (
    <div className="main-content ">
      <div className="main-block content">
        <div className="block-text">
          <h1>
            We are fighting the <br /> Global Plastic <br />
            Pollution.
          </h1>
          <p>
            Our mission is to replace all the plastic <br /> disposables with
            <span> eco-friendly products. </span>
          </p>
          <p>
            That is why we have created Effa. A company, making <br /> your
            everyday life easier and safer for the Planet.
          </p>

          <button type="button">Join us</button>
        </div>
        <div className="block-image">
          <img src={RazorAndBrush}></img>
        </div>
      </div>
      <div className="problem-block content">
        <span className="span-problem">Problem</span>
        <p>
          It takes <span>500</span> years for a plastic toothbrush to{" "}
          <span>fully</span> desintegrate
        </p>
        <img src={TimeMap}></img>
      </div>
      <div className="blue-block">
        <div className="blue-block-text content">
          <p>
            3 months of using are equal to 500 years of suffering for Earth.
            Will you still buy a plastic toothbrush?{" "}
          </p>
        </div>
      </div>

      <div className="solution-block content">
        <div className="solution-block-text ">
          <span>Solution</span>
          <p className="p-label">
            What makes us <br />
            different?
          </p>
          <p className="p-text">
            We have created our first products: Effa Toothbrush and Effa Razor,
            both are 100% recyclable and renewable.
          </p>
          <p className="p-text">
            The construction of both Toothbrush, Razor allows to detach the
            recyclableparts after being used and recycle them separately
          </p>
        </div>
        <div className="solution-image">
          <img src={SolutionImg}></img>
        </div>
      </div>

      <div className="business-block content">
        <p className="business-product">
          Effa products are great solution <span>for business.</span>{" "}
        </p>
        <p className="business-info">
          A small hotel, office or AirBnB flat will be happier to have Effa.
        </p>

        <div className="business-product-buy content">
          <div className="product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> brush
                </p>
                <p className="name-info">Paper toothbrush (10 pcs)</p>
              </div>
              <div className="info-buy">
                <button type="button">Buy now</button>
                <a>Learn more...</a>
              </div>
            </div>
            <img src={Brush}></img>
          </div>

          <div className="product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> razor
                </p>
                <p className="name-info">Paper razor</p>
              </div>
              <div className="info-buy">
                <button type="button">Buy now</button>
                <a>Learn more...</a>
              </div>
            </div>
            <img src={Razor}></img>
          </div>

          <div className="product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> soap
                </p>
                <p className="name-info">Disposable soap</p>
              </div>
              <div className="info-buy">
                <a>Coming soon</a>
              </div>
            </div>
            <img src={Soap}></img>
          </div>

          <div className="product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> stick
                </p>
                <p className="name-info">Paper q-tips</p>
              </div>
              <div className="info-buy">
                <a>Coming soon</a>
              </div>
            </div>
            <img src={Stick}></img>
          </div>

          <div className="product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> glass
                </p>
                <p className="name-info">Paper glasses</p>
              </div>
              <div className="info-buy">
                <a>Coming soon</a>
              </div>
            </div>
            <img src={Glass}></img>
          </div>

          <div className="product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> dishes
                </p>
                <p className="name-info">Disposable tableware</p>
              </div>
              <div className="info-buy">
                <a>Coming soon</a>
              </div>
            </div>
            <img src={Dishes}></img>
          </div>

          <div className="product all-product">
            <div className="product-info">
              <div className="info-name">
                <p className="name">
                  effa. <br /> home care
                </p>
                <p className="name-info">box for your sustainable lifestyle</p>
              </div>
              <div className="info-buy">
                <a>Coming soon</a>
              </div>
            </div>
            <img src={HomeCare}></img>
          </div>
        </div>
      </div>

      <div className="partnership-block">
        <div className="partnership content">
          <div className="inputs">
            <p>We are open to partnership!</p>
            <input type="email" placeholder="Your email"></input>
            <input type="text" placeholder="Your name"></input>
            <textarea type="text" placeholder="Your comments"></textarea>
          </div>
          <div className="detale-click">
            <p>
              By clicking on the button, you consent to the processing of data{" "}
              <br />
              and agree to the privacy policy
            </p>
            <button> Join us</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main;
