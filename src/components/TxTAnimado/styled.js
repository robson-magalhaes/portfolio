import styled, { keyframes } from 'styled-components';

const digitandoAnimation = keyframes`
  0%,
  5%,
  35%,
  45%,
  80%,
  85% {
    width: 0;
  }

  15%,
  55% {
    width: calc(100% + 10px);
  }
`;

const cursorAnimation = keyframes`
  from {
    border-left: 2px solid rgba(0, 0, 255, 0);
  }
`;

const palavrasAnimation = keyframes`
  0%,
  15% {
    content: "!!";
  }

  16%,
  56% {
    content: ', me chamo Robson Oliveira Magalhães.';
  }

  57%,
  100% {
    content: ", sou Desenvolvedor de Sistemas"
  }
`;

export const BoxDigitando = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  align-items: end;
  margin: 50px 0 70px 0;
  padding-left: 20%;
  flex-wrap: wrap;
  white-space: break-spaces;

  & div {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2.0rem;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(to bottom, #3088cf 40%, purple 85%, #FFFFFF 90%);
    background-clip: text;
    display: flex;
    align-items: start;
  }
  
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    margin-left: 20px;
    font-size: 14px;
  }
`;

export const TxtDigitando = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.5em;
  font-weight: normal;
  position: relative;
  color: #3088cf;
  margin-bottom: 4px;

  &::before {
    content: "";
    animation: ${palavrasAnimation} 15s infinite;
  }

  &::after {
    content: "";
    position: absolute;
    height: 35px;
    border-left: 2px solid blue;
    right: -10px;
    animation: ${cursorAnimation} .8s infinite, ${digitandoAnimation} 15s steps(30) infinite;
    width: calc(100%);
    backdrop-filter: blur(100px);
  }
`;
