import styled from 'styled-components';
import ImgCover from '../../assets/images/girl-using-laptop.png';
import DecorImage from '../../assets/images/decoration.png';

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
  max-width: 1088px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3%;

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
  flex-direction: row;
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
  @media screen and (max-width: 569px) {
    padding-top: 20px;
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${ImgCover});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
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
export const FloatingObject = styled.div`
  margin-top: 50px;
  margin-left: 300px;
  background-image: url(${DecorImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 150px;
  @media screen and (max-width: 1472px) {
    display: none;
  }
`;
