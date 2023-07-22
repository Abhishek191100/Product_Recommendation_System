import { truncate } from "../../App";
export const Laptop = (props) => (
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
          <div className="info" id="info" style={{
            height: "150px",
          }}>
            Name
          </div>
          {/* <div className="info" id="info">
            Price
          </div> */}
          <div className="info" id="info">
            Model Number
          </div>
          <div className="info" id="info">
            Series
          </div>
          <div className="info" id="info">
            Operating System
          </div>
          <div className="info" id="info" style={{
            height: "200px",
          }}>
            Highlights
          </div>
          <div className="info" id="info">
            Screen Size
          </div>
          <div className="info" id="info">
            Resolution
          </div>
          <div className="info" id="info">
            Color
          </div>
          <div className="info" id="info">
            Processor Name
          </div>
          <div className="info" id="info">
            Clock Speed
          </div>
          <div className="info" id="info">
            RAM
          </div>
          <div className="info" id="info">
            RAM_Type
          </div>
          <div className="info" id="info">
            Weight
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
            <span>{props.data1.Rating} <p>*</p></span>
              <div>{props.data1.Rating_Num} Ratings </div>
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
         <div className="info info1" id="info" style={{
            height: "150px",
          }}>
            {props.data1.Name == "" ? "-" : props.data1.Name}
          </div>
          {/* <div className="info info1" id="info">
            {props.data1.Price == "" ? "-" : props.data1.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data1.Model_Number == "" ? "-" : props.data1.Model_Number}
          </div>
          <div className="info info1" id="info">
            {props.data1.Series == "" ? "-" : props.data1.Series}
          </div>
          <div className="info info1" id="info">
            {props.data1.Operating_System == ""
              ? "-"
              : props.data1.Operating_System}
          </div>
          <div className="info info1" id="info" style={{
            height: "200px",
            overflow:"auto"
          }}>
            {props.data1.Highlights == "" ? "-" : props.data1.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data1.Screen_Size == "" ? "-" : props.data1.Screen_Size}
          </div>
          <div className="info info1" id="info">
            {props.data1.Resolution == "" ? "-" : props.data1.Resolution}
          </div>
          <div className="info info1" id="info">
            {props.data1.Color == "" ? "-" : props.data1.Color}
          </div>
          <div className="info info1" id="info">
            {props.data1.Processor_Name == ""
              ? "-"
              : props.data1.Processor_Name}
          </div>
          <div className="info info1" id="info">
            {props.data1.Clock_Speed == "" ? "-" : props.data1.Clock_Speed}
          </div>
          <div className="info info1" id="info">
            {props.data1.RAM == "" ? "-" : props.data1.RAM}
          </div>
          <div className="info info1" id="info">
            {props.data1.RAM_Type == "" ? "-" : props.data1.RAM_Type}
          </div>
          <div className="info info1" id="info">
            {props.data1.Weight == "" ? "-" : props.data1.Weight}
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
          <div className="info info1" id="info" style={{
            height: "150px",
          }}>
            {props.data2.Name == "" ? "-" : props.data2.Name}
          </div>
          {/* <div className="info info1" id="info">
            {props.data2.Price == "" ? "-" : props.data2.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data2.Model_Number == "" ? "-" : props.data2.Model_Number}
          </div>
          <div className="info info1" id="info">
            {props.data2.Series == "" ? "-" : props.data2.Series}
          </div>
          <div className="info info1" id="info">
            {props.data2.Operating_System == ""
              ? "-"
              : props.data2.Operating_System}
          </div>
          <div className="info info1" id="info" style={{
            height: "200px",
            overflow:"auto"
          }}>
            {props.data2.Highlights == "" ? "-" : props.data2.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data2.Screen_Size == "" ? "-" : props.data2.Screen_Size}
          </div>
          <div className="info info1" id="info">
            {props.data2.Resolution == "" ? "-" : props.data2.Resolution}
          </div>
          <div className="info info1" id="info">
            {props.data2.Color == "" ? "-" : props.data2.Color}
          </div>
          <div className="info info1" id="info">
            {props.data2.Processor_Name == ""
              ? "-"
              : props.data2.Processor_Name}
          </div>
          <div className="info info1" id="info">
            {props.data2.Clock_Speed == "" ? "-" : props.data2.Clock_Speed}
          </div>
          <div className="info info1" id="info">
            {props.data2.RAM == "" ? "-" : props.data2.RAM}
          </div>
          <div className="info info1" id="info">
            {props.data2.RAM_Type == "" ? "-" : props.data2.RAM_Type}
          </div>
          <div className="info info1" id="info">
            {props.data2.Weight == "" ? "-" : props.data2.Weight}
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
);
