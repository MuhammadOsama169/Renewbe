import styled from 'styled-components';
import MascotImg from '../../assets/images/mascot.png';

export const Eyesfollowtired = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${MascotImg});
  background-size: cover;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  display: flex;
}
`;
export const Mascot = styled.div`
  background-image: url(${MascotImg});
  background-size: cover;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  display: flex;

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
    background-size: fit;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Eyes = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  top: 120px;
`;
export const Eye = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  background-color: #f3efef;
`;
export const Pupil = styled.div`
  position: absolute;
  background-color: #382e25;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  left: 25px;
  top: 17.5px;
`;
