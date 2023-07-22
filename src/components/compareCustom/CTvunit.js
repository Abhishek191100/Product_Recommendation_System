import { truncate } from "../../App";

export const TVunit = (props) => (
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
          <div className="info" id="info">
            Model Name
          </div>
          <div className="info" id="info" style={{
            "height": "150px",
          }}>
            Name
          </div>
          <div className="info" id="info">
            Number
          </div>
          <div className="info" id="info" style={{
            "height": "200px",
            
          }}>
            Highlights
          </div>
          {/* <div className="info" id="info">
            Price
          </div> */}
          <div className="info" id="info">
            Display Size
          </div>
          <div className="info" id="info">
            Screen Type
          </div>
          <div className="info" id="info">
            HDMI
          </div>
          <div className="info" id="info">
            Color
          </div>
          <div className="info" id="info">
            Clocking Speed
          </div>
          <div className="info" id="info">
            Processor
          </div>
          <div className="info" id="info">
            Graphic Processor
          </div>
          <div className="info" id="info">
            Ram Capacity
          </div>
          <div className="info" id="info">
            Rating
          </div>
          <div className="info" id="info">
            Rating Num
          </div>
          <div className="info" id="info">
            Storage Memory
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
          <div className="info info1" id="info">
            {props.data1.Model_Name === "" ? "-" : props.data1.Model_Name}
          </div>
          <div className="info info1 text-trunte" id="info" style={{
            "height": "150px",
          }}>
            {props.data1.Name == "" ? "-" : props.data1.Name}}
          </div>
          <div className="info info1" id="info">
            {props.data1.Number == "" ? "-" : props.data1.Number}
          </div>
          <div className="info info1 text-trunca" id="info" style={{
            "height": "200px",
            overflow:"auto"
          }}>
            {props.data1.Highlights === "" ? "-" : props.data1.Highlights}
          </div>
          {/* <div className="info info1" id="info">
            {props.data1.Price === "" ? "-" : props.data1.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data1.Display_Size === "" ? "-" : props.data1.Display_Size}
          </div>
          <div className="info info1" id="info">
            {props.data1.Screen_Type === "" ? "-" : props.data1.Screen_Type}
          </div>
          <div className="info info1" id="info">
            {props.data1.HDMI === "" ? "-" : props.data1.HDMI}
          </div>
          <div className="info info1" id="info">
            {props.data1.Color === "" ? "-" : props.data1.Color}
          </div>
          <div className="info info1" id="info">
            {props.data1.Clocking_Speed === ""
              ? "-"
              : props.data1.Clocking_Speed}
          </div>
          <div className="info info1" id="info">
            {props.data1.Processor === "" ? "-" : props.data1.Processor}
          </div>
          <div className="info info1" id="info">
            {props.data1.Graphic_Processor === ""
              ? "-"
              : props.data1.Graphic_Processor}
          </div>
          <div className="info info1" id="info">
            {props.data1.Ram_Capacity === "" ? "-" : props.data1.Ram_Capacity}
          </div>
          <div className="info info1" id="info">
            {props.data1.Rating === "" ? "-" : props.data1.Rating}
          </div>
          <div className="info info1" id="info">
            {props.data1.Rating_Num === "" ? "-" : props.data1.Rating_Num}
          </div>
          <div className="info info1" id="info">
            {props.data1.Storage_Memory === ""
              ? "-"
              : props.data1.Storage_Memory}
          </div>
          <div className="info info1" id="last">
            {props.data1.Warranty === "" ? "-" : props.data1.Warranty}
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
         <div className="info info1" id="info">
            {props.data2.Model_Name === "" ? "-" : props.data2.Model_Name}
          </div>
          <div className="info info1" id="info" style={{
            "height": "150px",
          }}>
            {props.data2.Name == "" ? "-" : props.data2.Name}}
          </div>
          <div className="info info1" id="info">
            {props.data2.Number == "" ? "-" : props.data2.Number}
          </div>
          <div className="info info1" id="info" style={{
            "height": "200px",
            overflow:"auto"
          }}>
            {props.data2.Highlights === "" ? "-" : props.data2.Highlights}
          </div>
          {/* <div className="info info1" id="info">
            {props.data2.Price === "" ? "-" : props.data2.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data2.Display_Size === "" ? "-" : props.data2.Display_Size}
          </div>
          <div className="info info1" id="info">
            {props.data2.Screen_Type === "" ? "-" : props.data2.Screen_Type}
          </div>
          <div className="info info1" id="info">
            {props.data2.HDMI === "" ? "-" : props.data2.HDMI}
          </div>
          <div className="info info1" id="info">
            {props.data2.Color === "" ? "-" : props.data2.Color}
          </div>
          <div className="info info1" id="info">
            {props.data2.Clocking_Speed === ""
              ? "-"
              : props.data2.Clocking_Speed}
          </div>
          <div className="info info1" id="info">
            {props.data2.Processor === "" ? "-" : props.data2.Processor}
          </div>
          <div className="info info1" id="info">
            {props.data2.Graphic_Processor === ""
              ? "-"
              : props.data2.Graphic_Processor}
          </div>
          <div className="info info1" id="info">
            {props.data2.Ram_Capacity === "" ? "-" : props.data2.Ram_Capacity}
          </div>
          <div className="info info1" id="info">
            {props.data2.Rating === "" ? "-" : props.data2.Rating}
          </div>
          <div className="info info1" id="info">
            {props.data2.Rating_Num === "" ? "-" : props.data2.Rating_Num}
          </div>
          <div className="info info1" id="info">
            {props.data2.Storage_Memory === ""
              ? "-"
              : props.data2.Storage_Memory}
          </div>
          <div className="info info1" id="last">
            {props.data2.Warranty === "" ? "-" : props.data2.Warranty}
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
);
