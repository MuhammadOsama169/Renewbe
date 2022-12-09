import React from 'react';
import {
  MainContainer,
  InnerContainer,
  ImageContainer,
  Text,
  Container,
} from './Styles/Section4.styled';

export const Section4 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <ImageContainer></ImageContainer>
          <Text>
            We work closely with local energy suppliers in Austria to provide
            you with special discounts, free tickets to conferences and much
            more!.
          </Text>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};
