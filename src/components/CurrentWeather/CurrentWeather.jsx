import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Grid, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { SwitchBtnStyle } from "../../UI_Elements/SwitchBtn/SwitchBtnStyle";
import ImageIcons from "../../UI_Elements/icons/ImageIcons";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

import "./Style/CurrentWeather.style.css";
import Loader from "../../UI_Elements/Loader/Loader";

const CurrentWeather = () => {
  const { weather } = useSelector((state) => state);
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const [tempValue, setTempValue] = React.useState(
    weather.dailyWeather.dailyTemperature["Metric"].Value || ""
  );

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    if (!state.checkedC) {
      setTempValue(weather.dailyWeather.dailyTemperature["Imperial"]);
    } else {
      setTempValue(weather.dailyWeather.dailyTemperature["Metric"]);
    }
  }, [state.checkedC, weather.dailyWeather.dailyTemperature]);

  return (
    <div className="current_weather-container">
      {weather.weatherStatus === "pending" ? <Loader overlay /> : null}
      <div className="current_weather-head">
        <div className="current_weather-head-left">
          <div className="current_weather-location">
            <LocationOnIcon />
            <span>{weather.dailyWeather.fetchedCityName}</span>
          </div>
          <FavoritesButton>Favorite</FavoritesButton>
        </div>
        <div className="current_weather-switch">
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>F</Grid>
              <Grid item>
                <SwitchBtnStyle
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>C</Grid>
            </Grid>
          </Typography>
        </div>
      </div>

      <div className="current_weather-info">
        <div className="current_weather-icon">
          <ImageIcons
            size="10rem"
            color="#e9ecef"
            number={weather.dailyWeather.weatherIcon}
          />
        </div>
        <div className="current_weather-time-temp">
          <div className="current_weather-time">
            {weather.dailyWeather.currentDate}
          </div>
        </div>
        <div className="current_weather-temp-wrapper">
          <span>{tempValue.Value}</span>
          <span>{tempValue.Unit}</span>
          <p>{weather.dailyWeather.weatherText}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
