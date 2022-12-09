import styled from 'styled-components';
import SDG7 from '../../assets/images/sdg_icons_color_goal_7.png';
import SDG9 from '../../assets/images/sdg_icons_color_goal_9.png';
import SDG11 from '../../assets/images/sdg_icons_color_goal_11.png';
import SDG13 from '../../assets/images/sdg_icons_color_goal_13.png';

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
  grid-template-columns: 180px 180px 180px 180px;
  grid-gap: 50px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const HiddenContainerSDG7 = styled.div`
  background-color: #fcc30b;
  width: 70%;
  &:hover {
    transition: transform 2s;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const HiddenContainerSDG9 = styled.div`
  background-color: #fd6925;
  width: 70%;
  &:hover {
    transition: transform 2s;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const HiddenContainerSDG11 = styled.div`
  background-color: #fd9d24;
  width: 70%;
  &:hover {
    transition: transform 2s;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const HiddenContainerSDG13 = styled.div`
  background-color: #3f7e44;
  width: 70%;
  &:hover {
    transition: transform 2s;
  }
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

export const ImageContainerSDG7 = styled.div`
  display: flex;
  background-image: url(${SDG7});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 180px;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.2);
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImageContainerSDG9 = styled.div`
  display: flex;
  background-image: url(${SDG9});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 180px;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.2);
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImageContainerSDG11 = styled.div`
  display: flex;
  background-image: url(${SDG11});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 180px;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.2);
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
export const ImageContainerSDG13 = styled.div`
  display: flex;
  background-image: url(${SDG13});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 180px;
  &:hover {
    transition: transform 0.8s;
    transform: scale(1.2);
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 180px;
  }
`;
