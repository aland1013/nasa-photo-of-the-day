import React, { useState, useEffect } from 'react';
import formatDate from '../formatDate';

const ChangePicture = (props) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [newDate, setNewDate] = useState('');
  
  const years = [2020, 2019, 2018, 2017, 2016];
  const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let days = [];
  for (let i = 31; i > 0; i--) {
    days.push(i);
  }

  const handleClick = () => {
    props.setDate([year, month.length > 1 ? month : '0' + month, day.length > 1 ? day : '0' + day].join('-'));
  }


  return (
    <>
      <div className="ui medium form">
        <div className="inline fields">
          <label>Try a different date: </label>
          <div className="field">
            <select className="ui dropdown" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Year</option>
                {
                  years.map(year => <option value={year.toString()}>{year}</option>)
                }
            </select>
          </div>
          <div className="field">
            <select className="ui dropdown" value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Month</option>
              {
                  months.map(month => <option value={month.toString()}>{month}</option>)
                }
            </select>
          </div>
          <div className="field">
            <select className="ui dropdown" value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="">Day</option>
              {
                  days.map(day => <option value={day.toString()}>{day}</option>)
                }
            </select>
          </div>
          <div className="field">
            <button onClick={handleClick} className="ui button blue">submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePicture;