import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import emptyHeartImg from "./images/emptyHeart.png";
import heartImg from "./images/heart.png";
import linkImg from "./images/link.png";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [images, setImages] = useState(
    () => JSON.parse(localStorage.getItem("images")) || []
  );
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [like, setLike] = useState(false);
  const [startDateStr, setStartDateStr] = useState("");
  const [endDateStr, setEndDateStr] = useState("");

  const API_KEY = "i8uDqqN63HLwdmDnCqAvNbbfmLEoYIGrKeaBtiBo";
  const getImagesDefault = async () => {
    await axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getImagesWithDate = async () => {
    await axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDateStr}&end_date=${endDateStr}`
      )
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));

    setStartDate("");
    setEndDate("");
    setStartDateStr("");
    setEndDateStr("");
  };

  localStorage.setItem("images", JSON.stringify(images));

  const linkHandler = (e) => {
    e.preventDefault();
    const copyText = e.target.getAttribute("value");
    // console.log(copyText);
    navigator.clipboard.writeText(copyText).then(function () {
      window.alert("copied the image url: " + copyText);
    });
  };

  const toggleLikeHandling = (e) => {
    const title = e.target.dataset.title;
    images.map((image) =>
      title === image.title ? (image.like = !image.like) : ""
    );
    setLike(!like);
    console.log(title + " " + like);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    const dateStr = moment(date).format().substring(0, 10);
    // const dateStr = makeDateFormat(date);   <== 이 부분을 바꾸니 바로 useState 적용됨.
    setStartDateStr(dateStr);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
    const dateStr = moment(date).format().substring(0, 10);
    setEndDateStr(dateStr);
  };

  const randomButtonHandler = () => {
    localStorage.clear();
    getImagesDefault();
  };

  const submitButtonHandler = (e) => {
    // e.preventDefault();
    console.log(startDateStr);
    console.log(endDateStr);
    getImagesWithDate();
  };

  useEffect(() => {
    if (images.length === 0) {
      getImagesDefault();
      // console.log(images);
    }
  }, []);

  const imageList = images.map((image) => (
    <div key={image.url} id="image-container">
      <div id="image">
        <img src={image.url} alt={image.title} />
      </div>
      <div id="image-content">
        <div>
          <div>
            <img
              data-title={image.title}
              src={image.like ? heartImg : emptyHeartImg}
              alt="heart"
              onClick={toggleLikeHandling}
            />
          </div>
          <div>
            <img
              src={linkImg}
              alt="link"
              value={image.hdurl}
              onClick={linkHandler}
            />
          </div>
        </div>
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
              // onChange={(date) => {
              //   setStartDate(date);
              // }}
              onChange={handleStartDate}
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
              onChange={handleEndDate}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
        <div id="button-container">
          <button onClick={submitButtonHandler}>submit</button>
          <button onClick={randomButtonHandler}>random</button>
        </div>
      </div>

      <div>{imageList}</div>
    </div>
  );
}

export default App;
