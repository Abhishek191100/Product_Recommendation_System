import { truncate } from "../../App";
export const Washing = (props) => (
  <>
    <div className="compare_cont">
    <div className="contents onlyweb" id="hide">
      <div
        className="purple" 
        style={
          {
              height: "inherit",
              // background: "red",
              // transform: "translateY(200px)",
              // display: "block",
              // paddingTop: "10px",
          }
        }
      >
        <div
          className="in_purple_div"
          style={{
            width: "100%",
            // height: "85%",
            // height: "inherit",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
         <div className="info" id="info"   style={{
            height: "150px"
          }}>
            Name
          </div>
          {/* <div className="info" id="info">
            Price
          </div> */}
          <div className="info" id="info">
            Model Name
          </div>
          <div className="info" id="info">
            Brand
          </div>
          <div className="info" id="info"   style={{
            height: "200px"
          }}>
            Highlights
          </div>
          <div className="info" id="info">
            Function Type
          </div>
          <div className="info" id="info">
            Other Features
          </div>
          <div className="info" id="info">
            Speed
          </div>
          <div className="info" id="info">
            Washing Capacity
          </div>
          <div className="info" id="info">
            Star
          </div>
          <div className="info" id="info">
            Warranty
          </div>
        </div>
      </div>
    </div>
    <div className="contents ">
      <div className="comp_pic">
        <img
          src={props.coverimage1}
          alt={props.data1.Name}
        ></img>
        <div>
          <p>{truncate(props.data1.Name, 25)}</p>
          <div className="onlymobile">
            <div className="crating">
            <span>{props.data2.Rating} <p>*</p></span>
              <div>{props.data2.Rating_Num} Ratings </div>
            </div>
          </div>
        </div>
        {/* <p>{props.data1.Name}</p> */}
        <div className="pr onlyweb">₹{props.data1.Price}</div>
      </div>
      <div
        className="purple1 onlyweb"
        // style={{
        //   height: "1200px",
        //     background: "transparent",
        //   paddingTop: "80px",
        //   transform: "translateY(-235px)",
        // }}
      >
        <div
          style={{
            width: "100%",
            // height: "85%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            // background: "transparent",
          }}
        >
                    <div className="info info1" id="info"   style={{
            height: "150px"
          }}>
            {props.data1.Name == "" ? "-" : props.data1.Name}
          </div>
          {/* <div className="info info1" id="info">
            {props.data1.Price == "" ? "-" : props.data1.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data1.Model_Name == "" ? "-" : props.data1.Model_Name}
          </div>
          <div className="info info1" id="info">
            {props.data1.Brand == "" ? "-" : props.data1.Brand}
          </div>
          <div className="info info1" id="info"   style={{
            height: "200px",
            overflow:"auto"
          }}>
            {props.data1.Highlights == "" ? "-" : props.data1.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data1.Function_Type == "" ? "-" : props.data1.Function_Type}
          </div>
          <div className="info info1" id="info">
            {props.data1.Other_Features == ""
              ? "-"
              : props.data1.Other_Features}
          </div>
          <div className="info info1" id="info">
            {props.data1.Speed == "" ? "-" : props.data1.Speed}
          </div>
          <div className="info info1" id="info">
            {props.data1.Washing_Capacity == ""
              ? "-"
              : props.data1.Washing_Capacity}
          </div>
          <div className="info info1" id="info">
            {props.data1.Star == "" ? "-" : props.data1.Star}
          </div>
          <div className="info info1" id="info">
            {props.data1.Warranty == "" ? "-" : props.data1.Warranty}
          </div>
        </div>
      </div>
    </div>
    <div className="vs onlymobile">VS</div>
    <div className="contents ">
      <div className="comp_pic">
        <img
          src={props.coverimage2}
          alt={props.data2.Name}
        ></img>
        <div>
          <p>{truncate(props.data2.Name, 25)}</p>
            <div className="onlymobile">
              <div className="crating">
              <span>{props.data2.Rating} <p>*</p></span>
              <div>{props.data2.Rating_Num} Ratings </div>
              </div>
            </div>
        </div> 
        <div className="pr onlyweb">₹{props.data2.Price}</div>
      </div>
      <div
        className="purple2 onlyweb"
        // style={{
        //   height: "1200px",
        //   paddingTop: "80px",
        //   transform: "translateY(-235px)",
        // }}
      >
        <div
          style={{
            width: "100%",
            height: "85%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
           <div className="info info1" id="info"   style={{
            height: "150px"
          }}>
            {props.data2.Name == "" ? "-" : props.data2.Name}
          </div>
          {/* <div className="info info1" id="info">
            {props.data2.Price == "" ? "-" : props.data2.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data2.Model_Name == "" ? "-" : props.data2.Model_Name}
          </div>
          <div className="info info1" id="info">
            {props.data2.Brand == "" ? "-" : props.data2.Brand}
          </div>
          <div className="info info1" id="info"   style={{
            height: "200px",
            overflow:"auto"
          }}>
            {props.data2.Highlights == "" ? "-" : props.data2.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data2.Function_Type == "" ? "-" : props.data2.Function_Type}
          </div>
          <div className="info info1" id="info">
            {props.data2.Other_Features == ""
              ? "-"
              : props.data2.Other_Features}
          </div>
          <div className="info info1" id="info">
            {props.data2.Speed == "" ? "-" : props.data2.Speed}
          </div>
          <div className="info info1" id="info">
            {props.data2.Washing_Capacity == ""
              ? "-"
              : props.data2.Washing_Capacity}
          </div>
          <div className="info info1" id="info">
            {props.data2.Star == "" ? "-" : props.data2.Star}
          </div>
          <div className="info info1" id="info">
            {props.data2.Warranty == "" ? "-" : props.data2.Warranty}
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
);
