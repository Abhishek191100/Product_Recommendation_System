import { useLocation } from 'react-router-dom';

import React,{useState,useEffect} from "react";
import "./ProductDetails.css";

import "./components/ac.css";
// import "antd/dist/antd.css";
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
import Search2TV from "./components/Search2TV";
import CompareTwoMobile from "./components/CompareTwoMobile"
// import CompareTable from "./components/CompareTable";

const GETPRODUCTPRICE = "https://bachat-rest.azurewebsites.net/compare-prices/";
const GETPRODUCTDETAILBYURl = "https://bachat-rest.azurewebsites.net/prd-detail/";

// let flipkartURL = "https://www.flipkart.com/"
// let AmazonURL = "https://www.flipkart.com/"

let priceVal;


const ProductDetails = ({inAnotherComponent}) => {
  const [path,setPath] = useState(false);
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

  const flipkart = <img src={flip} alt="flipkart"></img>;
  const amazon = <img src={amz} alt="amazon"></img>;

  const columns = [
    {
      title: "Brand",
      dataIndex: "Brand",
      key: "Brand",
    },
    {
      title: "Product",
      dataIndex: "Product",
      key: "Product",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Link",
      dataIndex: "Link",
      key: "Link",
    },
  ];

  const [data, setData] = React.useState();
  const [price, setPrice] = React.useState();
  const [load, setLoading] = React.useState(true);
  const [priceCard, setPriceCard] = React.useState(false);
  const firstUpdate = React.useRef(true);

  const [dataSource, setdataSource] = React.useState([
    {
      key: "1",
      Brand: flipkart,
      Product: "",
      Price: "",
      Link: btns,
    },
    {
      key: "2",
      Brand: amazon,
      Product: "One Plus 7 (128GB) - Black",
      Price: "-",
      Link: btns1,
    },
  ]);
  const [dataSourceMobile, setdataSourceMobile] = React.useState([
    {
      key: "1",
      Brand: flipkart,
      Product: "",
      Price: "",
      Link: btns,
    },
    {
      key: "2",
      Brand: amazon,
      Product: "One Plus 7 (128GB) - Black",
      Price: "-",
      Link: btns1,
    },
  ]);

  const [prddata,setPrddata] = useState('');
  const [showmsg,setShowmsg] = useState(false);

  const category = window.sessionStorage.getItem("bachat_category");
  const Url = window.sessionStorage.getItem("Url");

  const getProductDetailsByUrl = async () => {
    var data = new FormData();
    data.append("category", category);
    data.append("url", Url);
  
    var config = {
      method: "post",
      url: GETPRODUCTDETAILBYURl,
      headers: {},
      data: data,
    };
  
    const x = await axios(config)
      .then(function (response) {
        /*change*/
        console.log(response.data.products)
        const productImage = window.sessionStorage.getItem("productImage");
        setPrddata(productImage)
        const x=response.data.products;
        
        setData(x);
        setLoading(false);
    })
      .catch(function (error) {
        console.log(error);
        setShowmsg(true)

    });
};

const id = sessionStorage.getItem("bachat_search_phone");
var byurl = sessionStorage.getItem("byurl");
var byurl= parseInt(byurl);

const showMsg = (
  <>
    <h1>No Data Available</h1>
  </>
) 


  React.useEffect(() => {
    async function fetchData() {
      const id = sessionStorage.getItem("bachat_search_phone");
      // console.log("id = "+id)
      if(byurl) {
        getProductDetailsByUrl();
        console.log("url")
      } else {
        const temp = await getDeviceDetailsById(id);
        // console.log("getDeviceDetailsById = "+temp);
        setData(temp);
        setLoading(false);
        
      };
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    async function fetchData() {
      //console.log("sendin req..."+ new Date())
      // const priceVal = await getProductPrice(data);

      //console.log("must have got something..."+ new Date())
      // console.log("this is prive vAl😍");
      //  console.log("priceVal "+priceVal)
       setPrice(priceVal);

      var dataNew = new FormData();
      dataNew.append("prd", JSON.stringify(data));

      var config = {
        method: "post",
        url: GETPRODUCTPRICE,
        headers: {},
        data: dataNew,
      };

      axios(config)
        .then(function (response) {
          // console.log("got something..." + new Date());
          // console.log("response.data= "+response.data);
          priceVal = response.data;
           console.log("priceVal= "+priceVal)
          // console.log(priceVal);
          setPrice(priceVal);

          // priceVal.flipkart !== null ? setflipkartURL(priceVal.flipkart.Url) : setflipkartURL("")
          // priceVal.amazon !== null ? setamazonURL(priceVal.amazon.Url) : setamazonURL("")

          setdataSource([
            {
              key: "1",
              Brand: flipkart,
              Product:
                priceVal.flipkart !== null
                  ? priceVal.flipkart.Name
                  : "Not Available",
              Price:
                priceVal.flipkart !== null
                  ? priceTag(priceVal.flipkart.Price)
                  : "",
              // Price: "999",
              Link: btns(
                priceVal.flipkart !== null
                  ? priceVal.flipkart.Url
                  : "https://www.flipkart.com/"
              ),
            },
            {
              key: "2",
              Brand: amazon,
              Product:
                priceVal.amazon !== null
                  ? priceVal.amazon.Name
                  : "Not Available",
              Price:
                priceVal.amazon !== null ? priceTag(priceVal.amazon.Price) : "",
              Link:
                priceVal.amazon !== null
                  ? btns1(
                      priceVal.amazon !== null
                        ? priceVal.amazon.Url
                        : "https://www.amazon.in/"
                    )
                  : "",
            },
          ]);
          setdataSourceMobile([
            {
              key: "1",
              Brand: flipkart,
              Product:
                priceVal.flipkart !== null
                  ? priceVal.flipkart.Name
                  : "Not Available",
              Price:
                priceVal.flipkart !== null
                  ? priceVal.flipkart.Price
                  : "",
              // Price: "999",
              Link: 
                priceVal.flipkart !== null
                  ? priceVal.flipkart.Url
                  : "https://www.flipkart.com/"
              ,
              available: 
                priceVal.flipkart !== null
                ? true
                : false,
            },
            {
              key: "2",
              Brand: amazon,
              Product:
                priceVal.amazon !== null
                  ? priceVal.amazon.Name
                  : "Not Available",
              Price:
                priceVal.amazon !== null 
                ? priceVal.amazon.Price 
                : "",
              Link:
                  priceVal.amazon !== null
                  ? priceVal.amazon.Url
                  : "https://www.amazon.in/",
              available: 
                priceVal.amazon !== null
                ? false
                : false,
            },
          ]);

          setPriceCard(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    fetchData();
  }, [data]);

  if (load) {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: 650, backgroundColor: "#526476",textAlignLast: 'center' }}
        >
              {showmsg&&(
                  showMsg
                )}
                {!showmsg&&(
                  <CircularProgress className="" style={{ color: "white" }} />
                  )}
            </div>
      </>
    );
  } else var coverimage = data.Images;
  
  if(byurl){
    if(coverimage==undefined) {
      coverimage = prddata
    } else {
      coverimage = coverimage[0];
    }
    console.log("coverimage"+data)
    
  } else {
    coverimage = coverimage.substring(2, coverimage.length - 2);
  }

  let secondProductScreen = window.sessionStorage.getItem("secondProductScreen");

  
  // coverimage = coverimage.substring(2, coverimage.length - 2);
  return (
    <>
        <div style={inAnotherComponent && !isMobile ? { 'display' : 'none' } : { 'display' : 'block' }}>
        <ComparePanelxs /> 
        </div>


        <div style={secondProductScreen ? { 'display' : 'block' } : { 'display' : 'none' }}>
          <Search2TV />
        </div>
        <div className="searchproduct" style={path ? { 'display' : 'block' } : { 'display' : 'none' }}>
          <input type="text" placeholder="Search for mobile brand" />
          <img src={searchicon}/>
        </div>
     
    <div className="ten">
      {/* {    //console.log("price=============================" + price)} */}
    <div
        className="main_section onlymobile"
        style={{
          backgroundColor: "white",
          transform: "translateY(-23px)",
          paddingTop: "50px",
        }}
        
      >
        {/* style={{ display: "block" }} */}
        <div className="image" >
          <Paper
            variant="outlined"
            elevation={3}
            style={{
              padding: "20px 25px",
              borderRadius: 25,
              position: "absolute",
              left: "20%",
              transform: "translate(-50%,0)",
            }}
            style={inAnotherComponent && !isMobile ? {'display' : 'none'}:{'display' : 'block'}}

          >
            <img
              src={coverimage}
              alt="coverimage"
              id="product_image"
              style={inAnotherComponent && !isMobile ? {'display' : 'none'}:{'display' : 'block'}}
              ></img>
          </Paper>
        </div>
        <div className="table_sec" >
          <p className="links onlyweb " 
            style={inAnotherComponent && !isMobile ? {'display' : 'none'}:{'display' : 'block'}}

          >
            Price Comparison <span>|</span> Key Features
          </p>
          <h1 className="headering"
            style={inAnotherComponent && !isMobile ? {'display' : 'none'}:{'display' : 'block'}}

          >{data.Name}</h1>
          <div
            className="hrtag"
            style={{
              width: "50%",
              margin: "1rem 2rem",
              display: "flex",
              alignItems: "center",
            }}
            style={inAnotherComponent && !isMobile ? {'display' : 'none'}:{'display' : 'flex'}}

          >
            <div className="btn">
              {data.Rating == "" ? "-" : data.Rating}{" "}
              <FaStarOfLife
                style={{ fontSize: "0.75rem", marginLeft: "8px" }}
              />
            </div>
            <span></span>
            {data.Rating_Num == "" ? "-" : data.Rating_Num} Ratings
          </div>
{/* {console.log("dfdf = "+( inAnotherComponent== !isMobile))}

{console.log("dfdf isMobile = "+ isMobile)} */}
          <p className="price_compare onlyweb"
                      style={inAnotherComponent && !isMobile ? { 'display' : 'none' } : { 'display' : 'block' }}

          >Price Comparison</p>

          <div className="newpricecompare onlymobile">
            <p className="price_compare">Price Comparison</p>
            <div className="comparecard">
              <div className="flipkarddiv">
                <div className="flipContainer">
                  <div className="flip-div1">
                    <img src={flip} />
                    <div className="flip-line">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="flip-div2">
                    <div className="rating">
                      <span>{data.Rating}<p>*</p></span>
                      <div className="ratingcount">{data.Rating_Num} Ratings</div>
                    </div>
                    <div className="flip-price">Rs. {dataSourceMobile[0].Price}</div>
                  </div>
                </div>
                <a href={dataSourceMobile[0].Link} target="_blank"  >
                <button className="flipbtn" > <span>Go To Flipkart</span> <span>></span></button>
                </a>
              </div>
              <div className="flipkarddiv">
                <div className="flipContainer">
                  <div className="flip-div1">
                    <img src={amz} />
                    <div className="flip-line">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  {/* {console.log("dataSourceMobile[1].available = "+dataSourceMobile[1].available)} */}
                  <div className="flip-div2" style={dataSourceMobile[1].available?{ 'display' : 'block' } : { 'display' : 'none' }}>
                    <div className="rating">
                      <span>{data.Rating}<p>*</p></span>
                      <div className="ratingcount">{data.Rating_Num} Ratings</div>
                    </div>
                    <div className="flip-price">Rs. {dataSourceMobile[1].Price}</div>
                  </div>
                  <div className="flip-div2" style={!dataSourceMobile[1].available?{ 'display' : 'block' } : { 'display' : 'none' }}>
                    <div className="rating">
                      <span style={{ 'background': 'white'}}><p>1</p></span>
                      <div className="ratingcount" style={{ 'background': 'white','color':'black','font-weight':'bold'}}>Not Available</div>
                    </div>
                    <div className="flip-price" style={{ 'background': 'white','color':'white'}}>1</div>
                  </div>
                </div>
                <a href={dataSourceMobile[1].Link}
                target="_blank"
                  style={dataSourceMobile[1].available?{ 'display' : 'block' } : { 'display' : 'none' }}
                >
                  <button className="flipbtn" > <span>Go To Amazon</span> <span>></span></button>
                </a>
                <a   
                  style={!dataSourceMobile[1].available?{ 'display' : 'block' } : { 'display' : 'none' }}
                >
                  <button className="flipbtn" > <span style={{'visibility':'hidden'}}>Not Available</span> <span></span></button>
                </a>
              </div>
            </div>
            <div>
              <div
                style={path ? { 'display' : 'block' } : { 'display' : 'none' }}

              >
              {/* <CompareTwoMobile /> */}

              </div>
            </div>
          </div>
          
          


          {/*  */}
          {priceCard ? (
            ""
          ) : (
            <CircularProgress
              style={{ margin: "50px 0 0 100px", color: "white" }}
            />
          )}
          {/* {            console.log("setdataSourceMobile" +dataSourceMobile[0].Link) } 
          {console.log("columns = "+columns)} */}
          {priceCard ? (

          <>

           <Table
              // id="product_table_price"
              style={{
                margin: "1rem 2rem",
                width: "90%",
                background: "transparent",
              }}
              style={!path ? { 'display' : 'block' } : { 'display' : 'none' }}
              dataSource={dataSource}
              columns={columns}
              className="onlyweb"
            />
            </>
          ) : (
            ""
          )}
          {/*  */}
        </div>
      </div>

    </div>
  
      <div
        // className="cont d-none"
        style={{ display: "none", alignItems: "center" }}
      >
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      {/* <div className="plain_txt">
        <div className="bx">
          <table
            class="table table-bordered bg-white text-dark"
            style={{
              display: "block",
              position: "relative",
              marginTop: "100px",
            }}
          >
            <thead>
              <tr className="">
                <th scope="col">
                  <h3>Features</h3>
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{data.Name == "" ? "-" : data.Name}</td>
              </tr>
              <tr>
                <th scope="row">Brand Name</th>
                <td>{data.Brand_Name == "" ? "-" : data.Brand_Name}</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>{data.Price == "" ? "-" : data.Price}</td>
              </tr>
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
                <td>
                  {data.Internal_Memory == "" ? "-" : data.Internal_Memory}
                </td>
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
        </div>
      </div> */}
      {/* <div className="plain_txt"> */}
      <div
        className="bxac"
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
              <td>{data.Name == "" ? "-" : data.Name}</td>
            </tr>
            <tr>
              <th scope="row">Brand</th>
              <td>{data.Brand == "" ? "-" : data.Brand}</td>
            </tr>
            {/* <tr>
              <th scope="row">Price</th>
              <td>{data.Price == "" ? "-" : data.Price}</td>
            </tr> */}
            <tr>
              <th scope="row">Model Name</th>
              <td>{data.Model_Name == "" ? "-" : data.Model_Name}</td>
            </tr>
            <tr>
              <th scope="row">Highlights</th>
              <td>{data.Highlights == "" ? "-" : data.Highlights}</td>
            </tr>
            <tr>
              <th scope="row">Annual Energy Consumption</th>
              <td>
                {data.Annual_Energy_Consumption == ""
                  ? "-"
                  : data.Annual_Energy_Consumption}
              </td>
            </tr>
            <tr>
              <th scope="row">Battery Type</th>
              <td>{data.Battery_Type == "" ? "-" : data.Battery_Type}</td>
            </tr>
            <tr>
              <th scope="row">Capacity in Tons</th>
              <td>
                {data.Capacity_in_Tons == "" ? "-" : data.Capacity_in_Tons}
              </td>
            </tr>
            <tr>
              <th scope="row">Condenser Coil</th>
              <td>{data.Condenser_Coil == "" ? "-" : data.Condenser_Coil}</td>
            </tr>
            <tr>
              <th scope="row">Cooling Capacity</th>
              <td>
                {data.Cooling_Capacity == "" ? "-" : data.Cooling_Capacity}
              </td>
            </tr>
            <tr>
              <th scope="row">Type</th>
              <td>{data.Type == "" ? "-" : data.Type}</td>
            </tr>
            <tr>
              <th scope="row">Noise Level</th>
              <td>{data.Noise_Level == "" ? "-" : data.Noise_Level}</td>
            </tr>
            <tr>
              <th scope="row">Voltage</th>
              <td>{data.Voltage == "" ? "-" : data.Voltage}</td>
            </tr>
            <tr>
              <th scope="row">Warranty</th>
              <td>{data.Warranty == "" ? "-" : data.Warranty}</td>
            </tr>
          </tbody>
       </table>
      </div>
      {/* </div> */}
      {/*  */}
    </>
  );
};

export default ProductDetails;
