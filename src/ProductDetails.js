import React from "react";
import "antd/dist/antd.css";
import "./components/Navbar.css";
import { Button } from "antd";
import { FaStarOfLife } from "react-icons/fa";
import { Table } from "antd";
import flip from "./components/img/flipkart.png";
import amz from "./components/img/amazon.png";
import or from "./components/img/other.png";
import ComparePanelxs from "./components/ComparePanelxs";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";
import { getDeviceDetailsById, getProductPrice } from "./util";

const ProductDetails = () => {
  const btn = (
    <Button style={{ background: "#fff!important", color: "blue" }}>
      Rs. 24,999
    </Button>
  );
  const btn1 = (
    <Button style={{ background: "#fff!important", color: "blue" }}>
      Rs. 38,000
    </Button>
  );

  const btns = (
    <div
      style={{
        background: "#5146FF",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "35px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Go to Flipkart
    </div>
  );
  const btns1 = (
    <div
      style={{
        background: "#5146FF",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: "35px",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Go to Amazon
    </div>
  );

  const flipkart = <img src={flip} alt="flipkart"></img>;
  const amazon = <img src={amz} alt="amazon"></img>;

  const dataSource = [
    {
      key: "1",
      Brand: flipkart,
      Product: "One Plus 7 (Black, 128 GB)",
      Price: btn,
      Link: btns,
    },
    {
      key: "2",
      Brand: amazon,
      Product: "One Plus 7 (128GB) - Black",
      Price: btn1,
      Link: btns1,
    },
  ];

  const columns = [
    {
      title: "Brand",
      dataIndex: "Brand",
      key: "Brand",
    },
    {
      title: "Product",
      dataIndex: "Product",
      key: "Product",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Link",
      dataIndex: "Link",
      key: "Link",
    },
  ];

  const [data, setData] = React.useState();
  const [price, setPrice] = React.useState();
  const [load, setLoading] = React.useState(true);
  const firstUpdate = React.useRef(true);

  React.useEffect(() => {
    async function fetchData() {
      const id = sessionStorage.getItem("bachat_search_phone");
      if (id == null) {
        window.location = "/mobile";
      }
      const temp = await getDeviceDetailsById(id);
      console.log(temp);
      setData(temp);
      setLoading(false);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    async function fetchData() {
      console.log("sendin req..." + new Date());
      const priceVal = await getProductPrice(data);
      console.log("must have got something..." + new Date());
      console.log(priceVal);
      setPrice(priceVal);
    }

    fetchData();
  }, [data]);

  //console.log(price);

  if (load) {
    return (
      <>
        <CircularProgress />
        <Skeleton />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
      </>
    );
  } else var coverimage = data.Images;
  coverimage = coverimage.substring(2, coverimage.length - 2);
  return (
    <>
      <ComparePanelxs />
      <div className="main_section">
        <div className="image">
          <Paper
            variant="outlined"
            elevation={3}
            style={{ padding: "35px 40px", borderRadius: 25 }}
          >
            <img src={coverimage} alt="coverimage"></img>
          </Paper>
        </div>
        <div className="table_sec">
          <p className="links">
            Price Comparison <span>|</span> Key Features <span>|</span>{" "}
            Specification Analysis <span>|</span> FAQs
          </p>
          <h1 className="headering">{data.Name}</h1>
          <div
            className="hrtag"
            style={{
              width: "50%",
              margin: "1rem 2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="btn">
              {data.Rating == "" ? "-" : data.Rating}{" "}
              <FaStarOfLife
                style={{ fontSize: "0.75rem", marginLeft: "8px" }}
              />
            </div>
            <span>|</span>
            {data.Rating_Num == "" ? "-" : data.Rating_Num} Ratings
          </div>
          <p className="price_compare">Price Comparison</p>
          <Table
            style={{ margin: "1rem 2rem", width: "90%" }}
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>

      <div className="cont" style={{ display: "flex", alignItems: "center" }}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="plain_txt">
        <div className="bx">
          <div
            className="bx1"
            style={{ background: "white", border: "none" }}
          ></div>
          <div className="bx2">
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
                {data.Rating_Num == "" ? "-" : data.Rating_Num}
              </div>
              <div className="info info1" id="info">
                46/100-not defined
              </div>
              <div className="info info1" id="info">
                {data.OS == "" ? "-" : data.OS}
              </div>
              <div className="info last1" id="last">
                {data.Highlights == "" ? "-" : data.Highlights}
              </div>
              <div className="info last1" id="last">
                {data.Front_Camera == "" ? "-" : data.Front_Camera}
              </div>
              <div className="info last1" id="last">
                {data.Rear_Camera == "" ? "-" : data.Rear_Camera}
              </div>
              <div className="info last1" id="last">
                {data.Battery_Size == "" ? "-" : data.Battery_Size}
              </div>
              <div className="info last1" id="last">
                {data.Brand_Name == "" ? "-" : data.Brand_Name}
              </div>
              <div className="info last1" id="last">
                {data.Clock_Speed == "" ? "-" : data.Clock_Speed}
              </div>
              <div className="info last1" id="last">
                {data.Color == "" ? "-" : data.Color}
              </div>
              <div className="info last1" id="last">
                {data.Dimension == "" ? "-" : data.Dimension}
              </div>
              <div className="info last1" id="last">
                {data.Expandable_Memory == "" ? "-" : data.Expandable_Memory}
              </div>
              <div className="info last1" id="last">
                {data.Front_Camera == "" ? "-" : data.Front_Camera}
              </div>
              <div className="info last1" id="last">
                {data.Internal_Memory == "" ? "-" : data.Internal_Memory}
              </div>
              <div className="info last1" id="last">
                {data.Model_Number == "" ? "-" : data.Model_Number}
              </div>
              <div className="info last1" id="last">
                {data.Processor == "" ? "-" : data.Processor}
              </div>
              <div className="info last1" id="last">
                {data.RAM == "" ? "-" : data.RAM}
              </div>
              <div className="info last1" id="last">
                {data.Weight == "" ? "-" : data.Weight}
              </div>
              <div className="info last1" id="last">
                {data.Warranty == "" ? "-" : data.Warranty}
              </div>
            </div>
          </div>
        </div>
        <div className="bx">
          <div
            className="bx1"
            style={{ background: "transparent", border: "none" }}
          ></div>
          <div className="bx2">
            <textarea
              style={{
                width: "100%",
                height: "100%",
                resize: "none",
                border: "none",
                padding: "2rem",
              }}
              placeholder="Specification Analysis"
            ></textarea>
          </div>
        </div>
        <div className="bx">
          <div
            className="bx1"
            style={{ background: "transparent", border: "none" }}
          ></div>
          <div className="bx2">
            <textarea
              style={{
                width: "100%",
                height: "100%",
                resize: "none",
                border: "none",
                padding: "2rem",
              }}
              placeholder="FAQs"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
