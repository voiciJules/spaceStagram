import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <>
      <div>
        <h3>spaceStagram</h3>
        <span>Brought to you by NASA's Astronomy Photo of the Day</span>
      </div>
      <div>
        <label htmlFor="start-date">start date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <br />
        <label htmlFor="end-date">end date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            console.log(date);
            setEndDate(date);
          }}
        />
      </div>
      <div>Show section</div>;
    </>
  );
}

export default App;
