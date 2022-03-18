const APIkey = "8ae4a4a4221168957021b5693160e4ee";
export const getCurrentWeather = (lat, lon) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
  ).then((response) => response.json());
