import React from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import FiveDaysForecasts from "../../components/FiveDaysForecasts/FiveDaysForecasts";
import Search from "../../components/Search/Search";

import "./Style/Main.style.css";

const Main = () => {
  return (
    <div className="main-page">
      <Search />
      <CurrentWeather />
      <FiveDaysForecasts />
    </div>
  );
};

export default Main;
