import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { getCityByName } from "../../actions/searchAction";
import { withStyles } from "@material-ui/core";

import "./Style/Search.style.css";
import ErrorMessage from "../../UI_Elements/ErrorMessage/ErrorMessage";
const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "#fff",
    },

    "& label.Mui-focused": {
      color: "#ffffff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",
      },
      "&:hover fieldset": {
        borderColor: "#ffffff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffffff",
      },
    },
  },
})(TextField);

const Search = () => {
  const [input, setInput] = useState("");
  const { dailyError } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    const lowerCaseAll = value.toLowerCase();
    const replaceAll =
      lowerCaseAll.charAt(0).toUpperCase() + lowerCaseAll.slice(1);
    e.target.value = replaceAll.replace(/[^a-zA-ZşŞıİçÇöÖüÜĞğ\- ]/g, "");

    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getCityByName(input));
  };

  return (
    <div className="main-search-container">
      {dailyError && (
        <ErrorMessage msg={dailyError} type="CLEAR_FAVORITE_ERROR" />
      )}
      <div className="main-search">
        <CssTextField
          onChange={handleChange}
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          size="small"
        />
        <button
          className="main-search-btn"
          onKeyPress={handleSearch}
          onClick={handleSearch}>
          Find
        </button>
      </div>
    </div>
  );
};

export default Search;
