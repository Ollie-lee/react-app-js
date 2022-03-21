import * as hooks from "../../src/hooks/useCurrentLocationWeather";
describe("<WeatherCard />", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("On Loading", () => {
    beforeEach(() => {
      cy.stub(hooks, "useCurrentLocationWeather").returns([true, {}]);
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
      cy.stub(hooks, "useCurrentLocationWeather").returns([
        false,
        {
          locationName: "Perth",
          temperature: 20,
          windSpeed: 5,
          icon: "01d",
          windDirection: "S",
        },
      ]);
    });
    it("should not render loading when sending request", () => {
      cy.get("[data-testid=loading]").should("not.exist");
    });

    it("should render weather spec detail", () => {
      cy.get("[data-testid=weather-icon]").should("be.visible");
    });
  });
});
