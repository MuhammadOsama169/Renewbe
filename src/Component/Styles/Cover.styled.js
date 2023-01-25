import styled from 'styled-components';
import ImgCover from '../../assets/images/CoverImage.png';
import Logo from '../../assets/images/Logo.png';
import LogoSeperate from '../../assets/images/LogoFavicon.png';
import RENEWBE from '../../assets/images/LogoName.png';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
export const InnerContainer = styled.div`
  margin: auto;
  max-width: 1088px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export const TopContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.1em;
  color: #ffffff;
  padding-top: 20px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    font-size: 28px;
  }
  @media screen and (max-width: 490px) {
    font-size: 22px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${ImgCover});
  background-size: cover;
  background-position: 50% 90%;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  display: flex;

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
    background-size: fit;
  }
`;
export const LogoContainer = styled.div`
  background-image: url(${Logo});
  background-size: 100%;
  width: 600px;
  height: 100px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.3);
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    background-size: contain;
    display: flex;
    width: 500px;
    height: 100px;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
export const LogoSeperated = styled.div`
  background-image: url(${LogoSeperate});
  background-size: 100%;
  display: none;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 650px) {
    margin-top: 80px;
    background-size: contain;
    display: flex;
    width: 250px;
    height: 200px;
  }
`;
export const LogoName = styled.div`
  background-image: url(${RENEWBE});
  background-size: 100%;
  display: none;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 650px) {
    background-size: contain;
    display: flex;
    width: 300px;
    height: 50px;
  }
`;
export const Button = styled.a`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    hsla(280, 84%, 41%, 1) 0%,
    hsla(218, 97%, 56%, 1) 100%
  );
  margin-top: 15px;
  border-radius: 15px;
  font-family: 'Work Sans', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  color: #f2f2f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 10px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
