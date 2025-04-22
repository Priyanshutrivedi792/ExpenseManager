import React from 'react';
import styled, { keyframes } from 'styled-components'; // Import styled-components
import { userWindowSize } from '../../Utils/useFullScreen';

const moveOrb = keyframes`
0%{
transform: translate(0,0);
}
50%{
transform: translate(var(--width), var(--height));
}
100%{
transform: translate(0,0);
}`;

const OrbStyled = styled.div`
width: 70vh;
height: 70vh;
position: absolute;
border-radius: 50%;
margin-left: -37vh;
margin-top: -37vh;
background: linear-gradient(180deg, #8BC6EC 0%, #9599E2 100%);
filter: blur(400px);
animation:${moveOrb} 5s alternate linear infinite;
`;

export const Orb = () => {
  const { width, height } = userWindowSize(); // Call the hook here

  // Set CSS variables for animation
  const orbStyle = {
    '--width': `${width}px`,
    '--height': `${height}px`,
  };

  return (
    <OrbStyled style={orbStyle}></OrbStyled>
  );
}