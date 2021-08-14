import React from "react";
import ImageIcons from "../../../UI_Elements/icons/ImageIcons.jsx";

import "../Style/Day.style.css";

const Day = ({ info }) => {
  const minTemp = info.temperature.Minimum;
  const maxTemp = info.temperature.Maximum;

  return (
    <li className="day-item-container">
      <p>{info.date}</p>
      <div className="day-info-wrapper">
        <div className="day-info-day">
          <div className="day-info-wrapper">
            <ImageIcons color="#ffc300" size="3rem" number={info.day.Icon} />
          </div>
          <p>{info.day.IconPhrase}</p>
        </div>
        <div className="day-info-day">
          <div>
            <ImageIcons color="#000814" size="3rem" number={info.night.Icon} />
          </div>
          <p>{info.night.IconPhrase}</p>
        </div>
      </div>

      <div className="day-info-temp">
        <span>
          Min: {minTemp.Value}
          {minTemp.Unit}
        </span>
        <span>
          Max: {maxTemp.Value}
          {maxTemp.Unit}
        </span>
      </div>
    </li>
  );
};

export default Day;
