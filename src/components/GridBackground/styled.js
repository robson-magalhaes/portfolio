import styled, { keyframes } from "styled-components";
import "./style.css";

const gridMove = keyframes`
    0% { transform: translate(0, 0); }
    25% { transform: translate(50px, 50px); }
    50% { transform: translate(30px, 30px); }
    75% { transform: translate(50px, 50px); }
    100% { transform: translate(0,0); }
`;

export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  background-image: linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${gridMove} 20s linear infinite;
  z-index: 0;
`;
export const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none;
  z-index: 99;
`;
