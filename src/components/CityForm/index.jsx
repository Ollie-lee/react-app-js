import React, { useContext, useEffect, useCallback, useState } from "react";
import styles from "./index.module.css";
import { UPDATE_CITY_NAME } from "../../modules/weatherReducer";
import { WeatherStoreContext } from "contexts/WeatherContextProvider";

export default function CityForm() {
  const { cityName, dispatch } = useContext(WeatherStoreContext);

  return (
    <form className={styles.container}>
      <label htmlFor="city-name" className={styles.cityNameLabel}>
        {" "}
        City Name
      </label>
      <input
        id="city-name"
        type="text"
        placeholder="City Name"
        className={styles.cityNameInput}
        value={cityName}
        onChange={(e) =>
          dispatch({
            type: UPDATE_CITY_NAME,
            cityName: e.target.value,
          })
        }
      />
    </form>
  );
}
