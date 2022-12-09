import React from 'react';
import {
  MainContainer,
  InnerContainer,
  ImageContainer,
  Text,
  Container,
  FloatingObject,
} from './Styles/Section5.styled';

export const Section5 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <ImageContainer></ImageContainer>
          <Text>
            From how much electricity you can generate in your specific area to
            Submit your current Zählerstand , View and download invoices online.
            <FloatingObject></FloatingObject>
          </Text>
        </Container>
      </InnerContainer>
    </MainContainer>
  );
};
