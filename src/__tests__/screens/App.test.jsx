import { render, cleanup, screen } from "@testing-library/react";
import App from "App";

afterEach(cleanup);

describe("<App />", () => {
  it("should render a default App", () => {
    render(<App />);

    expect(screen.getByTestId("DEMO")).toHaveTextContent("reload");
  });
});
