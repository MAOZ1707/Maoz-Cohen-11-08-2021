import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../UI_Elements/Loader/Loader";
import Day from "./Day/Day";
import "./Style/FiveDaysForecasts.style.css";

const FiveDaysForecasts = () => {
  const { weather } = useSelector((state) => state);

  return (
    <ul className="five_days-wrapper">
      {weather.weatherStatus === "pending" ? <Loader overlay /> : null}
      {weather.currentWeatherForecast.map((day) => {
        return <Day info={day} key={day.date} />;
      })}
    </ul>
  );
};

export default FiveDaysForecasts;
