import React, { useState } from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  width: 50%;
  margin: 0 auto 30px;
  font-family: 'Open Sans', sans-serif;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const Select = styled.select`
  font-size: 16px;
`;

const Button = styled.button`
  font-size: 16px;
  color: white;
  background: #007bff;
  margin: 0 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
`;

const ChangePicture = (props) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  
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
      <CenteredDiv>
        <Label>Try a different date: </Label>
        <Select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Year</option>
            {
              years.map(year => <option value={year.toString()}>{year}</option>)
            }
        </Select>
        <Label> - </Label>
        <Select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Month</option>
          {
            months.map(month => <option value={month.toString()}>{month}</option>)
          }
        </Select>
        <Label> - </Label>
        <Select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Day</option>
          {
            days.map(day => <option value={day.toString()}>{day}</option>)
          }
        </Select>
        <Button onClick={handleClick}>submit</Button>
      </CenteredDiv>
  );
}

export default ChangePicture;