import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { getCurrentWeather } from "../../API/apis";
import { degToCompass } from "../../utils/utils";

export default function WeatherCard({
  title = "TITLE OF WIDGET",
  windMode,
  temperatureMode,
}) {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const temp = temperatureMode
    ? weatherData.temperature
    : (weatherData.temperature * 9) / 5 + 32;

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

  if (loading) return <div>Loading</div>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.lower}>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather-icon"
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
