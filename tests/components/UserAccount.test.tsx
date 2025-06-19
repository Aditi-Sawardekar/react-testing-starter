import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

// Test Suite
describe("UserAccount", () => {
  /* You can do this by passing the prop to the Component or create an user object separately as done below 
  it("Should render the name of the user", () => {
    render(<UserAccount user={{ id: 1, name: "Adi" }} />);
    //screen.debug();

    const userName = screen.getByText("Adi");
    expect(userName).toBeInTheDocument();
  });
  */

  it("Should render the name of the user", () => {
    // Select the User from entities module
    const user: User = { id: 1, name: "Adi" };
    render(<UserAccount user={user} />);
    //screen.debug();

    /* 
    We are making only one assertion so we can pass it directly to expect()
    expect(screen.getByText("Adi")).toBeInTheDocument();
    */
    const userName = screen.getByText("Adi");
    expect(userName).toBeInTheDocument();
  });

  it("Should render Edit button if the user is admin", () => {
    const user: User = { id: 1, name: "Adi", isAdmin: true };
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("Should not render Edit button if the user is not admin", () => {
    const user: User = { id: 1, name: "Adi", isAdmin: false };
    render(<UserAccount user={user} />);

    // when your button is conditionally rendered and might not be present at all
    // const button = screen.getByRole("button"); // ❌ will throw if button is NOT found
    // getByRole method will throw an error, if the element you are looking dosent exist in the DOM

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
