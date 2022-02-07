describe("Weather App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should see current city weather", () => {
    cy.get("[data-cy=DEMO]").should("be.visible");
  });
});
