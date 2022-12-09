import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/LogoFavicon.png';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '50%' : '100px')};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1086px) {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  height: 100px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  @media all and (max-width: 1086px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const Logo = styled(Link)`
  background-image: url(${LogoImg});
  background-size: 100%;
  width: 80px;
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  @media all and (min-width: 1086px) {
    max-width: auto;
    margin-left: 0px;
  }
`;

export const Button = styled.a`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b33030;
  border-radius: 63px;
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
  }
`;
