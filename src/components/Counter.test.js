import { render, screen, fireEvent } from "@testing-library/react";
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

it("checks for the counter to start at 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

it("renders the add button", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-button");

  expect(addButton.textContent).toBe("+");
});

it("renders the subtract button", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-button");

  expect(subtractButton.textContent).toBe("-");
});

it("changes the input value", () => {
  const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "125",
    },
  });

  expect(inputElement.value).toBe("125");
});

it("adds to the counter", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-button");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("1");
});

it("subtracts from the counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-button");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-1");
});
