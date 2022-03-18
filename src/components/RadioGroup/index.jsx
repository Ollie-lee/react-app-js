import React from "react";
import styles from "./index.module.css";
import Radio from "../Radio";

export default function RadioGroup({
  header = "Title",
  value,
  setValue,
  content,
}) {
  return (
    <div className={styles.container}>
      <span>{header}</span>
      <div className={styles.radioGroup}>
        <Radio
          name={header}
          value={true}
          setValue={setValue}
          content={content[0]}
          checked={value === true}
        />
        <Radio
          name={header}
          value={false}
          setValue={setValue}
          content={content[1]}
          checked={value === false}
        />
      </div>
    </div>
  );
}
