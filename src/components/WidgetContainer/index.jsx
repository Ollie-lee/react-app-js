import React, { useContext } from "react";
import styles from "./index.module.css";
import CityNameForm from "../CityNameForm";
import RadioGroup from "../RadioGroup";
import { WeatherStoreContext } from "contexts/WeatherContextProvider";
import {
  UPDATE_TEMPERATURE_MODE,
  UPDATE_WIND_MODE,
} from "../../modules/weatherReducer";
import { strToBool } from "../../utils/utils";

export default function Index() {
  const { temperatureMode, dispatch, windMode } =
    useContext(WeatherStoreContext);

  return (
    <div className={styles.container}>
      <CityNameForm />
      <RadioGroup
        value={temperatureMode}
        dispatch={(event) =>
          dispatch({
            type: UPDATE_TEMPERATURE_MODE,
            temperatureMode: strToBool(event.target.value),
          })
        }
        content={["℃", "℉"]}
        header="Temperature"
      />
      <RadioGroup
        value={windMode}
        dispatch={(event) =>
          dispatch({
            type: UPDATE_WIND_MODE,
            windMode: strToBool(event.target.value),
          })
        }
        content={["On", "Off"]}
        header="Wind"
      />
    </div>
  );
}
