import { keyframes} from "styled-components";

export const frameRain = keyframes`
  from {
    transform: translateY(0px) translateX(${Math.random() * 100}px);
  }
  to {
    transform: translateY(${document.body.clientHeight}px) translateX(-1px);
  }
`
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