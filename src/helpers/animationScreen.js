import { keyframes } from "styled-components";
import bgXP from '../assets/image/projeto/bg-exp.jpg';

export const screenToRight = keyframes`
  from {
    translate: -1000px;
  }
  to {
    translate: 0px;
  }
`;
export const screenToLeft = keyframes`
  from {
    translate: 1000px;
  }
  to {
    translate: 0px;
  }
`;
export const screenToTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const screenToBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const screenToCenter = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const abrirLivro = keyframes`
  from {
    transform: rotateY(145deg);
    transform-origin: right;
    transform-style: preserve-3d;
    transition: all ease-in-out 1s;
    position: relative;
  }
  to{
    transform: rotateY(45deg);
    background-image: url(${bgXP});
    background-size: cover;
    background-position:center;
    backface-visibility: hidden;
    transition: all ease-in-out 1s;
  }
        
`

export const menufechado = keyframes`
  from {
  }
  to {
    transform:translateY(-70px) translateX(-100px) scale(0.2);
  }
`;
export const menuAberto = keyframes`
  from {
    transform:translateY(-70px) translateX(-100px) scale(0.2);
  }
  to {
    transform:translateY(0px) translateX(0px) scale(1);
  }
`;