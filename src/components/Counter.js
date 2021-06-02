import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  return (
    <>
      <h2 data-testid="header">This is a counter</h2>
      <h3 data-testid="counter">{counter}</h3>
      <button data-testid="subtract-button">-</button>
      <input
        data-testid="input"
        type="number"
        value={input}
        className="center-text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="add-button">+</button>
    </>
  );
}
