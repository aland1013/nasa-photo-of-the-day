import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header';
import Picture from './components/Picture';
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => setData(response.data));
  }, []);

  if (data === null) {
    return 'Loading...';
  }

  return (
    <div className="ui container">
      <Header date={data.date} />
      <Picture 
        title={data.title}
        url={data.hdurl}
        explanation={data.explanation}
      />
    </div>
  );
}

export default App;
