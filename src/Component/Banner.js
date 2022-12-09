import React from 'react';
import {
  MainContainer,
  ImageContainer,
  RightContainer,
  BoxHeader,
  CoverText,
  Button,
  InnerContainer,
} from '../Component/Styles/Banner.styled';

export const Banner = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <ImageContainer></ImageContainer>
        <RightContainer>
          <BoxHeader>Check Out Our Prototype App</BoxHeader>
          <CoverText>
            We are Renewbe, a young, ambitious and international team. With our
            "renewable toolkit" app, we want to connect electricity customers
            and electricity suppliers in order to help shape the future of
            renewable energies and the achievement of climate goals.
          </CoverText>
          <Button href="https://www.figma.com/proto/E3m65zgQvW5qVN2c8RdyPK/Renewbe-%40-Muhammad-Osama?node-id=1301%3A290&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1301%3A290&show-proto-sidebar=1">
            Click Here
          </Button>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
};
