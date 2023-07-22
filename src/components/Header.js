import React from "react";
import "antd/dist/antd.css";
import "./Header.css";
import main_pic from "./img/mainPic.png";
import hero from "./img/hero.svg";
import amazon from "./img/amazon.png";
import flipkart from "./img/flipkart.png";
import { Button } from "antd";

const Header = () => {
  return ( 
    <div className="header">
      <div className="text">
        <img className="heroimg" src={hero}></img>
        <span className="herosection">
          <h1 className="herotext1">NCR</h1>
          <p className="herotext2">
            Product Recommendation Engine
            <br/>
            One-stop solution for availing
            <br />
            discount on your favourite brands...
          </p>
        </span>
        

        <div style={{ display: "none", alignItems: "center" }}>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div >
        <div className="downloadBox">
          <input type="button"  className="downloadmobile onlymobile" value="Download" />
        </div>
      <div className="img" style={{display:'none'}}>
        <div className="img_main onlyweb">
        </div>
      </div>
    </div>
  );
};

export default Header;
