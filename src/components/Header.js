import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  padding: 15px 5px;
  margin: 10px 0;
  background: #F0F0F0;
`;

const H1 = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
`;

const Header = (props) => {
  return (
    <>
      <TitleWrapper>
        <H1>NASA Astronomy Picture of the Day: {props.date}</H1>
      </TitleWrapper>
    </>
  );
}

export default Header;