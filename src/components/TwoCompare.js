
import React,{useState} from "react";
import ComparePanelxs from "./ComparePanelxs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getDeviceDetailsById } from "../util/index.js";
import { Mobile } from "./compareCustom/CMobile";
import { ACunit } from "./compareCustom/CAcunit";
import { Fridge } from "./compareCustom/CFridge";
import { Laptop } from "./compareCustom/CLaptop";
import { TVunit } from "./compareCustom/CTvunit";
import { Washing } from "./compareCustom/CWashing";
import ProductDetailsMobile from "../ProductDetailsMobile";
import ProductDetailsTV from "../ProductDetailsTV";
import ProductDetailsAC from "../ProductDetailsAC";
import  ProductDetailsFridge from "../ProductDetailsFridge";
import ProductDetailsLaptop from "../ProductDetailsLaptop";
import ProductDetailsWash from "../ProductDetailsWash";
import { NavLink } from "react-router-dom";
import axios from "axios";


const GETPRODUCTDETAILBYURl = "https://bachat-rest.azurewebsites.net/prd-detail/";

const TwoCompare = () => {
  let another=true;
  const [data1, setdata1] = useState();
  const [data2, setdata2] = useState();
  const [prddata,setPrddata] = useState('');

  const [loading, setloading] = useState(true);
  const b_category = sessionStorage.getItem("bachat_category");


 // const [prddata,setPrddata] = useState([]);
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
        const productImage = window.sessionStorage.getItem("productImage");
        setPrddata(productImage)
        console.log(response.data.products)
        const x=response.data.products;
        
        setdata1(x);
        
    })
      .catch(function (error) {
        console.log(error);
    });
};

const id1 = sessionStorage.getItem("bachat_phone_1_id");
const id2 = sessionStorage.getItem("bachat_phone_2_id");

var byurl = sessionStorage.getItem("byurl");
var byurl= parseInt(byurl);

  React.useEffect(() => {
    async function fetchData() {
      const id1 = sessionStorage.getItem("bachat_phone_1_id");
      const id2 = sessionStorage.getItem("bachat_phone_2_id");
      const url = sessionStorage.getItem("Url");
      const prd_name = sessionStorage.getItem("prd_name");

      if(id1 ==0 || id1 ==null) {
        console.log("true111")

        getProductDetailsByUrl();
        const res2 = await getDeviceDetailsById(id2);
        setdata2(res2);
        setloading(false);
        console.log("res1 "+data1);
        console.log("res2 "+res2.Name);

        console.log("url")
      } else {
        console.log("false111")

        const res1 = await getDeviceDetailsById(id1);
        const res2 = await getDeviceDetailsById(id2);
        console.log("res2 "+res2.Name);
        setdata1(res1);
        setdata2(res2);
        setloading(false);
      }


    
      //sessionStorage.setItem("bachat_phone_1_id",0)
      ///sessionStorage.setItem("bachat_phone_2_id",0)
      //sessionStorage.setItem("bachat_phone_1","")
      //sessionStorage.setItem("bachat_phone_2","")
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: 200 }}
        >
          <CircularProgress />
        </div>
      </>
    );
  }




     /*change*/
  if( id1 ==0 || id1 ==null){
    console.log("true222")
 
    var coverimage1 = data1.Images;
    var coverimage2 = data2.Images;

    if(coverimage1==undefined) {
      coverimage1 = prddata;
      coverimage2 = coverimage2.substring(2, coverimage2.length - 2)

    } else {
          
    coverimage1 = coverimage1[0];
    coverimage2 = coverimage2.substring(2, coverimage2.length - 2)
    }
  } else {
    console.log("false222")

    var coverimage1 = data1.Images;
    var coverimage2 = data2.Images;
    console.log("mobile 1 = "+data1)
    console.log("mobile 2 = "+data2)
    
    coverimage1 = coverimage1.substring(2, coverimage1.length - 2);
    coverimage2 = coverimage2.substring(2, coverimage2.length - 2);
  }


  const comparesData = (
    <> 
    <div className="cmprbtn onlymobile">
    <NavLink className="buttoncmpr" to="/search/compare">Compare</NavLink>
      {/* <button>Compare</button> */}
    </div>
    <div className="compare_d">
  
        <div className="main">
          {b_category == "AC" ? (
            <ACunit
              data1={data1}
              data2={data2}
              coverimage1={coverimage1}
              coverimage2={coverimage2}
            />
          ) : b_category == "refrigerator" ? (
            <Fridge
              data1={data1}
              data2={data2}
              coverimage1={coverimage1}
              coverimage2={coverimage2}
            />
          ) : b_category == "laptop" ? (
            <Laptop
              data1={data1}
              data2={data2}
              coverimage1={coverimage1}
              coverimage2={coverimage2}
            />
          ) : b_category == "mobile" ? (
            <Mobile
              data1={data1}
              data2={data2}
              coverimage1={coverimage1}
              coverimage2={coverimage2}
            />
          ) : b_category == "TV" ? (
            <TVunit
              data1={data1}
              data2={data2}
              coverimage1={coverimage1}
              coverimage2={coverimage2}
            />
          ) : b_category == "washing_machine" ? (
            <Washing
              data1={data1}
              data2={data2}
              coverimage1={coverimage1}
              coverimage2={coverimage2}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    
    </>)


  return (
    <>

    <div>

    </div>
    <div className="compares ">
      <ComparePanelxs />
      {comparesData}
      <div>

      { b_category == "laptop" &&(
        <ProductDetailsLaptop inAnotherComponent={another} />
      )}
      { b_category == "mobile" &&(
        <ProductDetailsMobile inAnotherComponent={another} />
      )}
      { b_category == "TV" &&(
        <ProductDetailsTV inAnotherComponent={another} />
      )}

      { b_category == "AC" &&(
        <ProductDetailsAC inAnotherComponent={another} />
      )}
      { b_category == "refrigerator" &&(
        <ProductDetailsFridge inAnotherComponent={another} />
      )}
     
      { b_category == "washing_machine" &&(
        <ProductDetailsWash inAnotherComponent={another} />
      )}

      </div>
    </div>
    </>
    );
};

export default TwoCompare;
