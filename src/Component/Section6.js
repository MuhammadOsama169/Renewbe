import { React, useState } from 'react';
import {
  MainContainer,
  InnerContainer,
  ImageContainerSDG7,
  ImageContainerSDG9,
  ImageContainerSDG11,
  ImageContainerSDG13,
  Container,
  Text,
  HiddenContainerSDG7,
  HiddenContainerSDG11,
  HiddenContainerSDG9,
  HiddenContainerSDG13,
} from './Styles/Section6.styled';

export const Section6 = () => {
  const [isShownSDG7, setIsShownSDG7] = useState(false);
  const [isShownSDG9, setIsShownSDG9] = useState(false);
  const [isShownSDG11, setIsShownSDG11] = useState(false);
  const [isShownSDG13, setIsShownSDG13] = useState(false);

  const handleSDG7 = (event) => {
    setIsShownSDG7((current) => !current);
  };
  const handleSDG9 = (event) => {
    setIsShownSDG9((current) => !current);
  };
  const handleSDG11 = (event) => {
    setIsShownSDG11((current) => !current);
  };
  const handleSDG13 = (event) => {
    setIsShownSDG13((current) => !current);
  };

  return (
    <MainContainer>
      <InnerContainer>
        <Container>
          <ImageContainerSDG7
            onMouseEnter={handleSDG7}
            onMouseLeave={handleSDG7}
          ></ImageContainerSDG7>
          <ImageContainerSDG9
            onMouseEnter={handleSDG9}
            onMouseLeave={handleSDG9}
          ></ImageContainerSDG9>
          <ImageContainerSDG11
            onMouseEnter={handleSDG11}
            onMouseLeave={handleSDG11}
          ></ImageContainerSDG11>
          <ImageContainerSDG13
            onMouseEnter={handleSDG13}
            onMouseLeave={handleSDG13}
          ></ImageContainerSDG13>
        </Container>
        {isShownSDG7 && (
          <HiddenContainerSDG7>
            {' '}
            <Text>
              Ensure access to affordable, reliable, sustainable and modern
              energy for all
            </Text>
          </HiddenContainerSDG7>
        )}
        {isShownSDG9 && (
          <HiddenContainerSDG9>
            {' '}
            <Text>
              Build resilient infrastructure, promote inclusive and sustainable
              industrialization and foster innovation​
            </Text>
          </HiddenContainerSDG9>
        )}
        {isShownSDG11 && (
          <HiddenContainerSDG11>
            {' '}
            <Text>
              Make cities and human settlements inclusive, safe, resilient and
              sustainable
            </Text>
          </HiddenContainerSDG11>
        )}
        {isShownSDG13 && (
          <HiddenContainerSDG13>
            {' '}
            <Text>
              Take urgent action to combat climate change and its impacts
            </Text>
          </HiddenContainerSDG13>
        )}

        <Text>
          We aim to meet Austria's and the EU's ambitious climate goals, which
          means investing in clean energies​.Our mission is aligned with the
          SDGs: ensuring access to affordable, green electricity will help
          provide a better future for the planet​
        </Text>
      </InnerContainer>
    </MainContainer>
  );
};
