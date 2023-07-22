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
   
// newarrival
import axios from "axios";
const GETPRODUCTDETAILBYURl = "https://bachat-rest.azurewebsites.net/prd-detail/";


export default function CompareTwoMobile() {
    const [data1, setdata1] = useState();
    const [data2, setdata2] = useState();
    const [loading, setloading] = useState(true);
    const b_category = sessionStorage.getItem("bachat_category");
   
    // newarrival
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
  
     /*change*/
    //  newarrival
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
        <div className="rating-div">
          <p className="rating-title">Brand Name</p>
          <div className="p-rating">
            <div className="p-item">{data1.Brand_Name ? data1.Brand_Name : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Brand_Name ? data2.Brand_Name : dash}</div>
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
          <p className="rating-title">Model Number</p>
          
          <div className="p-rating">
            <div className="p-item">{data1.Model_Number ? data1.Model_Number : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Model_Number ? data2.Model_Number : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Ratings</p>
          <div className="p-rating">
            <div className="p-item">{data1.Rating ? data1.Rating : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Rating ? data2.Rating : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Operating System</p>
          <div className="p-rating">
            <div className="p-item">{data1.OS ? data1.OS : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.OS ? data2.OS : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Unique Features</p>
          <div className="p-rating">
            <div className="p-item">{data1.Highlights ? data1.Highlights : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Highlights ? data2.Highlights : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Front Camera</p>
          <div className="p-rating">
            <div className="p-item">{data1.Front_Camera ? data1.Front_Camera : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Front_Camera ? data2.Front_Camera : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Rear Camera</p>
          <div className="p-rating">
            <div className="p-item">{data1.Rear_Camera ? data1.Rear_Camera : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Rear_Camera ? data2.Rear_Camera : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Color</p>
          <div className="p-rating">
            <div className="p-item">{data1.Color ? data1.Color : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Color ? data2.Color : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Processor</p>
          <div className="p-rating">
            <div className="p-item">{data1.Processor ? data1.Processor : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Processor ? data2.Processor : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Clocking Speed</p>
          <div className="p-rating">
            <div className="p-item">{data1.Clock_Speed ? data1.Clock_Speed : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Clock_Speed ? data2.Clock_Speed : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Battery Size</p>
          <div className="p-rating">
            <div className="p-item">{data1.Battery_Size ? data1.Battery_Size : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Battery_Size ? data2.Battery_Size : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Dimension</p>
          <div className="p-rating">
            <div className="p-item">{data1.Dimension ? data1.Dimension : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Dimension ? data2.Dimension : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Internal Memory</p>
          <div className="p-rating">
            <div className="p-item">{data1.Internal_Memory ? data1.Internal_Memory : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Internal_Memory ? data2.Internal_Memory : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Expandable Memory</p>
          <div className="p-rating">
            <div className="p-item">{data1.Expandable_Memory ? data1.Expandable_Memory : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Expandable_Memory ? data2.Expandable_Memory : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">RAM</p>
          <div className="p-rating">
            <div className="p-item">{data1.RAM ? data1.RAM : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.RAM ? data2.RAM : dash}</div>
          </div>
        </div>
        <div className="rating-div">
          <p className="rating-title">Weight</p>
          <div className="p-rating">
            <div className="p-item">{data1.Weight ? data1.Weight : dash}</div>
            <div className="p-hr"></div>
            <div className="p-item">{data2.Weight ? data2.Weight : dash}</div>
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
