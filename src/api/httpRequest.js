import axios from "axios";

const key = "GZPkZvFFxrHOiJQBgJAQ4xGZsuPWV2oy";
const baseUrl = "http://dataservice.accuweather.com";

export const searchCity = (city) => {
  return axios.get(`${baseUrl}/locations/v1/cities/autocomplete`, {
    params: {
      apikey: key,
      q: city,
    },
  });
};

export const searchCityByGeoLocation = (coords) => {
  return axios.get(`${baseUrl}/locations/v1/cities/geoposition/search`, {
    params: {
      apikey: key,
      q: coords,
    },
  });
};

export const getCurrentWeather = (cityKey) => {
  return axios.get(`${baseUrl}/currentconditions/v1/${cityKey}`, {
    params: {
      apikey: key,
    },
  });
};

export const getFiveDays = (cityKey) => {
  return axios.get(`${baseUrl}/forecasts/v1/daily/5day/${cityKey}`, {
    params: {
      apikey: key,
    },
  });
};
