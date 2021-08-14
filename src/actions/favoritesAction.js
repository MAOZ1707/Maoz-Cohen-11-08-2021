import { getCurrentWeather } from "../api/httpRequest";
import { shapeFinalData } from "../helper/helper";

export { types } from "./types";

export const getSavedLocation = () => {
  return async (dispatch, getState) => {
    const {
      favorite: { favoritesList },
    } = getState();

    try {
      dispatch({ type: "FAVORITE_LOADING" });
      let promiseArr = favoritesList.map((city) => getCurrentWeather(city.Key));
      const weatherInfo = (await Promise.all([...promiseArr])).map(
        (city) => city.data[0]
      );

      let shapedData = shapeFinalData(favoritesList, weatherInfo);
      dispatch({ type: "GET_FAVORITES", payload: shapedData });
    } catch (error) {
      dispatch({ type: "FAVORITE_ERROR", payload: error.message });
    }
  };
};

export const addToFavorites = (city) => {
  return async (dispatch, getState) => {
    const { favorite } = getState();
    const check = favorite.favoritesList.find((favCity) => {
      return favCity.Key === city.Key;
    });

    if (check) {
      const message = `The city is already on your list`;
      dispatch({ type: "FAVORITE_ERROR", payload: message });
    } else {
      dispatch({ type: "SAVE_TO_FAVORITES", payload: city });
    }
  };
};

export const deleteLocationFromList = (key) => {
  return {
    type: "DELETE_FAVORITE_LOCATION",
    payload: key,
  };
};
