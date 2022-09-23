import React from "react";
import './YearSelection.css'

export default function YearSelection({queryYear, setQueryYear}) {
  let date = new Date();
  return (
    <div id="year-input">
      <label htmlFor="year-input">Select year</label>
      <input
        type="date"
        data-testid="year-select"
        defaultValue={queryYear}
        min={Number(2021)}
        value={queryYear}
        max={Number(date.getFullYear())}
        onChange={(e) => setQueryYear(e.target.value)}
      ></input>
    </div>
  );
}