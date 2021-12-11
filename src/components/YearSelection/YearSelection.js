import React from "react";
import './YearSelection.css'

export default function YearSelection(props) {
  let date = new Date();
  return (
    <div id="year-input">
      <label for="year-input">Select year</label>
      <input
        type="number"
        data-testid="year-select"
        defaultValue={Number(date.getFullYear())}
        min={Number(2021)}
        
        max={Number(2022)}
        onChange={(e) => props.setQueryYear(e.target.value)}
      ></input>
    </div>
  );
}
{/*max={Number(date.getFullYear())}*/}