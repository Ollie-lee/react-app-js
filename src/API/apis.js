import OpenWeatherMap from "./OpenWeatherMap";
import OpenWeatherMapGeo from "./OpenWeatherMapGeo";
// export const getCurrentWeather = (lat, lon) =>
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
//   ).then((response) => response.json());

export const getCurrentWeather = async (lat, lon) => {
  const { data } = await OpenWeatherMap.get("/weather", {
    params: {
      lat,
      lon,
    },
  });
  return data;
};

// export const getGeoCordsByCityName = (name) =>
//   fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${APIkey}`
//   ).then((response) => response.json());

export const getGeoCordsByCityName = async (name) => {
  const { data } = await OpenWeatherMapGeo.get("/direct", {
    params: {
      q: name,
      limit: 1,
    },
  });
  return data;
};

export const getCurrentWeatherByCityName = async (name) => {
  const [city] = await getGeoCordsByCityName(name);
  const data = await getCurrentWeather(city?.lat, city?.lon);
  return data;
};
