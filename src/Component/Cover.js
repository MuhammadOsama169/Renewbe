import React from 'react';
import {
  MainContainer,
  Text,
  ImageContainer,
  TopContainer,
  LogoSeperated,
  LogoName,
  LogoContainer,
} from './Styles/Cover.styled';

export const Cover = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <TopContainer>
          <LogoContainer></LogoContainer>
          <LogoSeperated></LogoSeperated>
          <LogoName></LogoName>
          {/* <HeaderText>RENEWBE</HeaderText> */}
          <Text>Your Renewable journey Starts Here</Text>
        </TopContainer>
      </ImageContainer>
    </MainContainer>
  );
};
