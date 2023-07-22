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
import { NavLink } from "react-router-dom";

import axios from "axios";
const GETPRODUCTDETAILBYURl = "https://bachat-rest.azurewebsites.net/prd-detail/";


export default function CompareTwoWash() {
    const [data1, setdata1] = useState();
    const [data2, setdata2] = useState();
    const [loading, setloading] = useState(true);
    const b_category = sessionStorage.getItem("bachat_category");
  
    
    const Url = sessionStorage.getItem("Url");
  
    const getProductDetailsByUrl = async () => {
        var data = new FormData();
        data.append("category", b_category);
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
            const x=response.data.products;
            
            setdata1(x);
        })
          .catch(function (error) {
            console.log(error);
        });
    };
    const id1 = sessionStorage.getItem("bachat_phone_1_id");
  
      var byurl = sessionStorage.getItem("byurl");
      var byurl= parseInt(byurl);
      
  
    React.useEffect(() => {
      async function fetchData() {
        const id1 = sessionStorage.getItem("bachat_phone_1_id");
        const id2 = sessionStorage.getItem("bachat_phone_2_id");
        // if (id1 == 0 || id2 == 0 || id1 == null || id2 == null) {
        //   window.location = `/${b_category}`;
        // }
        // const res1 = await getDeviceDetailsById(id1);
        // const res2 = await getDeviceDetailsById(id2);
        // setdata1(res1);
        // setdata2(res2);
        // setloading(false);
                 
        if(id1 ==0 || id1 ==null) {
          console.log("true111")
  
          await getProductDetailsByUrl();
          const res2 = await getDeviceDetailsById(id2);
          setdata2(res2);
          setloading(false);
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
  
    // var coverimage1 = data1.Images;
    // coverimage1 = coverimage1.substring(2, coverimage1.length - 2);
  
    // var coverimage2 = data2.Images;
    // coverimage2 = coverimage2.substring(2, coverimage2.length - 2);
  
    if( id1 ==0 || id1 ==null){
      console.log("true222")
  
      var coverimage1 = data1.Images;
      var coverimage2 = data2.Images;
      coverimage1 = coverimage1[0];
      coverimage2 = coverimage2.substring(2, coverimage2.length - 2);
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
    
    const dash = (
        <div style={{
            'width': '10px',
            'height': '2px',
            'background': 'black',
            'margin': 'auto' }}></div>
    )
  
    const data = (
    <div className="products-details" >
        <p>Price Feature Comparison</p>
        <div className="rating-div">
          <p className="rating-title">Name</p>
          <div className="p-rating">
            <div className="p-item">{data1.Name ? data1.Name : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Name ? data2.Name : dash}</div>
          </div>
        </div>
        {/* <div className="rating-div">
          <p className="rating-title">Price</p>
          <div className="p-rating">
            <div className="p-item">&#8377; {data1.Price ? data1.Price : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">&#8377; {data2.Price ? data2.Price : dash}</div>
          </div>
        </div> */}
        <div className="rating-div">
          <p className="rating-title">Model Name</p>
          <div className="p-rating">
            <div className="p-item">{data1.Model_Name ? data1.Model_Name : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Model_Name ? data2.Model_Name : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Brand</p>
          <div className="p-rating">
            <div className="p-item">{data1.Brand ? data1.Brand : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Brand ? data2.Brand : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Unique Features</p>
          <div className="p-rating">
            <div className="p-item"> {data1.Highlights ? data1.Highlights : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item"> {data2.Highlights ? data2.Highlights : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Other Features</p>
          
          <div className="p-rating">
            <div className="p-item">{data1.Other_Features ? data1.Other_Features : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Other_Features ? data2.Other_Features : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Washing Capacity</p>
          <div className="p-rating">
            <div className="p-item">{data1.Washing_Capacity ? data1.Washing_Capacity : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Washing_Capacity ? data2.Washing_Capacity : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Speed</p>
          <div className="p-rating">
            <div className="p-item">{data1.Speed ? data1.Speed : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Speed ? data2.Speed : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Warranty</p>
          <div className="p-rating">
            <div className="p-item">{data1.Warranty ? data1.Warranty : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Warranty ? data2.Warranty : dash}</div>
          </div>
        </div>
        
        {/* <div className="score-div">
          <p className="rating-title">score</p>
          <div className="p-rating">
            <div className="p-item">
              <div className="p-set">
                  <div className="p-blue"></div>
                  <div className="p-white"></div>
                  <div className="p-percentage">56%</div>  
                </div>
              </div>
            <div className="p-hr"></div>
            <div className="p-item">
              <div className="p-set">
                <div className="p-blue"></div>
                <div className="p-white"></div>
                <div className="p-percentage">56%</div>  
              </div> 
            </div>
          </div>
        </div>


        <div className="os-div">
          <p className="rating-title">Operating System</p>
          <div className="p-rating">
            <div className="p-item">IOS 10.8.2</div>
            <div className="p-hr"></div>
            <div className="p-item">Android 9.0 (Pie)</div>
          </div>
        </div>

        <div className="uf-div">
          <p className="rating-title">Unique Features</p>
          <div className="p-rating">
            |
          </div>
        </div>
     */}
    </div>

    )
    return (
        <div>
            {data}
        </div>
    )
}
