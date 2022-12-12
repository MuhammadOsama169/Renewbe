import styled from 'styled-components';
import marina from '../../assets/images/marina-photo.png';
import muhammad from '../../assets/images/muhammad-photo.png';
import juxhina from '../../assets/images/juxhina-photo.png';
import eveline from '../../assets/images/eveline-photo.png';
import ivan from '../../assets/images/ivan-photo.png';

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
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: auto;
  grid-gap: 80px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Container2 = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 80px;
  margin-top: 100px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;

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
  font-size: 25px;
  line-height: 1.5em;
  text-align: center;
  padding: 40px;
  word-break: break-word;
  @media screen and (max-width: 569px) {
    font-size: 18px;
    padding-top: 20px;
  }
`;

export const ImageMarina = styled.a`
  display: flex;
  background-image: url(${marina});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 300px;
  cursor: pointer;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.05);
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImagMuhammad = styled.a`
  display: flex;
  background-image: url(${muhammad});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 300px;
  cursor: pointer;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.05);
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImageJuxhina = styled.a`
  display: flex;
  background-image: url(${juxhina});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 300px;
  cursor: pointer;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.05);
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImageEveline = styled.a`
  display: flex;
  background-image: url(${eveline});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 300px;
  cursor: pointer;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.05);
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImageIvan = styled.a`
  display: flex;
  background-image: url(${ivan});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 300px;
  cursor: pointer;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.05);
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
