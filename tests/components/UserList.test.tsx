import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("Should not render any users when the array is empty", () => {
    render(<UserList users={[]} />);
    screen.debug();

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("Should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Jack" },
      { id: 2, name: "Jill" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
