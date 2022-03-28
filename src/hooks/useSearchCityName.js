import React, { useContext, useEffect, useState, useRef } from "react";
import { getCurrentWeatherByCityName } from "API/apis";
import { WeatherStoreContext } from "contexts/WeatherContextProvider";
import { debounce } from "lodash";
import { degToCompass } from "../utils/utils";

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
  // const latestCityName = useRef(cityName);
  // const latestLoading = useRef(loading);
  // const latestWeatherData = useRef(weatherData);

  useEffect(() => {
    async function fetchData() {
      debugger;

      setLoading(true);
      const res = await debouncedGetCurrentWeatherByCityName(
        // latestCityName.current
        cityName
      );
      if (res?.cod === "400") {
        setLoading(false);
        setWeatherData({});
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
      }
    }
    fetchData();
  }, [cityName]);

  // useEffect(() => {
  //   latestCityName.current = cityName;
  //   // latestCityName.current = latestCityName;
  //   // latestLoading.current = latestLoading;
  //   // latestWeatherData.current = latestWeatherData;
  // });

  return [loading, weatherData];
};
