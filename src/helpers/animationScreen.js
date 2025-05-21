import { keyframes } from "styled-components";
import bgXP from '../assets/image/projeto/bg-exp.webp';

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
      background: linear-gradient(27deg, black 0%, #111111 50%, #333333 100%);
      background-size: cover;
      background-position:center;
   }
   to {
     transform: rotateY(45deg);
     background-image: url(${bgXP});
     backface-visibility: hidden;
   }
`

export const menufechado = keyframes`
  from {
  }
  to {
    transform:translateY(-250px) translateX(-150px) scale(0.2);
  }
`;
export const menuAberto = keyframes`
  from {
    transform:translateY(-250px) translateX(-150px) scale(0.2);
  }
  to {
    transform:translateY(0px) translateX(0px) scale(1);
  }
`;