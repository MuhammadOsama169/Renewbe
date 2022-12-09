import styled from 'styled-components';
import Img2 from '../../assets/images/logo-european-forum-alpbach.png';
import Img3 from '../../assets/images/erste-bank-logo.png';
import Img4 from '../../assets/images/logo-forum-alpbah-network.png';

export const StyledSocialIcons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;
export const SponserLogo1 = styled.div`
  background-image: url(${Img2});
  background-size: contain;
  width: 150px;
  height: 100px;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    width: 150px;
    height: 100px;
  }
`;
export const SponserLogo2 = styled.div`
  background-image: url(${Img3});
  background-size: contain;
  width: 200px;
  height: 150px;
  margin-bottom: 50px;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    width: 200px;
    height: 150px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 530px) {
    margin-bottom: 0px;
  }
`;
export const SponserLogo3 = styled.div`
  background-image: url(${Img4});
  background-size: contain;
  width: 150px;
  height: 100px;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    width: 150px;
    height: 100px;
  }
`;
