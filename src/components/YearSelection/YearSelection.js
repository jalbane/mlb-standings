import React from "react";
import './YearSelection.css'

export default function YearSelection({setQueryYear, queryYear}) {
  let date = new Date();
  return (
    <div id="year-input">
      <label htmlFor="year-input">Select year</label>
      <input
        type="number"
        data-testid="year-select"
        min={Number(2021)}
        value={queryYear}
        max={Number(date.getFullYear())}
        onChange={(e) => setQueryYear(e.target.value)}
      ></input>
    </div>
  );
}