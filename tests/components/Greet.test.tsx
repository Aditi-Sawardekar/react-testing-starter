import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

// Test Suite
describe("Greet", () => {
  it("Should render Hello with the name when name is provided", () => {
    render(<Greet name={"Adi"} />);
    //screen.debug();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello /i);
  });

  it("Should render login button when the name is not provided", () => {
    render(<Greet />);
    //screen.debug();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
