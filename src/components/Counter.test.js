import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

it("renders", () => {
  const linkElement = screen.getByText(/this is a counter/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders with test ID and extend-expect", () => {
  // const component = render(<Counter />);
  // const headerElement = component.getByTestId("header");
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("This is a counter");
});

it("checks for the counter to start at 0", () => {
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

it("renders the add button", () => {
  const addButton = getByTestId("add-button");

  expect(addButton.textContent).toBe("+");
});

it("renders the subtract button", () => {
  const subtractButton = getByTestId("subtract-button");

  expect(subtractButton.textContent).toBe("-");
});

it("changes the input value", () => {
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
  const addButton = getByTestId("add-button");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("1");
});

it("subtracts from the counter", () => {
  const subtractButton = getByTestId("subtract-button");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-1");
});

it("changes the input value and adds to the counter", () => {
  const addButton = getByTestId("add-button");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "625",
    },
  });
  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("625");
  expect(inputElement.value).toBe("625");
});

it("changes the input value and subtracts from the counter", () => {
  const subtractButton = getByTestId("subtract-button");
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "1337",
    },
  });
  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-1337");
  expect(inputElement.value).toBe("1337");
});

it("changes the input value, adds to the counter, and then subtracts from the counter", () => {
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const addButton = getByTestId("add-button");
  const subtractButton = getByTestId("subtract-button");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("20");
  expect(inputElement.value).toBe("10");

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("30");
  expect(inputElement.value).toBe("5");
});

it("checks the colors (via className) of the counter value", () => {
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const addButton = getByTestId("add-button");
  const subtractButton = getByTestId("subtract-button");

  expect(counterElement.className).toBe("");

  fireEvent.change(inputElement, {
    target: {
      value: 50,
    },
  });
  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("50");
  expect(counterElement.className).toBe("");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("100");
  expect(counterElement.className).toBe("green");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("150");
  expect(counterElement.className).toBe("green");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("200");
  expect(counterElement.className).toBe("green");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("150");
  expect(counterElement.className).toBe("green");

  fireEvent.change(inputElement, {
    target: {
      value: 150,
    },
  });

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("0");
  expect(counterElement.className).toBe("");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-150");
  expect(counterElement.className).toBe("red");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-300");
  expect(counterElement.className).toBe("red");
});
