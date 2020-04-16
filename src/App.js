import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import Picture from './components/Picture';
import ChangePicture from './components/ChangePicture';
import formatDate from './formatDate';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;

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
    <Container>
      <Header date={date} />
      <Picture 
        title={data.title}
        url={data.hdurl}
        explanation={data.explanation}
      />
      <ChangePicture date={date} setDate={setDate} />
    </Container>
  );
}

export default App;
