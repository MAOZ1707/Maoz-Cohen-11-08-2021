const initialState = {
  dailyWeather: {
    fetchedCityKey: null,
    fetchedCityName: "",
    currentDate: "",
    dailyTemperature: null,
    weatherText: "",
    weatherIcon: "",
    IsDayTime: null,
  },
  currentWeatherForecast: [],
  favoritesList: [],
  isForecastLoading: false,
  isDailyLoading: false,
  dailyError: null,
  weatherStatus: "",
};

export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_CURRENT_WEATHER_SUCCESS":
      return {
        ...state,
        dailyWeather: payload,
        isDailyLoading: false,
        weatherStatus: "success",
        dailyError: null,
      };
    case "GET_CURRENT_WEATHER_LOADING":
      return {
        ...state,
        isDailyLoading: true,
        weatherStatus: "pending",
      };
    case "GET_CURRENT_WEATHER_ERROR":
      return {
        ...state,
        dailyError: payload,
        isDailyLoading: false,
        weatherStatus: "fail",
      };
    case "GET_FORECAST_SUCCESS":
      return {
        ...state,
        currentWeatherForecast: payload,
        isForecastLoading: false,
        foreCastError: false,
        weatherStatus: "success",
      };
    case "GET_FORECAST_LOADING":
      return {
        ...state,
        isForecastLoading: true,
        foreCastError: false,
        weatherStatus: "pending",
      };
    case "CLEAR_STATE":
      return {
        ...state,
        isForecastLoading: false,
        foreCastError: null,
        weatherStatus: "",
        dailyError: null,
      };
    default:
      return state;
  }
};
