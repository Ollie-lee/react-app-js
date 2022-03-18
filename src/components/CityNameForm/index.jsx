import React from "react";
import styles from "./index.module.css";

export default function Index({ title, setTitle }) {
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
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
