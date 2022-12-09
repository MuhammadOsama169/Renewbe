import styled from 'styled-components';
import Img1 from '../../assets/images/Logo.png';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: auto;
  background: #fefbf6;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5%;
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 700px) {
    max-width: 200px;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${Img1});
  background-size: contain;
  width: 300px;
  height: 100px;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    margin-top: 50px;
  }
`;

export const VisibleContainer = styled.div`
  display: flex;
  margin-left: 400px;
  @media screen and (max-width: 900px) {
    margin-top: 20px;
    margin-left: 0px;
  }
`;
