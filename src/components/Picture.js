import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HR = styled.hr`
  width: 30%;
  border-style: solid;
`;

const H2 = styled.h2`
  font-size: 40px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`;

const NasaImage = styled.img`
  display: block;
  width: 70%;
  margin: 20px auto;
  border-radius: 3px;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 20px;
  margin: 20px 0;

`;

const P = styled.p`
font-size: 20px;
font-family: 'Open Sans', sans-serif;
`;

const Picture = (props) => {
  const { title, url, explanation } = props;

  return (
    <>
      <FlexContainer>
        <HR/><H2>{title}</H2><HR/>
      </FlexContainer>
      
      <NasaImage src={url} alt="" />
      <ContentContainer>
        <P>{explanation}</P>
      </ContentContainer>
    </>
  );
}

export default Picture;