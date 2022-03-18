import React from "react";
import styles from "./index.module.css";
import CityNameForm from "../CityNameForm";
import RadioGroup from "../RadioGroup";

export default function Index({
  temperatureMode,
  setTemperatureMode,
  windMode,
  setWindMode,
  title,
  setTitle,
}) {
  return (
    <div className={styles.container}>
      <CityNameForm title={title} setTitle={setTitle} />
      <RadioGroup
        value={temperatureMode}
        setValue={setTemperatureMode}
        content={["℃", "℉"]}
        header="Temperature"
      />
      <RadioGroup
        value={windMode}
        setValue={setWindMode}
        content={["On", "Off"]}
        header="Wind"
      />
    </div>
  );
}
