import React,{useState} from "react";
import { getDeviceDetailsById } from "../util/index.js";
import ComparePanelxs from "./ComparePanelxs";
import CircularProgress from "@material-ui/core/CircularProgress";
import CompareTwoAC from "./CompareTwoAC"
import CompareTwoMobile from "./CompareTwoMobile"
import CompareTwoTV from "./CompareTwoTV"
import CompareTwoFridge from "./CompareTwoFridge"
import CompareTwoWash from "./CompareTwoWash"
import CompareTwoLaptop from "./CompareTwoLaptop"
import './comparefeature.css'

import axios from "axios";


const GETPRODUCTDETAILBYURl = "https://bachat-rest.azurewebsites.net/prd-detail/";


export default function CompareFeature() {
    let another=true;
    const [data1, setdata1] = useState();
    const [data2, setdata2] = useState();
    const [loading, setloading] = useState(true);
    const b_category = sessionStorage.getItem("bachat_category");
  

    const [prddata,setPrddata] = useState('');
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
          const x =response.data.products;
          console.log("setdata1 = "+x)

          setdata1(x);
          
      })
        .catch(function (error) {
          console.log(error);
      });
  };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

      const id1 = sessionStorage.getItem("bachat_phone_1_id");
      var byurl = sessionStorage.getItem("byurl");
      var byurl= parseInt(byurl);

    React.useEffect(() => {
        async function fetchData() {
          const id1 = sessionStorage.getItem("bachat_phone_1_id");
          const id2 = sessionStorage.getItem("bachat_phone_2_id");
         
          if(id1 ==0 || id1 ==null) {
            console.log("true111")
    
            await getProductDetailsByUrl();
            const res2 = await getDeviceDetailsById(id2);
            
            setdata2(res2);
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
          }
          setloading(false);


          // const res1 = await getDeviceDetailsById(id1);
          // const res2 = await getDeviceDetailsById(id2);
          // setdata1(res1);
          // setdata2(res2);
          // setloading(false);
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
    //  if( id1 ==0 || id1 ==null){
    //   console.log("true222")
   
    //   var coverimage1 = data1.Images;
    //   var coverimage2 = data2.Images;
    //   coverimage1 = coverimage1[0];
    //   coverimage2 = coverimage2.substring(2, coverimage2.length - 2);
    // }
    
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
  }else {
      console.log("false222")
  
      var coverimage1 = data1.Images;
      var coverimage2 = data2.Images;
      console.log("mobile 1 = "+data1)
      console.log("mobile 2 = "+data2)
      
      coverimage1 = coverimage1.substring(2, coverimage1.length - 2);
      coverimage2 = coverimage2.substring(2, coverimage2.length - 2);
    }
    const TwoMobile = (
    <>
    <div className="div1x">
      <div className="pro1x">
        <img
          src={coverimage1}
          alt={data1.Name}
        ></img>
        <div>
          <p>{truncate(data1.Name, 25)}</p>
          <div className="onlymobile">
            <div className="cratingx1">
              <span>{data1.Rating} <p>*</p></span>
              <div>{data1.Rating_Num} Ratings </div>
            </div>
          </div>
        </div>
        {/* <p>{data1.Name}</p> */}
      </div>
   </div>
    <div className="div2x">VS</div>
    <div className="div3x ">
      <div className="pro1x">
        <img
          src={coverimage2}
          alt={data2.Name}
        ></img>
        <div>
          <p>{truncate(data2.Name, 25)}</p>
            <div className="onlymobile">
              <div className="cratingx1">
              <span>{data2.Rating} <p>*</p></span>
              <div>{data2.Rating_Num} Ratings </div>
              </div>
            </div>
        </div> 
      </div>
    </div>
    </>
    )



    return (
        <div>
            <div className="containerx">
                {TwoMobile}
            </div>
            <div>
                { b_category == "mobile" &&(
                  <CompareTwoMobile />
                )}
                { b_category == "TV" &&(
                  <CompareTwoTV />
                )}

                { b_category == "AC" &&(
                  <CompareTwoAC />
                )}
                { b_category == "refrigerator" &&(
                  <CompareTwoFridge />
                )}
                { b_category == "laptop" &&(
                  <CompareTwoLaptop />
                )}
                { b_category == "washing_machine" &&(
                  <CompareTwoWash />
                )}
            </div>
        </div>
    )
}
