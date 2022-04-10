import OpenWeatherMap from "../service/OpenWeatherMap";
import { getCurrentWeather } from "../getCurrentWeather";

describe("getCurrentWeather", () => {
  beforeEach(() => {
    jest.spyOn(OpenWeatherMap, "get");
  });

  afterEach(() => {
    OpenWeatherMap.get.mockRestore();
  });

  it("should use OpenWeatherMap to get data", async () => {
    OpenWeatherMap.get.mockResolvedValue({ data: {} });
    const lat = -31;
    const lon = 115;
    await getCurrentWeather(lat, lon);

    expect(OpenWeatherMap.get).toBeCalled();
    expect(OpenWeatherMap.get).toBeCalledWith("/weather", {
      params: {
        lat,
        lon,
      },
    });
  });

  it("should resolve get data", async () => {
    const lat = -31;
    const lon = 115;
    const data = {
      coord: {
        lon: 115,
        lat: -31,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      base: "stations",
      main: {
        temp: 19.7,
        feels_like: 19.11,
        temp_min: 19.7,
        temp_max: 19.7,
        pressure: 1016,
        humidity: 53,
        sea_level: 1016,
        grnd_level: 1016,
      },
      visibility: 10000,
      wind: {
        speed: 4.96,
        deg: 275,
        gust: 5.5,
      },
      clouds: {
        all: 24,
      },
      dt: 1649562192,
      sys: {
        country: "AU",
        sunrise: 1649543772,
        sunset: 1649585173,
      },
      timezone: 28800,
      id: 2078703,
      name: "Lancelin",
      cod: 200,
    };

    OpenWeatherMap.get.mockResolvedValue({ data });
    const response = await getCurrentWeather(lat, lon);
    expect(response).toBe(data);
  });
});
