import { enrichRequestWithAppId } from "../service/OpenWeatherMapGeo";

describe("OpenWeatherMapGeo", () => {
  it("should be appended with api key", () => {
    const config = enrichRequestWithAppId({ params: {} });

    expect(config).toHaveProperty("params.appid");
  });
});
