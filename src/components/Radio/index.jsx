import React from "react";
import styles from "./index.module.css";

export default function Radio({ name, value, content, checked, dispatch }) {
  return (
    <label className={styles.container}>
      <>{content}</>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={dispatch}
        checked={checked}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
}
