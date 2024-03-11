import { keyframes} from "styled-components";

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