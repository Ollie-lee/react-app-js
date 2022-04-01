import { useSearchCityName } from "hooks/useSearchCityName";
import React, { useContext } from "react";
import styles from "./index.module.css";
import { WeatherStoreContext } from "contexts/WeatherContextProvider";
import { isEmpty } from "lodash";

export default function SearchResultWeatherCard() {
  const [loading, weatherData, error] = useSearchCityName();
  const { cityName, dispatch } = useContext(WeatherStoreContext);

  if (loading) return <div data-testid="loading">Loading</div>;
  if (!cityName) return <div data-testid="empty">Please enter city name</div>;
  if (error) return <div data-testid="error">No city found</div>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Typed City Name: {cityName}</h1>
      <div className={styles.lower}>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather-icon"
          data-testid="weather-icon"
        />
        <div className={styles.descriptionContainer}>
          <span className={styles.cityName}>{weatherData.locationName}</span>
          <span className={styles.temperature}>
            {Math.trunc(weatherData.temperature)}&#176;{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
