import { getCurrentWeather, getFiveDays } from "../api/httpRequest";
import { shapeCurrentWeather, shapeForecast } from "../helper/helper";
import { types } from "./types";

const actionCreator = (type, payload = null) => {
  return {
    type,
    payload,
  };
};

export const getCityWeather = (city) => {
  return async (dispatch) => {
    if (!city) {
      const errorMessage = "Please provide city";
      return dispatch(
        actionCreator(types.GET_CURRENT_WEATHER_ERROR, errorMessage)
      );
    }

    try {
      dispatch(actionCreator(types.GET_CURRENT_WEATHER_LOADING));

      const result = await Promise.all([
        getCurrentWeather(city.Key),
        getFiveDays(city.Key),
      ]);

      const [currentWeather, fiveDays] = result;

      if (currentWeather.statusText === "OK" && fiveDays.statusText === "OK") {
        const cityWeather = currentWeather.data[0];
        const { DailyForecasts } = fiveDays.data;

        dispatch({
          type: types.GET_CURRENT_WEATHER_SUCCESS,
          payload: shapeCurrentWeather(cityWeather, city),
        });
        dispatch({
          type: types.GET_FORECAST_SUCCESS,
          payload: shapeForecast(DailyForecasts),
        });
      }
    } catch (error) {
      actionCreator(types.GET_CURRENT_WEATHER_ERROR, error.message);
    }
  };
};

export const clearState = () => {
  return { type: "CLEAR_STATE" };
};
