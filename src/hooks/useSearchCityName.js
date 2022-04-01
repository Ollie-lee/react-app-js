import React, { useContext, useEffect, useState, useRef } from "react";
import { getCurrentWeatherByCityName } from "API/apis";
import { WeatherStoreContext } from "contexts/WeatherContextProvider";
import { debounce } from "lodash";
import { degToCompass } from "../utils/utils";
import { useDebounce } from "./useDebounce";

// debounced version of function will be a new function fot every render,
// we use the useCallback hook to make sure that the same function is being persisted between renders and it will work as expected.
// so the useEffect won'y be triggered due to "debouncedGetCurrentWeatherByCityName" change
// here we extract this function out of the component, so no need to add it to useEffect dep array.
const debouncedGetCurrentWeatherByCityName = debounce(
  getCurrentWeatherByCityName,
  2000
);

export const useSearchCityName = () => {
  const { cityName, dispatch } = useContext(WeatherStoreContext);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  const debouncedCityName = useDebounce(cityName, 2000);

  useEffect(() => {
    if (!debouncedCityName) return;
    async function fetchData() {
      // debugger;

      setLoading(true);
      let res;
      try {
        res = await getCurrentWeatherByCityName(debouncedCityName);
      } catch (error) {
        setError(true);
        setLoading(false);
        setWeatherData({});
        return;
      }
      if (res?.cod === "400") {
        setLoading(false);
        setWeatherData({});
        setError(true);
        return;
      }
      if (res) {
        setWeatherData({
          locationName: res.name,
          temperature: Math.trunc(res.main.temp),
          windSpeed: Math.trunc(res.wind.speed * 3.6),
          icon: res.weather[0].icon,
          windDirection: degToCompass(res.wind.deg),
        });
        setLoading(false);
        setError(false);
      }
    }
    fetchData();
  }, [debouncedCityName]);

  return [loading, weatherData, error];
};
