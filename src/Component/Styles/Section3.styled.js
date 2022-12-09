import styled from 'styled-components';
import ImgCover from '../../assets/images/data-visualization.png';

export const MainContainer = styled.section`
  width: 100%;
  background-color: black;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const InnerContainer = styled.div`
  margin: auto;
  padding: 20px;
  max-width: 1088px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3%;
  padding-bottom: 5%;

  @media screen and (max-width: 900px) {
    padding-top: 0.1%;
    padding-bottom: 0.1%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: regular;
  font-weight: 700;
  color: white;
  font-size: 28px;
  line-height: 1.5em;
  text-align: center;
  padding: 40px;
  word-break: break-word;
  @media screen and (max-width: 569px) {
    font-size: 18px;
    padding-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  background-image: url(${ImgCover});
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
  width: 500px;
  height: 350px;

  @media screen and (max-width: 900px) {
    width: 500px;
    height: 350px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
`;
