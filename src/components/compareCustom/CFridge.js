import { truncate } from "../../App";
export const Fridge = (props) => (
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
          <div className="info" id="last"   style={{
            height: "150px"
          }}>
            Name
          </div>
          {/* <div className="info" id="last">
            Price
          </div> */}
          <div className="info" id="last"   style={{
            height: "200px"
          }}>
            Highlights
          </div>
          <div className="info" id="last">
            Type
          </div>
          <div className="info" id="last">
            Number Of Doors
          </div>
          <div className="info" id="last">
            Dimensions
          </div>
          <div className="info" id="last">
            Capacity
          </div>
          <div className="info" id="last">
            Compressor Type
          </div>
          <div className="info" id="last">
            Built In Stabilizer
          </div>
          <div className="info" id="last">
            Launch Year
          </div>
          <div className="info" id="last">
            Star Rating
          </div>
          <div className="info" id="last">
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
          <div className="info info1" id="info"   style={{
            height: "200px",
            overflow: "auto"
          }}>
            {props.data1.Highlights == "" ? "-" : props.data1.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data1.Type == "" ? "-" : props.data1.Type}
          </div>
          <div className="info info1" id="info">
            {props.data1.Number_Of_Doors == ""
              ? "-"
              : props.data1.Number_Of_Doors}
          </div>
          <div className="info info1" id="info">
            {props.data1.Dimensions == "" ? "-" : props.data1.Dimensions}
          </div>
          <div className="info info1" id="info">
            {props.data1.Capacity == "" ? "-" : props.data1.Capacity}
          </div>
          <div className="info info1" id="info">
            {props.data1.Compressor_Type == ""
              ? "-"
              : props.data1.Compressor_Type}
          </div>
          <div className="info info1" id="info">
            {props.data1.Built_In_Stabilizer == ""
              ? "-"
              : props.data1.Built_In_Stabilizer}
          </div>
          <div className="info info1" id="info">
            {props.data1.Launch_Year == "" ? "-" : props.data1.Launch_Year}
          </div>
          <div className="info info1" id="info">
            {props.data1.Star_Rating == "" ? "-" : props.data1.Star_Rating}
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
              <span>{props.data1.Rating}<p>*</p></span>
                <div>{props.data1.Rating_Num} Ratings </div>
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
          <div className="info info1" id="info"   style={{
            height: "200px",
            overflow: "auto"
          }}>
            {props.data2.Highlights == "" ? "-" : props.data2.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data2.Type == "" ? "-" : props.data2.Type}
          </div>
          <div className="info info1" id="info">
            {props.data2.Number_Of_Doors == ""
              ? "-"
              : props.data2.Number_Of_Doors}
          </div>
          <div className="info info1" id="info">
            {props.data2.Dimensions == "" ? "-" : props.data2.Dimensions}
          </div>
          <div className="info info1" id="info">
            {props.data2.Capacity == "" ? "-" : props.data2.Capacity}
          </div>
          <div className="info info1" id="info">
            {props.data2.Compressor_Type == ""
              ? "-"
              : props.data2.Compressor_Type}
          </div>
          <div className="info info1" id="info">
            {props.data2.Built_In_Stabilizer == ""
              ? "-"
              : props.data2.Built_In_Stabilizer}
          </div>
          <div className="info info1" id="info">
            {props.data2.Launch_Year == "" ? "-" : props.data2.Launch_Year}
          </div>
          <div className="info info1" id="info">
            {props.data2.Star_Rating == "" ? "-" : props.data2.Star_Rating}
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
