import React from "react";
import "./homesection.css";
import "antd/dist/antd.css";
import main_pic from "./img/mainPic.png";
import { Button } from "antd";

const HomeSection = () => {
  return (
    <div className="contenths">
      <div className="img">
        <div className="img_main">
          <img src={main_pic} alt="cover photo"></img>
        </div>
      </div>
      <div className="text txt">
        <h1
          style={{
            textAlign: "right",
            fontSize: "60px",
            color: "background: #5146FF",
          }}
        >
          Product Feature <br />
          Comparison
        </h1>
        <p>
          {" "}
          We enable our consumers to compare different <br />
          offers based on their technical characteristics and <br />
          price so they can make the best shopping decisions.
        </p>
        <Button
          className="compare_products"
          style={{
            marginTop: "1.5rem",
            color: "#5146FF!important",
            fontSize: "18px",
            fontWeight: "500",
            float: "right",
          }}
          type="primary"
          size="large"
        >
          Compare Products
        </Button>
      </div>
    </div>
  );
};

export default HomeSection;
