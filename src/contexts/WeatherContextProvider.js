import { createContext, useReducer } from "react";
import { reducer } from "../modules/weatherReducer";

export const WeatherStoreContext = createContext({});

export const WeatherProvider = (props) => {
  const [store, dispatch] = useReducer(reducer, {
    title: "Default Title",
    temperatureMode: true,
    windMode: true,
  });

  return (
    <WeatherStoreContext.Provider value={{ ...store, dispatch }}>
      {props.children}
    </WeatherStoreContext.Provider>
  );
};
