import React from 'react';
import {
  MainContainer,
  Text,
  ImageContainer,
  TopContainer,
  LogoSeperated,
  LogoName,
  LogoContainer,
  Button,
} from './Styles/Cover.styled';
import { GooglyEyes } from './GooglyEyes';

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
          <GooglyEyes />
          <Button
            target="_blank"
            href="https://www.figma.com/proto/E3m65zgQvW5qVN2c8RdyPK/Renewbe-%40-Muhammad-Osama?node-id=1301%3A290&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1301%3A290&show-proto-sidebar=1"
          >
            Check Out Our Prototype App
          </Button>
        </TopContainer>
      </ImageContainer>
    </MainContainer>
  );
};
