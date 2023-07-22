import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import "./Navbar.css";
import { Button } from "antd";
import { LeftOutlined, MobileOutlined, PlusOutlined } from "@ant-design/icons";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getNames } from "../util/index.js";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      paddingLeft: 35,
      fontSize:20,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
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
}))



export default function Search2() {

const defId1 = window.sessionStorage.getItem("bachat_phone_1_id")
? window.sessionStorage.getItem("bachat_phone_1_id")
: 0;
const defId2 = window.sessionStorage.getItem("bachat_phone_2_id")
? window.sessionStorage.getItem("bachat_phone_2_id")
: 0;
const [options, setMyOptions] = React.useState([]);
const [value1, setValue1] = React.useState();
const [inputValue1, setInputValue1] = React.useState("");
const [customValue1, setCustomValue1] = React.useState(defId1);
const [value2, setValue2] = React.useState();
const [inputValue2, setInputValue2] = React.useState("");
const [customValue2, setCustomValue2] = React.useState(defId2);
const [searchfirst, setSearchfirst] = useState("");
const [searchsecond, setSearchsecond] = useState("");
const firstUpdate = useRef(true);

useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    window.sessionStorage.setItem("bachat_phone_2_id", customValue2);
    window.sessionStorage.setItem("bachat_phone_1_id", customValue1);
    submitSearchSecond()
}, [customValue1, customValue2]);

const getDataFromAPI = async (val, id) => {
    const category = "mobile";
    const res = await getNames(val, category);
    options.length = 0;
    setMyOptions(res);
    if (id === 1) setValue1(res[0]);
    else setValue2(res[0]);
};

const handleSearchFirst = (data) => {
    let val = data;
    if (val !== "") {
      getDataFromAPI(val, 1);
    }
    setSearchfirst(val);
};

const handleSearchSecond = (data) => {
    let val = data;
    if (val !== "") {
      getDataFromAPI(val, 2);
    }
    setSearchsecond(val);
};

const submitSearchFirst = () => {
    if (searchfirst) {
      window.sessionStorage.setItem("bachat_phone_1", searchfirst);
      window.sessionStorage.setItem("bachat_search_phone", customValue1);
      window.location = `/search/mobile/product`;
    }
};

const submitSearchSecond = () => {
    if (searchsecond) {
      window.sessionStorage.setItem("byurl", 0);

      window.sessionStorage.setItem("bachat_phone_2", searchsecond);
      window.sessionStorage.setItem("bachat_search_phone", customValue2);
      window.sessionStorage.setItem("secondProductScreen", 1);

      window.location = `/search/mobile/product`;
      // window.location = `/search/compare`;
    }
};

const submitData = () => {
    if (searchfirst && searchsecond) {
      console.log(searchfirst + " both " + searchsecond);
      window.sessionStorage.setItem("bachat_phone_1", searchfirst);
      window.sessionStorage.setItem("bachat_phone_2", searchsecond);
      window.location = `/search/compare`;
    } else if (searchfirst) {
      console.log(searchfirst + " only 1");
      window.sessionStorage.setItem("bachat_phone_search", searchfirst);
      window.location = `/search/mobile/product`;
    } else if (searchsecond) {
      console.log(searchsecond + " only 2");
      window.sessionStorage.setItem("bachat_phone_search", searchsecond);
      window.location = `/search/mobile/product/}`;
    }
};

const classes = useStyles();

let secondProductScreen = window.sessionStorage.getItem("secondProductScreen");
 

    return (
      <>
      {secondProductScreen==1&&(
        <div style={{display: 'none'}}>
        <div className="searchBar2 onlymobile">
        <Autocomplete
          noOptionsText=""
          options={options}
          value={value2}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <>
              <p onClick={submitSearchSecond}>{option.name}</p>
              {/* {option.name} */}
            </>
          )}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue2(newValue);
              setCustomValue2(newValue.ID);
            }
          }}
          inputValue={inputValue2}
          onInputChange={(event, newInputValue) => {
            handleSearchSecond(newInputValue);
            setInputValue2(newInputValue);
          }}
          renderInput={(params) => (
            <Paper
              className={classes.root}
              ref={params.ref}
              style={{
                backgroundColor: "#fff",
                borderRadius: 7,
                width: "100%",
                height: 40,
                marginTop: 25,
                marginBottom: 25,
              }}
            >
              <TextField
                {...params}
                className={classes.input}
                placeholder={"Search For Mobile Brand"}
              />
              <IconButton
                onClick={submitSearchSecond}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon className="searchicon" />
              </IconButton>
            </Paper>
          )}
        />
      </div>
    </div>

      )}

{secondProductScreen==0&&(
        <div>
        <div className="searchBar2 onlymobile">
        <Autocomplete
          noOptionsText=""
          options={options}
          value={value2}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <>
              <p onClick={submitSearchSecond}>{option.name}</p>
              {/* {option.name} */}
            </>
          )}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue2(newValue);
              setCustomValue2(newValue.ID);
            }
          }}
          inputValue={inputValue2}
          onInputChange={(event, newInputValue) => {
            handleSearchSecond(newInputValue);
            setInputValue2(newInputValue);
          }}
          renderInput={(params) => (
            <Paper
              className={classes.root}
              ref={params.ref}
              style={{
                backgroundColor: "#fff",
                borderRadius: 7,
                width: "100%",
                height: 40,
                marginTop: 25,
                marginBottom: 25,
              }}
            >
              <TextField
                {...params}
                className={classes.input}
                placeholder={"Search For Mobile Brand"}
              />
              <IconButton
                onClick={submitSearchSecond}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon className="searchicon" />
              </IconButton>
            </Paper>
          )}
        />
      </div>
    </div>

      )}
      </>
   )
}
