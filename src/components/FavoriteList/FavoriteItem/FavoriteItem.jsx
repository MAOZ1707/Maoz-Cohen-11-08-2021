import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ImageIcons from "../../../UI_Elements/icons/ImageIcons";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getCityWeather } from "../../../actions/weatherAction";

import "../Style/FavoriteItem.style.css";
import { deleteLocationFromList } from "../../../actions/favoritesAction";

const FavoriteItem = ({ city }) => {
  const { weatherStatus } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (id, name) => {
    const city = {
      Key: id,
      LocalizedName: name,
    };
    dispatch(getCityWeather(city));
  };

  const handleDelete = (key) => {
    dispatch(deleteLocationFromList(key));
  };

  useEffect(() => {
    dispatch(clearState());
    if (weatherStatus === "success") {
      history.push("/");
    }
  }, [dispatch, history, weatherStatus]);

  return (
    <div
      className="favorite-item-wrapper"
      onClick={() => handleClick(city.Key, city.Name)}>
      <div
        className="favorite-item-delete-icon"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(city.Key);
        }}>
        <ClearOutlinedIcon />
      </div>
      <h5>{city.CurrentDate}</h5>
      <h2>{city.Name}</h2>
      <ImageIcons color="#fff" size="3rem" number={city.WeatherIcon} />
      <div className="favorite-item-temp">
        <span className="favorite-item-temp-unit">
          {city.Temperature.Metric.Value}
          <span>{city.Temperature.Metric.Unit}</span>
        </span>
        <span className="favorite-item-temp-text">{city.WeatherText}</span>
      </div>
    </div>
  );
};

export default FavoriteItem;
