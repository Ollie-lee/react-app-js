const APIkey = "8ae4a4a4221168957021b5693160e4ee";
export const getCurrentWeather = (lat, lon) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
  ).then((response) => response.json());

export const getGeoCordsByCityName = (name) =>
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${APIkey}`
  ).then((response) => response.json());

export const getCurrentWeatherByCityName = async (name) => {
  const [city] = await getGeoCordsByCityName(name);
  const data = await getCurrentWeather(city?.lat, city?.lon);
  return data;
};
