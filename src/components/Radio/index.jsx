import React from "react";
import styles from "./index.module.css";
import { strToBool } from "../../utils/utils";

export default function Radio({ name, value, setValue, content, checked }) {
  return (
    // <>
    //   <input type="radio" id="label" />
    //   <label htmlFor="label">label</label>
    // </>

    <label className={styles.container}>
      <>{content}</>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={(e) => setValue(strToBool(e.target.value))}
        checked={checked}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
}
