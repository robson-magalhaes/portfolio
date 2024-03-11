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
export const menufechar = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform:translateY(-70px) translateX(-100px) scale(0.2);
  }
`;
export const menuAbrir = keyframes`
  from {
    opacity: 0;
    transform:translateY(-70px) translateX(-100px) scale(0.2);
  }
  to {
    opacity: 1;
    transform:translateY(0px) translateX(0px) scale(1);
  }
`;