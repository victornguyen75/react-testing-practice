import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

it("renders", () => {
  render(<Counter />);
  const linkElement = screen.getByText(/this is a counter/i);
  expect(linkElement).toBeInTheDocument();
});
