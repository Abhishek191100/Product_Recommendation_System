import { useLocation } from 'react-router-dom';

import React,{useState,useEffect} from "react";
 import "./ProductDetails.css";
// import "antd/dist/antd.css";
import "./components/mobile.css";
import { Button } from "antd";
import { FaStarOfLife } from "react-icons/fa";
import { Table } from "antd";
import flip from "./components/img/flipkart.png";
import amz from "./components/img/amazon.png";
import searchicon from "./components/img/searchicon.svg";
import or from "./components/img/other.png";
import ComparePanelxs from "./components/ComparePanelxs";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getDeviceDetailsById, getProductPrice } from "./util";
import axios from "axios";
import Search2 from "./components/Search2";
import CompareTwoMobile from "./components/CompareTwoMobile"
// import CompareTable from "./components/CompareTable";

const GETPRODUCTPRICE = "http://127.0.0.1:8000/compare-prices/";
const GETPRODUCTRECOMMENDATION="http://127.0.0.1:8000/getTop5/";
// newarrival
const GETPRODUCTDETAILBYURl = "http://127.0.0.1:8000/prd-detail/";
// let flipkartURL = "https://www.flipkart.com/"
// let AmazonURL = "https://www.flipkart.com/"

let priceVal;


const ProductDetails = ({inAnotherComponent}) => {
  const [path,setPath] = useState(false);
  const [ProductData, setProductData] = useState(null);
  console.log(" inAnotherComponentprops xxxxxxxxxxx "+inAnotherComponent)
  const location = useLocation()
  const phone2 = sessionStorage.getItem("bachat_phone_2");

 

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
          setWidth(window.innerWidth);
      }
  useEffect(() => {
    if(inAnotherComponent === undefined){
      inAnotherComponent = false;
       console.log("inAnotherComponent "+inAnotherComponent)
    } else {
       console.log("inAnotherComponent "+inAnotherComponent)

    }

    console.log("inAnotherComponent "+inAnotherComponent)
          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
      }, [inAnotherComponent]);

  let isMobile = (width <= 768);
  // console.log('isMobile = ' +isMobile)


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
       console.log("inAnotherComponent = " +inAnotherComponent)
  },[path])

  const btn = (
    <Button style={{ background: "#fff!important", color: "blue" }}>
      Rs. 24,999
    </Button>
  );
  const btn1 = (
    <Button style={{ background: "#fff!important", color: "blue" }}>
      Rs. 38,000
    </Button>
  );

  const btns = (url) => (
    <div
      style={{
        background: "#5146FF",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "35px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      <a href={url} style={{ textDecoration: "none", color: "white" }} target="_blank">
        Go to Flipkart
      </a>
    </div>
  );

  const btns1 = (url) => (
    <div
      style={{
        background: "#5146FF",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "35px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      <a href={url} style={{ textDecoration: "none", color: "white" }} target="_blank">
        Go to Amazon
      </a>
    </div>
  );

  const priceTag = (price) => (
    <div
      style={{
        background: "#fff",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        // fontFamily: "Popins,sans-serif",
        fontFamily: "-apple-system, BlinkMacSystemFont,sans-serif",
        fontWeight: "600",
        width: "120px",
        height: "35px",
        color: "#5146FF",
      }}
    >
      {price}
    </div>
  );

  // const flipkart = <img src={flip} alt="flipkart"></img>;
  // const amazon = <img src={amz} alt="amazon"></img>;

  // const columns = [
  //   {
  //     title: "Brand",
  //     dataIndex: "Brand",
  //     key: "Brand",
  //   },
  //   {
  //     title: "Product",
  //     dataIndex: "Product",
  //     key: "Product",
  //   },
  //   {
  //     title: "Price",
  //     dataIndex: "Price",
  //     key: "Price",
  //   },
  //   {
  //     title: "Link",
  //     dataIndex: "Link",
  //     key: "Link",
  //   },
  // ];

  const [data, setData] = React.useState();
  const [price, setPrice] = React.useState();
  const [load, setLoading] = React.useState(true);
  const [priceCard, setPriceCard] = React.useState(false);
  const firstUpdate = React.useRef(true);

  // const [dataSource, setdataSource] = React.useState([
  //   {
  //     key: "1",
  //     Brand: flipkart,
  //     Product: "",
  //     Price: "",
  //     Link: btns,
  //   },
  //   {
  //     key: "2",
  //     Brand: amazon,
  //     Product: "One Plus 7 (128GB) - Black",
  //     Price: "-",
  //     Link: btns1,
  //   },
  // ]);
  // const [dataSourceMobile, setdataSourceMobile] = React.useState([
  //   {
  //     key: "1",
  //     Brand: flipkart,
  //     Product: "",
  //     Price: "",
  //     Link: btns,
  //   },
  //   {
  //     key: "2",
  //     Brand: amazon,
  //     Product: "One Plus 7 (128GB) - Black",
  //     Price: "-",
  //     Link: btns1,
  //   },
  // ]);


  // newarrival

  //const [prddata,setPrddata] = useState([]);
  // const [prddata,setPrddata] = useState('');
  // const category = window.sessionStorage.getItem("bachat_category");
  // const Url = window.sessionStorage.getItem("Url");
  const category="mobile";
  const id=12;
  const getProductDetailByURL = "http://127.0.0.1:8000/prd-detail-db/";

// Function to fetch data from the API
async function fetchData(category, id) {
  const url = `${getProductDetailByURL}${category}/${id}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log(data);
      return data[0]; // Assuming the API returns an array of objects
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  useEffect(() => {
    // Fetch data on component mount
    fetchData(category, id)
      .then((data) => {
        if (data) {
          console.log("Data from API:", data.Name);
          setProductData(data); // Store the fetched data in the state
        } else {
          console.log("No data received from the API.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [category, id]); // Run the effect whenever category or id changes


      return (
      <div
  className="bxm"
  style={{
    backgroundColor: "#526476",
    minHeight: "850px",
  }}
  style={inAnotherComponent && !isMobile ? { 'display' : 'none' } : { 'display' : 'block' }}
>
        <p className="onlymobile">Product Feature Comparison</p>
        <p className="kf onlyweb">Key Features</p>

  <table
    class="table table-bordered bg-white text-dark"
    style={isMobile?{
      width: "54.5%",
      marginLeft: "42.5%",
      background: "white"
    }:{
      width: "54.5%",
      marginLeft: "42.5%",
      background: "white"
    }}
  >
    <thead>
      <tr className="">
        <th scope="col">
          <h2>Features</h2>
        </th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Name</th>
        if(ProductData)
        console.log(ProductData.Name);
        else
        console.log("NO PRD");
        <td>{
        ProductData.Name == "" ? "-" : ProductData.Name}</td>
      </tr>
      <tr>
        <th scope="row">Brand Name</th>
        <td>{data.Brand_Name == "" ? "-" : data.Brand_Name}</td>
      </tr>
      {/* <tr>
        <th scope="row">Price</th>
        <td>{data.Price == "" ? "-" : data.Price}</td>
      </tr> */}
      <tr>
        <th scope="row">Model Number</th>
        <td>{data.Model_Number == "" ? "-" : data.Model_Number}</td>
      </tr>
      <tr>
        <th scope="row">Highlights</th>
        <td>{data.Highlights == "" ? "-" : data.Highlights}</td>
      </tr>
      <tr>
        <th scope="row">OS</th>
        <td>{data.OS == "" ? "-" : data.OS}</td>
      </tr>
      <tr>
        <th scope="row">Front Camera</th>
        <td>{data.Front_Camera == "" ? "-" : data.Front_Camera}</td>
      </tr>
      <tr>
        <th scope="row">Rear Camera</th>
        <td>{data.Rear_Camera == "" ? "-" : data.Rear_Camera}</td>
      </tr>
      <tr>
        <th scope="row">Color</th>
        <td>{data.Color == "" ? "-" : data.Color}</td>
      </tr>
      <tr>
        <th scope="row">Processor</th>
        <td>{data.Processor == "" ? "-" : data.Processor}</td>
      </tr>
      <tr>
        <th scope="row">Clocking Speed</th>
        <td>{data.Clock_Speed == "" ? "-" : data.Clock_Speed}</td>
      </tr>
      <tr>
        <th scope="row">Battery Size</th>
        <td>{data.Battery_Size == "" ? "-" : data.Battery_Size}</td>
      </tr>
      <tr>
        <th scope="row">Dimension</th>
        <td>{data.Dimension == "" ? "-" : data.Dimension}</td>
      </tr>
      <tr>
        <th scope="row">Internal Memory</th>
        <td>{data.Internal_Memory == "" ? "-" : data.Internal_Memory}</td>
      </tr>
      <tr>
        <th scope="row">Expandable Memory</th>
        <td>
          {data.Expandable_Memory == "" ? "-" : data.Expandable_Memory}
        </td>
      </tr>
      <tr>
        <th scope="row">Ram</th>
        <td>{data.RAM == "" ? "-" : data.RAM}</td>
      </tr>
      <tr>
        <th scope="row">Weight</th>
        <td>{data.Weight == "" ? "-" : data.Weight}</td>
      </tr>
      <tr>
        <th scope="row">Warranty</th>
        <td>{data.Warranty == "" ? "-" : data.Warranty}</td>
      </tr>
    </tbody>
  </table>
</div>)
  
      // Do something with the data, such as updating the state in React or rendering it in the UI
   


      
 
};

export default ProductDetails;
