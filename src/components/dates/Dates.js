import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Dates = ({ startDate, getStartDate, endDate, getEndDate }) => {
  return (
    <div>
      <label htmlFor="start-date">start date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => getStartDate(date)}
      />
      <br />
      <label htmlFor="end-date">end date</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          console.log(date);
          getEndDate(date);
        }}
      />
    </div>
  );
};
