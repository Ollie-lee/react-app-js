import axios from "axios";

const baseURL = "http://api.openweathermap.org/geo/1.0";

const OpenWeatherMapGeo = axios.create({
  baseURL,
});

const enrichRequestWithAppId = (config) => {
  config.params.appid = "8ae4a4a4221168957021b5693160e4ee";

  return config;
};

OpenWeatherMapGeo.interceptors.request.use(enrichRequestWithAppId);

export default OpenWeatherMapGeo;
