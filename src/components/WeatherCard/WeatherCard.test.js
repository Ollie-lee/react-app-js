import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "./index";
import * as hooks from "../../hooks/useCurrentLocationWeather";

describe("<WeatherCard />", () => {
  describe("On Loading", () => {
    beforeEach(() => {
      jest
        .spyOn(hooks, "useCurrentLocationWeather")
        .mockImplementation(() => [true, {}]);
    });
    it("should render loading when sending request", () => {
      render(<WeatherCard />);

      expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("should not render weather spec detail", () => {
      render(<WeatherCard />);
      expect(screen.queryByText("Wind")).not.toBeInTheDocument();
    });
  });

  describe("Loaded", () => {
    beforeEach(() => {
      jest.spyOn(hooks, "useCurrentLocationWeather").mockImplementation(() => [
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
    it("should not render loading", () => {
      render(<WeatherCard />);
      expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    });

    it("render weather spec detail", () => {
      render(<WeatherCard />);
      expect(screen.getByTestId("weather-icon")).toBeInTheDocument();
    });
  });
});
