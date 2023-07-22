import { truncate } from "../../App";
export const Mobile = (props) => {
  
  let secondProductScreen = window.sessionStorage.getItem("secondProductScreen");

  return (
  <>
  {  console.log(props) }
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
          <div className="info" id="info">
            Brand Name
          </div>
          {/* <div className="info" id="info">
            Price
          </div> */}
          <div className="info" id="info">
            Model Number
          </div>
          <div className="info" id="info">
            Ratings
          </div>
          <div className="info" id="info">
            Operating System
          </div>
          <div className="info" id="info" style={{
            height: "200px",
          }}>
            Unique Features
          </div>
          <div className="info" id="info">
            Front Camera
          </div>
          <div className="info" id="info">
            Rear Camera
          </div>
          <div className="info" id="info">
            Color
          </div>
          <div className="info" id="info">
            Processor
          </div>
          <div className="info" id="info">
            Clocking Speed
          </div>
          <div className="info" id="info">
            Battery Size
          </div>
          <div className="info" id="info">
            Dimension
          </div>
          <div className="info" id="info">
            Internal Memory
          </div>
          <div className="info" id="info">
            Expandable Memory
          </div>
          <div className="info" id="info">
            RAM
          </div>
          <div className="info" id="info">
            Weight
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
        {/* <div className="pr onlyweb">₹{props.data1.Price}</div> */}
        {typeof props.data1.Price === 'number'&&(
          <div className="pr onlyweb">₹{props.data1.Price}</div>
        )}
        {typeof props.data1.Price === 'string'&&(
          <div className="pr onlyweb">₹{props.data1.Price.replace('₹','')}</div>
        )}

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
            {props.data1.Name === "" ? "-" : props.data1.Name}
          </div>
          <div className="info info1" id="info">
            {props.data1.Brand_Name === "" ? "-" : props.data1.Brand_Name}
          </div>
          {/* <div className="info info1" id="info">
            {props.data1.Price === "" ? "-" : props.data1.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data1.Model_Number == "" ? "-" : props.data1.Model_Number}
          </div>
          <div className="info info1" id="info">
            {props.data1.Rating == "" ? "-" : props.data1.Rating}
          </div>
          <div className="info info1" id="info">
            {props.data1.OS === "" ? "-" : props.data1.OS}
          </div>
          <div className="info info1 " id="info" style={{
            height: "200px",
            overflow:"auto"
          }}>
            {props.data1.Highlights === "" ? "-" : props.data1.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data1.Front_Camera === "" ? "-" : props.data1.Front_Camera}
          </div>
          <div className="info info1" id="info">
            {props.data1.Rear_Camera === "" ? "-" : props.data1.Rear_Camera}
          </div>
          <div className="info info1" id="info">
            {props.data1.Color === "" ? "-" : props.data1.Color}
          </div>
          <div className="info info1" id="info">
            {props.data1.Processor === "" ? "-" : props.data1.Processor}
          </div>
          <div className="info info1" id="info">
            {props.data1.Clock_Speed === "" ? "-" : props.data1.Clock_Speed}
          </div>
          <div className="info info1" id="info">
            {props.data1.Battery_Size === "" ? "-" : props.data1.Battery_Size}
          </div>
          <div className="info info1" id="info">
            {props.data1.Dimension === "" ? "-" : props.data1.Dimension}
          </div>
          <div className="info info1" id="info">
            {props.data1.Internal_Memory === ""
              ? "-"
              : props.data1.Internal_Memory}
          </div>
          <div className="info info1" id="info">
            {props.data1.Expandable_Memory === ""
              ? "-"
              : props.data1.Expandable_Memory}
          </div>
          <div className="info info1" id="info">
            {props.data1.RAM === "" ? "-" : props.data1.RAM}
          </div>
          <div className="info info1" id="info">
            {props.data1.Weight === "" ? "-" : props.data1.Weight}
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
          <div className="info info1" id="info" style={{
            height: "150px",
          }}>
            {props.data2.Name === "" ? "-" : props.data2.Name}
          </div>
          <div className="info info1" id="info">
            {props.data2.Brand_Name === "" ? "-" : props.data2.Brand_Name}
          </div>
          {/* <div className="info info1" id="info">
            {props.data2.Price === "" ? "-" : props.data2.Price}
          </div> */}
          <div className="info info1" id="info">
            {props.data2.Model_Number == "" ? "-" : props.data2.Model_Number}
          </div>
          <div className="info info1" id="info">
            {props.data2.Rating == "" ? "-" : props.data2.Rating}
          </div>
          <div className="info info1" id="info">
            {props.data2.OS === "" ? "-" : props.data2.OS}
          </div>
          <div className="info info1" id="info" style={{
            height: "200px",
            overflow:"auto"
          }}>
            {props.data2.Highlights === "" ? "-" : props.data2.Highlights}
          </div>
          <div className="info info1" id="info">
            {props.data2.Front_Camera === "" ? "-" : props.data2.Front_Camera}
          </div>
          <div className="info info1" id="info">
            {props.data2.Rear_Camera === "" ? "-" : props.data2.Rear_Camera}
          </div>
          <div className="info info1" id="info">
            {props.data2.Color === "" ? "-" : props.data2.Color}
          </div>
          <div className="info info1" id="info">
            {props.data2.Processor === "" ? "-" : props.data2.Processor}
          </div>
          <div className="info info1" id="info">
            {props.data2.Clock_Speed === "" ? "-" : props.data2.Clock_Speed}
          </div>
          <div className="info info1" id="info">
            {props.data2.Battery_Size === "" ? "-" : props.data2.Battery_Size}
          </div>
          <div className="info info1" id="info">
            {props.data2.Dimension === "" ? "-" : props.data2.Dimension}
          </div>
          <div className="info info1" id="info">
            {props.data2.Internal_Memory === ""
              ? "-"
              : props.data2.Internal_Memory}
          </div>
          <div className="info info1" id="info">
            {props.data2.Expandable_Memory === ""
              ? "-"
              : props.data2.Expandable_Memory}
          </div>
          <div className="info info1" id="info">
            {props.data2.RAM === "" ? "-" : props.data2.RAM}
          </div>
          <div className="info info1" id="info">
            {props.data2.Weight === "" ? "-" : props.data2.Weight}
          </div>
          <div className="info info1" id="last">
            {props.data2.Warranty === "" ? "-" : props.data2.Warranty}
          </div>
        </div>
      </div>
    </div>
    </div>
  </>

)

}    