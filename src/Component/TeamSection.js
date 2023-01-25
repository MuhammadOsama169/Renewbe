import React from 'react';
import {
  MainContainer,
  InnerContainer,
  ImageMarina,
  ImagMuhammad,
  ImageJuxhina,
  ImageEveline,
  ImageIvan,
  Container,
  Container2,
  ContainerRow,
  Text,
} from './Styles/TeamSection.styled';

export const TeamSection = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <ContainerRow>
            <ImageMarina
              target="_blank"
              href="https://www.linkedin.com/in/marinasolvanni/"
            ></ImageMarina>
            <Text>Editor-in-Chief & Communications </Text>
          </ContainerRow>
          <ContainerRow>
            <ImagMuhammad
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-osama-688123162/"
            ></ImagMuhammad>
            <Text>Developer, UI/UX design</Text>
          </ContainerRow>
          <ContainerRow>
            <ImageJuxhina
              target="_blank"
              href="https://www.linkedin.com/in/juxhinamalaj/"
            ></ImageJuxhina>
            <Text>Marketing & PR </Text>
          </ContainerRow>
        </Container>

        <Container2>
          <ContainerRow>
            <ImageEveline
              target="_blank"
              href="https://www.linkedin.com/in/evelinebeer/"
            ></ImageEveline>
            <Text>Sales & Business Development, Partnerships</Text>
          </ContainerRow>
          <ContainerRow>
            <ImageIvan
              target="_blank"
              href="https://www.linkedin.com/in/ivanknechtl/"
            ></ImageIvan>
            <Text>Sustainability & Business Development</Text>
          </ContainerRow>
        </Container2>
      </InnerContainer>
    </MainContainer>
  );
};
