import React, { useContext } from "react";
import styles from "./index.module.css";
import { useCurrentLocationWeather } from "../../hooks/useCurrentLocationWeather";
import { WeatherStoreContext } from "../../contexts/WeatherContextProvider";

export default function WeatherCard() {
  const [loading, weatherData] = useCurrentLocationWeather();
  const { title, temperatureMode, windMode } = useContext(WeatherStoreContext);
  const temp = temperatureMode
    ? weatherData.temperature
    : (weatherData.temperature * 9) / 5 + 32;

  if (loading) return <div data-testid="loading">Loading</div>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.lower}>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather-icon"
          data-testid="weather-icon"
        />
        <div className={styles.descriptionContainer}>
          <span className={styles.cityName}>{weatherData.locationName}</span>
          <span className={styles.temperature}>{Math.trunc(temp)}&#176; </span>
          {windMode && (
            <span className={styles.detail}>
              <b>Wind</b> &nbsp; {weatherData.windDirection}{" "}
              {weatherData.windSpeed}km/h
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// WeatherCard.defaultProps = {
//   title: "TITLE OF WIDGET",
// };
