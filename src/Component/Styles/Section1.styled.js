import styled from 'styled-components';
import ImgCover from '../../assets/images/loading.gif';

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
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export const CoverText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: regular;
  font-weight: 700;
  color: white;
  font-size: 28px;
  line-height: 1.5em;
  text-align: center;
  padding-top: 40px;
  padding: 20px;

  @media screen and (max-width: 569px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${ImgCover});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1000px;
  height: 500px;

  @media screen and (max-width: 900px) {
    width: 500px;
    height: 350px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 200px;
  }
`;
