import { useState, useEffect } from "react";
import { getCurrentWeather } from "../API/apis";
import { degToCompass } from "../utils/utils";

export const useCurrentLocationWeather = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        getCurrentWeather(
          Math.trunc(position.coords.latitude),
          Math.trunc(position.coords.longitude)
        ).then((res) => {
          setWeatherData({
            locationName: res.name,
            temperature: Math.trunc(res.main.temp),
            windSpeed: Math.trunc(res.wind.speed * 3.6),
            icon: res.weather[0].icon,
            windDirection: degToCompass(res.wind.deg),
          });
          setLoading(false);
        });
      });
    } else {
      /* geolocation IS NOT available */
      alert("geolocation IS NOT available");
    }
  }, []);

  return [loading, weatherData];
};
