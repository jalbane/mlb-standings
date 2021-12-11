import React from "react";

export default function YearSelection() {
  let date = new Date();
  return (
    <div>
      <label for="year-input">Select year</label>
      <input
        type="number"
        data-testid="year-select"
        defaultValue={Number(date.getFullYear())}
        min={Number(2021)}
        max={Number(date.getFullYear())}
      ></input>
    </div>
  );
}
