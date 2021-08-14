import { getCityWeather } from "./weatherAction";
import { searchCity, searchCityByGeoLocation } from "../api/httpRequest";
import { types } from "../actions/types";

export const getCityByName = (city) => {
  return async (dispatch) => {
    if (!city) {
      dispatch({
        type: types.GET_CURRENT_WEATHER_ERROR,
        payload: "Please provide city ",
      });
    }

    try {
      const response = await searchCity(city);
      if (response.statusText === "OK") {
        dispatch(getCityWeather(response.data[0]));
      }
    } catch (error) {
      dispatch({
        type: types.GET_CURRENT_WEATHER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const getCityByNameByCoordinates = (coords) => {
  return async (dispatch) => {
    if (!coords) {
      dispatch({
        type: types.GET_CURRENT_WEATHER_ERROR,
        payload: "Please allow geoLocation",
      });
    }
    try {
      let shapeCoords = `${coords.lat},${coords.lon}`;
      const response = await searchCityByGeoLocation(shapeCoords);
      if (response.statusText === "OK") {
        dispatch(getCityWeather(response.data));
      }
    } catch (error) {
      dispatch({
        type: types.GET_CURRENT_WEATHER_ERROR,
        payload: error.message,
      });
    }
  };
};
