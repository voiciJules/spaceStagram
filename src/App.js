import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [images, setImages] = useState([]);

  const API_KEY = "i8uDqqN63HLwdmDnCqAvNbbfmLEoYIGrKeaBtiBo";
  const getImages = async () => {
    await axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`)
      .then((response) => setImages(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getImages();
    console.log(images);
  }, []);

  const imageList = images.map((image) => (
    <div id="image-container">
      <div id="image">
        <img src={image.url} alt={image.title} width="500" />
      </div>
      <div id="image-content">
        <div id="image-title">
          {image.title} - {image.date}
        </div>
        <div id="image-explanation">{image.explanation}</div>
      </div>
    </div>
  ));

  return (
    <div id="wrapper">
      <div id="title-container">
        <h3>spaceStagram</h3>
        <span>Brought to you by NASA's Astronomy Photo of the Day</span>
      </div>
      <div id="date-container">
        <div id="start-date-container">
          <label data-testid="start-date" htmlFor="start-date">
            start date
          </label>
          <div>
            <DatePicker
              data-testid="start-datepicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
        <div id="end-date-container">
          <label data-testid="end-date" htmlFor="end-date">
            end date
          </label>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
      </div>
      <div>{imageList}</div>
    </div>
  );
}

export default App;
