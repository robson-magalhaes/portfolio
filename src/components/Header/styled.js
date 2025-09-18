import styled from "styled-components";
import * as keyframes from "../../helpers/animationScreen";

export const SessionHeader = styled.header`
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  position: relative;
  
  @media (max-width: 768px) {
    height: auto;
    padding: 15px;
    padding-bottom: 50px;
  }
`;

export const AreaHeader = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 50px;
  padding-bottom: 150px;
`;

export const PerfilApresentacao = styled.div`
  flex: 0.75;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 130px;
    align-items: center;
    justify-content: start;
  }
`;

export const PerfilTitulo = styled.div`
  height: auto;
  width: 100%;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(
    27deg,
    var(--cor-primeira) 10%,
    var(--cor-terceira) 45%,
    var(--cor-quarta) 60%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -ms-background-clip: text;

  & h1 {
    font-size: 6rem;
    line-height: 60px;
  }

  & h2 {
    margin-left: 10px;
    font-size: 3rem;
  }
  & h5 {
    text-align: center;
    margin-top: 10px;
    font-size: 1.7rem;
    font-weight: normal;
  }
`;
export const PerfilDescricao = styled.p`
  animation: ${keyframes.screenToTop} 2s;
  font-size: 1.3rem;
  color: var(--cor-quarta);
  align-self: center;
  width: 100%;
  height: auto;
  text-align: end;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    text-align: start;
  }
`;

export const BoxImg = styled.div`
  margin-left: 50px;
  animation: ${keyframes.screenToRight} 2s;
  margin-top: 10px;
  background: linear-gradient(to top, #3088cf 0, transparent 90%);
  border-radius: 0px 273px;
  padding: 10px 10px 40px 40px;
  max-width: 500px !important;
  max-height: 500px;
  width: 100%;
  height: 100%;

  @media (max-width: 780px) {
    display: none;
    padding: 0;
    margin: 0;
  }
`;

export const ImgPerfil = styled.img`
  margin-left: 70px;
  animation: ${keyframes.screenToRight} 3s;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  filter: drop-shadow(-10px 0 15px #000000);
`;
