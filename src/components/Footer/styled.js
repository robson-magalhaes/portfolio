import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  background: linear-gradient(17deg, black 0%, #32333f 100%);
  box-shadow: -2px -2px 5px #00000050 inset, 2px 2px 3px 0px #000000;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  & h4 {
    font-size: 1.3rem;
    text-align: start;
    width: 100%;
    padding-bottom: 10px;
  }
`;

export const ContatoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  border-top: solid 2px white;
  padding: 20px;

  .btnMail {
    width: 100%;
    height: 100%;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 3px 1px #000;
    transition: all ease-in-out 0.2s;
    &:hover {
      padding: 12px;
      box-shadow: 2px 2px 10px 3px #000;
    }
  }
  & p,
  a {
    font-size: 1rem;
    color: #ffffff;
    text-decoration: none;
  }
  & i {
    margin-right: 20px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    & button{
      width: 100%;
      color: white;
    }
  }
`;
export const Contato = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-right: 20px;
  @media (max-width: 750px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;
export const RedeSociais = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  height: auto;
`;
export const ImgIcon = styled.img`
  width: 30px;
  height: 30px;
  transition: all ease-in-out 0.2s;
  &:hover {
    scale: 1.2;
  }
`;
