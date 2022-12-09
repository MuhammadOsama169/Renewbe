import React from 'react';
import {
  ImageContainer,
  InnerContainer,
  MainContainer,
  CoverText,
} from './Styles/Section1.styled';

export const Section1 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <CoverText>
          Your all-in-one renewable toolkit, Enabling you to fight against
          climate change
        </CoverText>
        <ImageContainer></ImageContainer>
      </InnerContainer>
    </MainContainer>
  );
};
