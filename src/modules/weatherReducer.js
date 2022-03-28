export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_TEMPERATURE_MODE = "UPDATE_TEMPERATURE_MODE";
export const UPDATE_WIND_MODE = "UPDATE_WIND_MODE";
export const UPDATE_CITY_NAME = "UPDATE_CITY_NAME";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case UPDATE_TEMPERATURE_MODE:
      return {
        ...state,
        temperatureMode: action.temperatureMode,
      };
    case UPDATE_WIND_MODE:
      return {
        ...state,
        windMode: action.windMode,
      };
    case UPDATE_CITY_NAME:
      return {
        ...state,
        cityName: action.cityName,
      };

    default:
      return state;
  }
};
