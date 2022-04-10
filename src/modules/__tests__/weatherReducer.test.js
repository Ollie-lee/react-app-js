import {
  UPDATE_CITY_NAME,
  UPDATE_TEMPERATURE_MODE,
  UPDATE_TITLE,
  UPDATE_WIND_MODE,
  reducer,
} from "../weatherReducer";

describe("reducer", () => {
  const oldState = {
    title: "Default Title",
    temperatureMode: true,
    windMode: true,
    cityName: "perth",
  };

  it(UPDATE_CITY_NAME, () => {
    const action = {
      type: UPDATE_CITY_NAME,
      cityName: "sydney",
    };
    const newState = reducer(oldState, action);
    expect(newState).toEqual({ ...oldState, cityName: "sydney" });
  });

  it(UPDATE_TITLE, () => {
    const action = {
      type: UPDATE_TITLE,
      title: "changed title",
    };
    const newState = reducer(oldState, action);
    expect(newState).toEqual({ ...oldState, title: "changed title" });
  });

  it(UPDATE_TEMPERATURE_MODE, () => {
    const action = {
      type: UPDATE_TEMPERATURE_MODE,
      temperatureMode: false,
    };
    const newState = reducer(oldState, action);
    expect(newState).toEqual({ ...oldState, temperatureMode: false });
  });

  it(UPDATE_WIND_MODE, () => {
    const action = {
      type: UPDATE_WIND_MODE,
      windMode: false,
    };
    const newState = reducer(oldState, action);
    expect(newState).toEqual({ ...oldState, windMode: false });
  });

  it("default state", () => {
    const action = {
      type: "NONE",
      windMode: false,
    };
    const newState = reducer(oldState, action);
    expect(newState).toEqual(oldState);
  });
});
