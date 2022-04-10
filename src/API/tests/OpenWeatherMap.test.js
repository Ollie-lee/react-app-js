import {
  enrichRequestWithAppId,
  enrichRequestWithCelsiusUnits,
} from "../service/OpenWeatherMap";

describe("OpenWeatherMap", () => {
  it("should be appended with api key", () => {
    const config = enrichRequestWithAppId({ params: {} });

    expect(config).toHaveProperty("params.appid");
  });

  it("should be appended with unit", () => {
    const config = enrichRequestWithCelsiusUnits({ params: {} });

    expect(config).toHaveProperty("params.units");
  });
});
