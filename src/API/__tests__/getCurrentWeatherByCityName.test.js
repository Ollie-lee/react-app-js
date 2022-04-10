import { getGeoCordsByCityName } from "../getGeoCordsByCityName";
import { getCurrentWeather } from "../getCurrentWeather";
import { getCurrentWeatherByCityName } from "../getCurrentWeatherByCityName";

jest.mock("../getGeoCordsByCityName");
jest.mock("../getCurrentWeather");

describe("getCurrentWeatherByCityName", () => {
  beforeEach(() => {
    getGeoCordsByCityName.mockResolvedValue([
      {
        name: "Perth",
        local_names: {
          lt: "Pertas",
          oc: "Perth",
          ar: "بيرث",
          mk: "Перт",
          is: "Perth",
          he: "פרת",
          ja: "パース",
          ru: "Перт",
          kn: "ಪರ್ತ್",
          es: "Perth",
          pl: "Perth",
          hi: "पर्थ",
          fr: "Perth",
          zh: "珀斯",
          sv: "Perth",
          de: "Perth",
          eo: "Perto",
          uk: "Перт",
          pt: "Perth",
          en: "Perth",
          sr: "Перт",
        },
        lat: -31.9527121,
        lon: 115.8604796,
        country: "AU",
        state: "Western Australia",
      },
    ]);
    getCurrentWeather.mockResolvedValue({
      coord: {
        lon: 115.8648,
        lat: -31.9474,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 18.36,
        feels_like: 18.44,
        temp_min: 16.02,
        temp_max: 23.12,
        pressure: 1012,
        humidity: 84,
      },
      visibility: 10000,
      wind: {
        speed: 5.66,
        deg: 210,
      },
      clouds: {
        all: 75,
      },
      dt: 1649575059,
      sys: {
        type: 2,
        id: 63154,
        country: "AU",
        sunrise: 1649543605,
        sunset: 1649584925,
      },
      timezone: 28800,
      id: 2066756,
      name: "Maylands",
      cod: 200,
    });
  });

  it("should call other two apis", async () => {
    await getCurrentWeatherByCityName("perth");

    expect(getGeoCordsByCityName).toHaveBeenCalledWith("perth");
    expect(getCurrentWeather).toBeCalledTimes(1);
  });
});
