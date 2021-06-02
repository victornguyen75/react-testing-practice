import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  const getColor = () => {
    if (counter >= 100) {
      return "green";
    } else if (counter <= -100) {
      return "red";
    } else {
      return;
    }
  };

  return (
    <>
      <h2 data-testid="header">This is a counter</h2>
      <h3 data-testid="counter" className={getColor()}>
        {counter}
      </h3>
      <button
        data-testid="subtract-button"
        onClick={() => setCounter(counter - input)}
      >
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={input}
        className="center-text"
        onChange={(e) => setInput(parseInt(e.target.value, 10))}
      />
      <button
        data-testid="add-button"
        onClick={() => setCounter(counter + input)}
      >
        +
      </button>
    </>
  );
}
