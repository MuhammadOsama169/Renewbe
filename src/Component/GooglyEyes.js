import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';
import {
  Container,
  Eyelid,
  Eyes,
  Pupil,
  Eyesfollowtired,
  Eye,
} from './Styles/GooglyEyes.styled';

export const GooglyEyes = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

  const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
  const rotateRightEye = `rotate(${-angleRightEye}deg)`;

  return (
    <Eyesfollowtired>
      <Container>
        <Eyes>
          <Eye id="left-eye" style={{ transform: rotateLeftEye }}>
            <Pupil />
          </Eye>
          <Eye id="right-eye" style={{ transform: rotateRightEye }}>
            <Pupil />
          </Eye>
        </Eyes>
      </Container>
    </Eyesfollowtired>
  );
};
