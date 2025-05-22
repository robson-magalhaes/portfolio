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
    overflow: hidden;
  }
`;

const cursorAnimation = keyframes`
  from {
    border-left: 3px solid rgba(0, 0, 255, 0);
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
    content: " sou Desenvolvedor de Sistemas."
  }
`;

export const BoxDigitando = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 50px 0 50px 20%;
  flex-wrap: wrap;
  background-color: #000000;
  /* mix-blend-mode: screen; */
  
  & div {
    height: auto;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2.5rem;
    font-weight: bold;
    font-style: oblique;
    color: transparent;
    background: linear-gradient(to right bottom, #3088cf 10%, purple 45%);
    background-clip: text;
    -webkit-background-clip:text;
    -ms-background-clip:text;
    text-align: start;
    align-self: start;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 50px 0 50px 20px;
    margin: 0;
  }
`;

export const TxtDigitando = styled.span`
  align-self: flex-start;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  letter-spacing: -1px;
  font-weight: normal;
  font-style: oblique;
  position: relative;
  color: #3088cf;
  height: auto;
  white-space: nowrap;


  &::before {
    content: "";
    animation: ${palavrasAnimation} 15s infinite;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    border-left: 2px solid white;
    right: -10px;
    animation: ${cursorAnimation} .8s infinite, ${digitandoAnimation} 15s steps(30) infinite;
    width: 100%;
    background-color: #000000;
    &::-webkit-backdrop-filter{
            backdrop-filter: blur(100px);
        }
  }
`;
