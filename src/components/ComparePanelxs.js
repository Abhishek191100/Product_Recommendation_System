import React,{useState,useEffect} from "react";
import "antd/dist/antd.css";
import "../components/Navbar.css";
import { Button } from "antd";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { MobileOutlined } from "@ant-design/icons";
import { IoTvOutline } from "react-icons/io5";
import KitchenIcon from "@material-ui/icons/Kitchen";
import LaptopIcon from "@material-ui/icons/Laptop";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";

import Search from "../components/Search";
import Laptop from "@material-ui/icons/Laptop";
import { useLocation } from 'react-router-dom';

const ComparePanelxs = () => {
  const [path,setPath] = useState(false);
  const location = useLocation()
  const bachat_category = sessionStorage.getItem("bachat_category");
  const byurl = sessionStorage.getItem("byurl");

  const backHome = () => {
    window.location = `/search/${bachat_category}`;
  };
  useEffect(() => {
    if(location.pathname === '/search/compare') {
      setPath(true)
      // console.log("path "+ path)
      // console.log("location.pathname "+ location.pathname)
    } else {
      setPath(false)
       //console.log("path "+ path)
    }
      console.log("path "+ path)
  },[path])


  const phone1 = sessionStorage.getItem("bachat_phone_1");
  const phone2 = sessionStorage.getItem("bachat_phone_2");
  //window.sessionStorage.setItem("bachat_search_phone", customValue);

  const submitData = () => {
    if(phone1&&phone2){
      window.location = `/search/compare`;
    } else{
      alert("Please Select Second Product")
    }
  };

  return (
    <>
      <div
        className="compare_p onlyweb"
        style={path?{"background": "white","height": "max-content","marginBottom":"0px"}:{"background": "#A9A6FB","height": "max-content","marginBottom":"23px"}}
      >
        <Button
          onClick={backHome}
          className="btn_abs"
          style={{ height: "45px!important" }}
        >
          <LeftOutlined style={{ color: "#CAC8C8", fontSize: "1rem" }} />
        </Button>
        <div
          className="choose_p"
          style={{
            height: "inherit",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.5rem 1rem",
            flexDirection: "column",
          }}
        >
          <div
            className="content"
            style={{
              width: "85px",
              height: "85px",
              backgroundColor: "#FFE108",
              borderRadius: "18px",
              boxShadow: "5px 5px 50px 0px rgba(0,0,0,0.25)",
            }}
          >
            {bachat_category == "mobile" ? (
              <MobileOutlined style={{ fontSize: "2.25rem", color: "#000" }} />
            ) : bachat_category == "TV" ? (
              <IoTvOutline style={{ fontSize: "2.25rem", color: "#000" }} />
            ) : bachat_category == "laptop" ? (
              <LaptopIcon style={{ fontSize: "2.25rem", color: "#000" }} />
            ) : bachat_category == "refrigerator" ? (
              <KitchenIcon style={{ fontSize: "2.25rem", color: "#000" }} />
            ) : bachat_category == "AC" ? (
              <AcUnitIcon style={{ fontSize: "2.25rem", color: "#000" }} />
            ) : bachat_category == "washing_machine" ? (
              <LocalLaundryServiceIcon
                style={{ fontSize: "2.25rem", color: "#000" }}
              />
            ) : (
              "none"
            )}
          </div>
          <Button
            style={{
              color: "#000!important",
              padding: "0.25rem 3rem",
              marginTop: "1.5rem",
              background: "#FFFFFF!important",
            }}
            onClick={submitData}
          >
            Compare
          </Button>
        </div>
        <div
          className="many"
          style={path?{
            "marginTop": "0",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "marginBottom": "25px",
            "marginTop": "3rem",
            "marginLeft":"90px"
          }:{
            "marginTop": "0",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "marginBottom": "25",
            "marginTop": "0"
          }}

        >
        {!path&&(
          <Search id={1} state={"prod"} width={250}  defaultId={phone1} />
        )}
        {path&&(
          <Search id={1} state={"prod"} width={'37vw'} defaultId={phone1} />
        )}           
          <h2
            style={{
              color: "#FFE108",
              fontSize: "2rem",
              margin: "-2rem 3rem 0rem 3rem",
            }}
          >
            VS
          </h2>
        {!path&&(
          <Search id={2} state={"prod"} width={250} defaultId={phone2} />
        )} 
        {path&&(
          <Search id={2} state={"prod"} width={'37vw'} defaultId={phone2} />
        )}
          {/* <Button className="btn_ab" style={{ height: "45px!important", marginRight: "1rem" }}>
      <PlusOutlined style={{ color: "#CAC8C8", fontSize: "1rem" }} />
    </Button> */}
        </div>
      </div>
    </>
  );
};

export default ComparePanelxs;
