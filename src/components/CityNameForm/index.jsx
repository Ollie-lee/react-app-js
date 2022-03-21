import React, { useContext } from "react";
import styles from "./index.module.css";
import { WeatherStoreContext } from "../../contexts/WeatherContextProvider";
import { UPDATE_TITLE } from "../../modules/weatherReducer";

export default function Index() {
  const { title, dispatch } = useContext(WeatherStoreContext);
  return (
    <form className={styles.container}>
      <label htmlFor="city-name" className={styles.cityNameLabel}>
        {" "}
        Title
      </label>
      <input
        id="city-name"
        type="text"
        placeholder="Title of widget"
        className={styles.cityNameInput}
        value={title}
        onChange={(e) =>
          dispatch({ type: UPDATE_TITLE, title: e.target.value })
        }
      />
    </form>
  );
}
