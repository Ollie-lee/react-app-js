import OpenWeatherMap from "./service/OpenWeatherMap";
export const getCurrentWeather = async (lat, lon) => {
  const { data } = await OpenWeatherMap.get("/weather", {
    params: {
      lat,
      lon,
    },
  });
  return data;
};
