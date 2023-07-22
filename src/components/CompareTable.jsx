
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


const CompareTable = () => {
  const [data1, setdata1] = useState();
  const [data2, setdata2] = useState();
  const [loading, setloading] = useState(true);
  const b_category = sessionStorage.getItem("bachat_category");

  


  React.useEffect(() => {
    async function fetchData() {
      const id1 = sessionStorage.getItem("bachat_phone_1_id");
      const id2 = sessionStorage.getItem("bachat_phone_2_id");
      // if (id1 == 0 || id2 == 0 || id1 == null || id2 == null) {
      //   window.location = `/${b_category}`;
      // }
      const res1 = await getDeviceDetailsById(id1);
      const res2 = await getDeviceDetailsById(id2);
      setdata1(res1);
      setdata2(res2);
      setloading(false);
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

  var coverimage1 = data1.Images;
  coverimage1 = coverimage1.substring(2, coverimage1.length - 2);

  var coverimage2 = data2.Images;
  coverimage2 = coverimage2.substring(2, coverimage2.length - 2);


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

const compareMobileData = (
    <>
    {/* style={inAnotherComponent && !isMobile ? { 'display' : 'none' } : { 'display' : 'block' }} */}

    <div className="products-details">
              <p>Price Feature Comparison</p>
              <div className="rating-div">
                <p className="rating-title">Rating</p>
                <div className="p-rating">
                  <div className="p-item">30,000 Ratings</div>
                  <div className="p-hr"></div>
                  <div className="p-item">1,000 Ratings</div>
                </div>
              </div>

              <div className="score-div">
                <p className="rating-title">Score</p>
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

            </div>
    </>
)
  return (
    <>
    <div className="compares ">
      <ComparePanelxs />
      {compareMobileData}
      {/* {comparesData} */}
    </div>
    </>
    );
};

export default CompareTable;
