import styled from 'styled-components';

export const Eyesfollowtired = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;

  background: linear-gradient(45deg, #FF2CAA 0%, #ffff01 100%);
  border: .2em solid #4a2701;
  border-radius: 50%;
  box-shadow: -25px 0 rgba(0,0,0,0.1);
  margin: auto;
}
`;

export const Mouth = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Eyelid = styled.div``;
export const Eyes = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
