import * as useCurrentLocationWeather from "../../src/hooks/useCurrentLocationWeather";
import * as useSearchCityName from "../../src/hooks/useSearchCityName";

describe("<WeatherCard />", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("On Loading", () => {
    beforeEach(() => {
      cy.stub(useCurrentLocationWeather, "useCurrentLocationWeather").returns([
        true,
        {},
      ]);
    });
    it("should render loading when sending request", () => {
      cy.get("[data-testid=loading]").should("be.visible");
    });

    it("should not render weather spec detail", () => {
      cy.get("[data-testid=weather-icon]").should("not.exist");
    });
  });

  describe("Loaded", () => {
    beforeEach(() => {
      cy.stub(useCurrentLocationWeather, "useCurrentLocationWeather").returns([
        false,
        {
          locationName: "Adelaide",
          temperature: 20,
          windSpeed: 5,
          icon: "01d",
          windDirection: "S",
        },
      ]);

      cy.stub(useSearchCityName, "useSearchCityName").returns([
        false,
        {
          locationName: "Adelaide",
          temperature: 20,
          windSpeed: 5,
          icon: "01d",
          windDirection: "S",
        },
        false,
      ]);
    });

    // it("should not render loading when request has been sent", () => {
    //   cy.get("[data-testid=loading]").should("not.exist");
    // });

    it("should render weather spec detail", () => {
      cy.get("[data-testid=weather-icon]").should("be.visible");
    });
  });
});
