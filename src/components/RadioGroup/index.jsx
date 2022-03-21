import React from "react";
import styles from "./index.module.css";
import Radio from "../Radio";

export default function RadioGroup({
  header = "Title",
  value,
  dispatch,
  content,
}) {
  return (
    <div className={styles.container}>
      <span>{header}</span>
      <div className={styles.radioGroup}>
        <Radio
          name={header}
          value={true}
          content={content[0]}
          checked={value === true}
          dispatch={dispatch}
        />
        <Radio
          name={header}
          value={false}
          content={content[1]}
          checked={value === false}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
