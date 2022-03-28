import React, { useContext } from "react";
import styles from "./index.module.css";
import { WeatherStoreContext } from "../../contexts/WeatherContextProvider";
import { UPDATE_TITLE } from "../../modules/weatherReducer";

export default function TitleForm() {
  const { title, dispatch } = useContext(WeatherStoreContext);
  return (
    <form className={styles.container}>
      <label htmlFor="title" className={styles.cityNameLabel}>
        {" "}
        Title
      </label>
      <input
        id="title"
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
