import moment from "moment";

const shapeDate = (date) => {
  return moment(date).format("DD/MM/YY");
};

export const shapeFinalData = (Cities, weather) => {
  return Cities.map((city, i) => {
    return {
      Key: city.Key,
      Name: city.Name,
      Temperature: weather[i].Temperature,
      WeatherIcon: weather[i].WeatherIcon,
      WeatherText: weather[i].WeatherText,
      CurrentDate: shapeDate(weather[i].LocalObservationDateTime),
    };
  });
};

export const shapeCurrentWeather = (cityWeather, city) => {
  let shapeData = {
    fetchedCityKey: city.Key,
    fetchedCityName: city.LocalizedName,
    currentDate: shapeDate(cityWeather.LocalObservationDateTime),
    dailyTemperature: cityWeather.Temperature,
    weatherText: cityWeather.WeatherText,
    weatherIcon: cityWeather.WeatherIcon,
    IsDayTime: cityWeather.IsDayTime,
  };

  return shapeData;
};

export const shapeForecast = (DailyForecasts) => {
  let shapeForecast = DailyForecasts.map((data) => {
    return {
      date: shapeDate(data.Date),
      day: data.Day,
      night: data.Night,
      temperature: data.Temperature,
    };
  });

  return shapeForecast;
};

export const shapeFavorite = (dailyWeather) => {
  let shapeData = {
    Key: dailyWeather.fetchedCityKey,
    Name: dailyWeather.fetchedCityName,
  };

  return shapeData;
};
