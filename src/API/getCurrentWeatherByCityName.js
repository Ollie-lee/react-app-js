import { getGeoCordsByCityName } from "./getGeoCordsByCityName";
import { getCurrentWeather } from "./getCurrentWeather";

export const getCurrentWeatherByCityName = async (name) => {
  const [city] = await getGeoCordsByCityName(name);
  const data = await getCurrentWeather(city?.lat, city?.lon);
  return data;
};
