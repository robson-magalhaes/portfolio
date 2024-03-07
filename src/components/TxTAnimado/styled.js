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
    content: "";
  }

  16%,
  56% {
    content: ' me chamo Robson Oliveira Magalhães.';
  }

  57%,
  100% {
    content: " sou Desenvolvedor de Sistemas"
  }
`;

export const BoxDigitando = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: start;
  justify-content: start;
  margin: 50px 0 70px 0;
  padding-left: 20%;
  flex-wrap: wrap;
  white-space: break-spaces;

  & span:first-child {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2.0rem;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(to bottom, #3088cf 40%, purple 85%, #FFFFFF 90%);
    background-clip: text;
    align-self: start;
    margin-top: -7px;
  }
  
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

export const TxtDigitando = styled.span`
  align-self: flex-start;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  font-weight: normal;
  position: relative;
  color: #3088cf;
  height: auto;


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
