import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getNames } from "../util/index.js";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingLeft: 15,
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
}));

export default function Search(props) {
  const defId1 = window.sessionStorage.getItem("bachat_phone_1_id")
    ? window.sessionStorage.getItem("bachat_phone_1_id")
    : 0;
  const defId2 = window.sessionStorage.getItem("bachat_phone_2_id")
    ? window.sessionStorage.getItem("bachat_phone_2_id")
    : 0;
  const defaultId = props.defaultId;
  const [options, setMyOptions] = React.useState([]);
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [customValue, setCustomValue] = React.useState(
    props.id === 1 ? defId1 : defId2
  );
  const [searchfirst, setSearchfirst] = useState("");
  const [searchsecond, setSearchsecond] = useState("");
  const firstUpdate = useRef(true);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (props.id === 1) {
      window.sessionStorage.setItem("bachat_phone_1_id", customValue);
      submitSearchFirst()
    } else {
      window.sessionStorage.setItem("bachat_phone_2_id", customValue);
      submitSearchSecond()
    }

  }, [customValue]);

  const category = window.sessionStorage.getItem("bachat_category");

  const getDataFromAPI = async (val) => {
    const res = await getNames(val, category);
    options.length = 0;
    setMyOptions(res);
    setValue(res[0]);
  };

  const handleSearchFirst = (data) => {
    let val = data;
    if (val !== "") {
      getDataFromAPI(val);
    }
    setSearchfirst(val);
  };

  const handleSearchSecond = (data) => {
    let val = data;
    if (val !== "") {
      getDataFromAPI(val);
    }
    setSearchsecond(val);
  };

  const submitSearchFirst = () => {
    if (searchfirst) {
      window.sessionStorage.setItem("bachat_phone_1", searchfirst);
      window.sessionStorage.setItem("bachat_search_phone", customValue);
      window.sessionStorage.setItem("byurl", 0);

      window.location = `/search/${category}/product`;

    }
  };

  const submitSearchSecond = () => {
    if (searchsecond) {
      window.sessionStorage.setItem("bachat_phone_2", searchsecond);
      window.sessionStorage.setItem("bachat_search_phone", customValue);
      window.sessionStorage.setItem("byurl", 0);

      window.location = `/search/${category}/product`;
    }
  };

  const classes = useStyles();
  if (props.state === "dev") {
    return (
      <div>
        <div>{`value: ${
          value !== null ? `${JSON.stringify(value, null, 2)}` : "null"
        }`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <div>{`customValue: '${customValue}'`}</div>
        <br />
        <Autocomplete
          options={options}
          value={value}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <>
              {/* <p
                onClick={() => {
                  props.id === 1 ? submitSearchFirst() : submitSearchSecond();
                }} 
              >
                {option.name}
              </p> */}
               {/* <p onClick={submitSearchFirst}>{option.name}</p> */}

              <p onClick={() =>{
                    props.id === 1 ? submitSearchFirst() : submitSearchSecond();

              }}>{option.name}</p>
          </>
          )}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue(newValue);
              setCustomValue(newValue.ID);
            }
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            props.id === 1
              ? handleSearchFirst(newInputValue)
              : handleSearchSecond(newInputValue);
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <Paper
              className={classes.root}
              ref={params.ref}
              style={{
                backgroundColor: "#E5E5E5",
                borderRadius: 25,
                width: props.width,
                marginBottom: 25,
                
              }}
            >
              <TextField
                {...params}
                className={classes.input}
                placeholder={
                  props.defaultId
                    ? "hello"
                    : props.id === 1
                    ? "Product 1"
                    : "Product 2"
                }
              />
              <IconButton
                onClick={() => {
                  props.id === 1 ? submitSearchFirst() : submitSearchSecond();
                }}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          )}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Autocomplete
          options={options}
          value={value}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <>
              <p
                onClick={() => {
                  props.id === 1 ? submitSearchFirst() : submitSearchSecond();
                }}
              >
              {option.name}
              </p>
            </>
          )}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue(newValue);
              setCustomValue(newValue.ID);
            }
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            props.id === 1
              ? handleSearchFirst(newInputValue)
              : handleSearchSecond(newInputValue);
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <Paper
              className={classes.root}
              ref={params.ref}
              style={{
                backgroundColor: "#E5E5E5",
                borderRadius: 25,
                width: props.width,
                marginBottom: 25,
              }}
            >
              <TextField
                {...params}
                className={classes.input}
                placeholder={
                  defaultId
                    ? defaultId
                    : props.id === 1
                    ? "Product 1"
                    : "Product 2"
                }
              />
              <IconButton
                onClick={() => {
                  props.id === 1 ? submitSearchFirst() : submitSearchSecond();
                }}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          )}
        />
      </div>
    );
  }
}
