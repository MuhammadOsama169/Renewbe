import React from 'react';
import {
  MainContainer,
  InnerContainer,
  ImageContainer,
  Text,
  Container,
} from './Styles/Section3.styled';

export const Section3 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <ImageContainer></ImageContainer>
          <Text>
            From how much electricity you can generate in your specific area to
            how much sunshine you receive in your area. We will guide you step
            by step to get started.
          </Text>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};
