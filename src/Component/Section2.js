import React from 'react';
import {
  MainContainer,
  InnerContainer,
  ImageContainer,
  Text,
  Container,
  FloatingObject,
} from './Styles/Section2.styled';

export const Section2 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <ImageContainer></ImageContainer>
          <Text>
            Our interactive quiz helps you find excatly what you need to get
            started.
            <FloatingObject></FloatingObject>
          </Text>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};
