//Lezione 21/02

import React, { useState, useRef } from "react";

export function TestRef({ initialData }) {
  const [model, setModel] = useState((initialData = "Opel Run"));
  const [year, setYear] = useState((initialData = "1999"));
  const [color, setColor] = useState((initialData = "Grey"));

  const inputRef = useRef(null);
  const formRef = useRef(null);

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleFormChange(event) {
    initialData = "";
  }

  return (
    <div>
      <h3> My Car Search Engine</h3>

      <form ref={formRef} onChange={handleFormChange}>
        <label htmlFor="model">Model:</label>
        <input
          name="model"
          value={model}
          onChange={handleModelChange}
          autoFocus
          ref={inputRef}
        />
        <label htmlFor="model">Year:</label>
        <input
          name="year"
          value={year}
          onChange={handleYearChange}
          ref={inputRef}
        />
        <label htmlFor="model">Color:</label>
        <input
          name="color"
          value={color}
          onChange={handleColorChange}
          ref={inputRef}
        />

        <button type="submit">Search</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
