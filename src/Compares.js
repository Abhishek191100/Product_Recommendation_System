import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import "./components/Navbar.css";
import { Button } from "antd";
import {
  LeftOutlined,
  MobileOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Select, Cascader } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import iphone from "./components/img/iphone.png";
import { FaStarOfLife } from "react-icons/fa";
import { Table } from "antd";
import flipkart from "./components/img/flipkart.png";
import amazon from "./components/img/amazon.png";
import other from "./components/img/other.png";
import Comp from "./Comp";
import Comp1 from "./Comp1";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";
import { FiSearch } from "react-icons/fi";
const { Option } = Select;

const options = [
  {
    value: "Iphone 7 (32 GB)",
    label: "Iphone 7 (32 GB)",
  },
  {
    value: "Brand",
    label: "Brand",
  },
  {
    value: "Brand",
    label: "Brand",
  },
  {
    value: "Brand",
    label: "Brand",
  },
  {
    value: "Brand",
    label: "Brand",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "70%",
  },
}));

const Compares = () => {
  const [values, setValues] = React.useState({
    searchfirst: "",
    searchsecond: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = useStyles();

  const btn = <Button>Rs. 24,999</Button>;
  const btn1 = <Button>Rs. 38,000</Button>;
  const btn2 = <Button>Rs. 35,000</Button>;

  const dataSource = [
    {
      key: "1",
      Brand: { flipkart },
      Product: "Apple iPhone 7 (Black, 32 GB)",
      Price: { btn },
      Link: "Go to Flipkart",
    },
    {
      Brand: { amazon },
      Product: "Apple iPhone 7 (32 GB, Black)",
      Price: { btn1 },
      Link: "Go to Amazon",
    },
    {
      Brand: { other },
      Product: "Apple iPhone 7 - White",
      Price: { btn2 },
      Link: "Go to other",
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

  const backHome = () => {
    window.location = "/mobile";
    // window.location = "/search/mobile";
  };

  const oneplusData = () => {
    console.log(values.searchsecond);
    if (values.searchsecond == "OnePlus 7 Pro") {
      window.location = "/compare/products/oneplus";
    }
  };

  return (
    <>
      <div className="compare_p onlyweb" style={{ background: "#A9A6FB" }}>
        <Button
          onClick={backHome}
          className="btn_abs"
          style={{ height: "45px!important" }}
        >
          <LeftOutlined style={{ color: "#CAC8C8", fontSize: "1rem" }} />
        </Button>
        <div
          className="choose_p"
          style={{
            height: "inherit",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2.5rem 1rem",
            flexDirection: "column",
          }}
        >
          <div
            className="content"
            style={{
              width: "85px",
              height: "85px",
              backgroundColor: "#FFE108",
              borderRadius: "18px",
              boxShadow: "5px 5px 50px 0px rgba(0,0,0,0.25)",
            }}
          >
            <MobileOutlined style={{ fontSize: "2.25rem", color: "#000" }} />
          </div>
          <Button
            style={{
              color: "#000!important",
              padding: "0.25rem 3rem",
              marginTop: "1.5rem",
              background: "#FFFFFF!important",
            }}
          >
            <NavLink to="/compare/products">Compare</NavLink>
          </Button>
        </div>
        <div
          className="many"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "3.75rem",
          }}
        >
          <FormControl
            className={clsx(
              classes.margin,
              classes.withoutLabel,
              classes.textField,
              classes.root
            )}
          >
            <Input
              style={{ padding: "0.75rem 1rem", position: "relative" }}
              id="standard-adornment-weight"
              value={values.searchfirst}
              onChange={handleChange("searchfirst")}
              aria-describedby="standard-weight-helper-text"
              placeholder="Product 01 name.."
            ></Input>
            <FiSearch
              style={{
                position: "absolute",
                right: "25px",
                top: "12px",
                fontSize: "1.25rem",
                cursor: "pointer",
              }}
            ></FiSearch>
          </FormControl>
          {/* <Input.Group compact>
          <Select placeholder='Product 01 name..' defaultValue='Iphone 7 (32 GB)' style={{ width: '100%', background: "#f3f3f3", borderRadius: '14px!important' }} onChange={handleChange}>
            <Option value="Iphone 7 (32 GB)">Iphone 7 (32 GB)</Option>
            <Option value="Brand">Brand</Option>
            <Option value="Brand">Brand</Option>
            <Option value="Brand">Brand</Option>
            <Option value="Brand">Brand</Option>
            
          </Select>
          </Input.Group> */}
          <h2
            style={{
              color: "#FFE108",
              fontSize: "1.25rem",
              margin: "0rem 1rem",
            }}
          >
            Vs
          </h2>
          {/* <Input.Group compact>
          <Select placeholder='Product 02 name..' style={{width: '100%', background: "#f3f3f3", borderRadius: '14px!important'}} onChange={handleChange}>
            <Option value="One Plus 7 Pro 128 GB">One Plus 7 Pro 128 GB</Option>
            <Option value="Brand">Brand</Option>
            <Option value="Brand">Brand</Option>
            <Option value="Brand">Brand</Option>
            <Option value="Brand">Brand</Option>
          </Select>
          </Input.Group> */}
          <FormControl
            className={clsx(
              classes.margin,
              classes.withoutLabel,
              classes.textField,
              classes.root
            )}
          >
            <Input
              style={{ padding: "0.75rem 1rem", position: "relative" }}
              id="standard-adornment-weight"
              value={values.searchsecond}
              onChange={handleChange("searchsecond")}
              aria-describedby="standard-weight-helper-text"
              placeholder="Product 02 name.."
            ></Input>
            <FiSearch
              onClick={oneplusData}
              style={{
                position: "absolute",
                right: "25px",
                top: "12px",
                fontSize: "1.25rem",
                cursor: "pointer",
              }}
            ></FiSearch>
          </FormControl>
          {/* <Button className="btn_ab" style={{ height: '45px!important', marginRight: '1rem' }}><PlusOutlined style={{ color: '#CAC8C8', fontSize: '1rem' }} /></Button> */}
        </div>
      </div>
      <Comp />
    </>
  );
};

export default Compares;
