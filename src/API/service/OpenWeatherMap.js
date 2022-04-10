import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5";

const OpenWeatherMap = axios.create({
  baseURL,
});

const enrichRequestWithAppId = (config) => {
  config.params.appid = "8ae4a4a4221168957021b5693160e4ee";

  return config;
};

const enrichRequestWithCelsiusUnits = (config) => {
  config.params.units = "metric";

  return config;
};
OpenWeatherMap.interceptors.request.use(enrichRequestWithAppId);
OpenWeatherMap.interceptors.request.use(enrichRequestWithCelsiusUnits);

export default OpenWeatherMap;
