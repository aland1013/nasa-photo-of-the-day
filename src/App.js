import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import Picture from './components/Picture';
import ChangePicture from './components/ChangePicture';
import formatDate from './formatDate';

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(formatDate());

  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
      .then(response => {
        setData(response.data);
        setDate(response.data.date);
      });
  }, [date]);

  if (data === null) {
    return 'Loading...';
  }

  return (
    <div className="ui container">
      <Header date={date} />
      <Picture 
        title={data.title}
        url={data.hdurl}
        explanation={data.explanation}
      />
      <ChangePicture date={date} setDate={setDate} />
    </div>
  );
}

export default App;
