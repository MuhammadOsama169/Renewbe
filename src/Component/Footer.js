import React from 'react';
import { SocialIcons } from './SocialIcons';
import { SponerIcons } from './SponserIcons';
import {
  Container,
  MainContainer,
  ImageContainer,
  VisibleContainer,
} from './Styles/Footer.styled';

export const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <ImageContainer></ImageContainer>
        <SocialIcons />
      </Container>
      <VisibleContainer>
        <SponerIcons />
      </VisibleContainer>
    </MainContainer>
  );
};
