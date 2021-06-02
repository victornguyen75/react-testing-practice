import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom/extend-expect";

it("renders", () => {
  render(<Counter />);
  const linkElement = screen.getByText(/this is a counter/i);
  expect(linkElement).toBeInTheDocument();
});

// requires extend-expect
it("renders with test ID and extend-expect", () => {
  // const component = render(<Counter />);
  // const headerElement = component.getByTestId("header");
  const { getByTestId } = render(<Counter />);
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("This is a counter");
});
