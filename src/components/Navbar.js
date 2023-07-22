import React,{useState,useEffect} from "react";
import "antd/dist/antd.css";
import "./Navbar.css";
//import logo from "./img/ncr_logo.png";
import logo from "./img/ncr_logo_1.png";
import humbergerbar from "./img/icons/humburgerbar.png";
import { Input } from "antd";
import { MdShoppingCart } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { Menu, Dropdown } from "antd";
import { MobileOutlined } from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { IoTvOutline } from "react-icons/io5";
import KitchenIcon from "@material-ui/icons/Kitchen";
import LaptopIcon from "@material-ui/icons/Laptop";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";
import Fastfood from "@material-ui/icons/Fastfood";
import LocalBar from "@material-ui/icons/LocalBar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  useEffect(() => {
    
    console.log("show "+show)
    console.log("openMenu "+openMenu)

  },[show,openMenu])

  // useEffect(() => {
    
    

  // },[])

  const handleClick = () => {
    setOpenMenu(true)
  }

  const removeDropDown = () => {
    console.log("removeDropDown")
  }

  const products = (
    <Menu
      className="drop choose_product scrollmenu menuwidth "
    style={show?{'display' : 'none'}:{}}
    >
      <h1>Select Product Category</h1>
      <div>
        <NavLink to="/search/mobile" onClick={() => setShow(true)} data-toggle="collapse" data-target="#myNavbar" className="choose_p">
          <div className="content" >
            <div className="mobilename">
            <MobileOutlined style={{ fontSize: "3rem", color: "#000" }} />

              <p>Mobile</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/search/tv" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
          <div className="mobilename">
            <IoTvOutline style={{ fontSize: "3rem", color: "#000" }} />

            <p>TV</p>
            </div>
            </div>
        </NavLink>
        <NavLink to="/search/laptop" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
          <div className="mobilename">
            <LaptopIcon style={{ fontSize: "3rem", color: "#000" }} />
            <p>Laptop</p>
          </div>
          </div> 
        </NavLink>
        <NavLink to="/search/ac" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
          <div className="mobilename">
            <AcUnitIcon style={{ fontSize: "3rem", color: "#000" }} />

            <p>Air Conditioner</p>
          </div>
          </div>
        </NavLink>
        <NavLink to="/search/refrigerator" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
          <div className="mobilename">
            <KitchenIcon style={{ fontSize: "3rem", color: "#000" }} />

            <p>Refrigerator</p>
          </div></div>
        </NavLink>
        <NavLink to="/search/washingmachine" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
          <div className="mobilename">
            <LocalLaundryServiceIcon
              style={{ fontSize: "3rem", color: "#000" }}
            />

            <p>Washing Machine</p>
            </div></div>

        </NavLink>
        <NavLink to="/search/instantfood" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
            <div className="mobilename">
              <Fastfood
               style={{fontSize: "3rem", color: "#000"}}
              />
              <p>Instant Food</p>

            </div>
          </div>
        </NavLink>
        <NavLink to="/search/Drinks" data-toggle="collapse" onClick={() => setShow(true)} data-target="#myNavbar"  className="choose_p">
          <div className="content">
            <div className="mobilename">
              <LocalBar
               style={{fontSize: "3rem", color: "#000"}}
              />
              <p>Drinks</p>

            </div>
          </div>
        </NavLink>
      </div>
    </Menu>
  );
  const menu = (
    <Menu
      className="drop"
      style={{
        width: "1275px",
        height: "300px",
        marginTop: "1rem",
        position: "absolute",
        transform: "translateX(-35%)",
      }}
    >
      <div className="menu1">
        <div className="line_div1">
          <div className="brand">
            <h1
              style={{
                marginLeft: "1.5rem",
                fontSize: "1.5rem",
                fontFamily: "sans-serif",
                fontWeight: "600",
              }}
            >
              Shop By Brand
            </h1>
            <div className="d_menu" style={{ display: "flex" }}>
              <div className="b1" style={{ paddingLeft: "1rem" }}>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    Brand
                  </a>
                </Menu.Item>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    Brand
                  </a>
                </Menu.Item>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Brand
                  </a>
                </Menu.Item>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Brand
                  </a>
                </Menu.Item>
              </div>
              <div className="b1" style={{ paddingLeft: "1rem" }}>
                <Menu.Item
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    marginLeft: "6rem",
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Brand
                  </a>
                </Menu.Item>
                <Menu.Item
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    marginLeft: "6rem",
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Brand
                  </a>
                </Menu.Item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu2">
        <div className="line_div2">
          <div className="brand">
            <h1
              style={{
                marginLeft: "1.5rem",
                fontSize: "1.5rem",
                fontFamily: "sans-serif",
                fontWeight: "600",
              }}
            >
              Shop By Category
            </h1>
            <div className="d_menu" style={{ display: "flex" }}>
              <div className="b1" style={{ paddingLeft: "1rem" }}>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                  >
                    Category
                  </a>
                </Menu.Item>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                  >
                    Category
                  </a>
                </Menu.Item>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Category
                  </a>
                </Menu.Item>
                <Menu.Item style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Category
                  </a>
                </Menu.Item>
              </div>
              <div className="b1" style={{ paddingLeft: "1rem" }}>
                <Menu.Item
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    marginLeft: "6rem",
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Category
                  </a>
                </Menu.Item>
                <Menu.Item
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    marginLeft: "6rem",
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                  >
                    Category
                  </a>
                </Menu.Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );

  const dropdownMenu = (
    <div  className="dropdown_menu "  
    >
    <Dropdown id="#myNavbar"
      className="hover"
      style={{ cursor: "pointer" }}
      overlay={menu}
      placement="bottomCenter"
    >
      <div
        className="dp"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <div>Gift Cards{" "}</div>
          <div><AiFillCaretDown
            style={{
              paddingTop: "2px",
              paddingLeft: "5px",
              fontSize: "2rem",
              color: "white",
            }}
          ></AiFillCaretDown></div>
        </p>
      </div>
    </Dropdown>
    <Dropdown
      className="hover"
      style={{ cursor: "pointer" }}
      overlay={menu}
      placement="bottomLeft"
    >
      <div
        className="dp"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          Earn Cashback{" "}
          <AiFillCaretDown
            style={{
              paddingLeft: "5px",
              paddingTop: "2px",
              fontSize: "2rem",
              color: "white",
            }}
          ></AiFillCaretDown>
        </p>
      </div>
    </Dropdown>
    <Dropdown
      className="hover"
      style={{ cursor: "pointer" }}
      overlay={products}
      placement="bottomLeft"
    >
      <div
        className="dp"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => setShow(false)} 
      >
        <p>
          Compare Products
          <AiFillCaretDown
            style={{
              paddingLeft: "5px",
              paddingTop: "2px",
              fontSize: "2rem",
              color: "white",
            }}
          ></AiFillCaretDown>
        </p>
      </div>
    </Dropdown>
  </div>
  
  )

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Download App</a>
          </li>
          <li>
            <a>SignUp</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
      <div className="navbar_main">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <p></p>
        </div>

        {/* //testing */}

      


        {/* //end test */}
        <div className="onlyweb">
          {dropdownMenu}
        </div>
        
       <div className="search_bar">
          <Search
            className="search_main"
            placeholder="Search.."
            onSearch={onSearch}
            enterButton
          />
          <MdShoppingCart className="cartIcon" />
          {/* <div className="humburgerbar" onClick={()=>setOpenMenu(!openMenu)}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div> */}
          <div class="navbar-header" onClick={handleClick} >
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
        </div>
        
      </div>
      
        <div class="collapse navbar-collapse navbar-fixed-top" id="myNavbar">
          <ul class="nav navbar-nav">
            {/* <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li> */}
            <li>
            <div className="onlymobile">
              {openMenu&&(dropdownMenu)}
            </div>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
