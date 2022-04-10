import OpenWeatherMapGeo from "../service/OpenWeatherMapGeo";
import { getGeoCordsByCityName } from "../getGeoCordsByCityName";

describe("getCurrentWeather", () => {
  beforeEach(() => {
    jest.spyOn(OpenWeatherMapGeo, "get");
  });

  afterEach(() => {
    OpenWeatherMapGeo.get.mockRestore();
  });

  it("should use OpenWeatherMapGeo to get data", async () => {
    const cityName = "perth";
    OpenWeatherMapGeo.get.mockResolvedValue({ data: {} });
    await getGeoCordsByCityName(cityName);

    expect(OpenWeatherMapGeo.get).toBeCalled();
    expect(OpenWeatherMapGeo.get).toBeCalledWith("/direct", {
      params: {
        q: cityName,
        limit: 1,
      },
    });
  });

  it("should resolve get data", async () => {
    const data = [
      {
        name: "Perth",
        local_names: {
          is: "Perth",
          en: "Perth",
          he: "פרת",
          zh: "珀斯",
          hi: "पर्थ",
          fr: "Perth",
          eo: "Perto",
          lt: "Pertas",
          ja: "パース",
          de: "Perth",
          es: "Perth",
          kn: "ಪರ್ತ್",
          mk: "Перт",
          uk: "Перт",
          pl: "Perth",
          pt: "Perth",
          sr: "Перт",
          sv: "Perth",
          ar: "بيرث",
          ru: "Перт",
          oc: "Perth",
        },
        lat: -31.9527121,
        lon: 115.8604796,
        country: "AU",
        state: "Western Australia",
      },
    ];
    const cityName = "perth";
    OpenWeatherMapGeo.get.mockResolvedValue({ data });
    const response = await getGeoCordsByCityName(cityName);
    expect(response).toEqual(data);
  });
});
