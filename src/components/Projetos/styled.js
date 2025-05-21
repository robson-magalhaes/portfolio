import styled from "styled-components";

export const LeftContainer = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== "urlimage",
})`
  flex: 1;
  width: 100%;
  height: auto;
  background: ${(props) =>
    props.urlimage ? `url(${props.urlimage})` : "blue"};
  background-size: contain;
  background-repeat: space;
  background-position: center;
  box-shadow: 0px 0px 15px #1e1e20 inset, 5px 5px 10px #000000;
  border-radius: 7px;
  backdrop-filter: blur(15px);
  z-index: -1;
  &::-webkit-backdrop-filter {
    backdrop-filter: blur(15px);
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  padding: 10px 20px;
  text-align: start;
  height: 500px;
  max-height: 360px;

  @media (max-width: 1067px) {
    max-height: 260px;
  }
  @media (max-width: 767px) {
    margin: 0;
    padding:0;
    max-height: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150%;
    width: 100%;
    
    & div{
        margin: 0;
        padding: 0;
    }
  }
`;

export const Descricao = styled.div`
  text-align: start;
  border-radius: 7px;
  margin: 10px 20px;
  margin-left: -80px;
  padding-bottom: 20px;
  height: 80%;
  max-height: 500px;
  background-color: #131314;
  box-shadow: 0 0 100px black inset;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    overflow-y: hidden;
  }
  & p {
    width: 100%;
    height: 100%;
    padding: 20px 0 20px 20px;
  }
  @media (max-width: 767px) {
    width: 90%;
    height: 300px;
    max-height: 250px;
    overflow-y: scroll;
    background-color: #13131470;
  }
`;

export const LinkIcons = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
  
  & a {
    height: 100%;
    width: 60px;
    display: flex;
    align-items: end;
  }
  & a:hover {
    div {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    position: absolute;
    display: flex;
    align-items: end;
    justify-content: end;
    flex-direction: row;
    height: 100px;
    right: 35px;
    bottom: 10px;
    width: 90px;
    
    & a img {
      transform: none;
      opacity: 1;
      width: 30px;
      height: auto;
      margin: 0;
    }
  }
`;

export const IconProjeto = styled.img`
  float: right;
  height: 40px;
  width: 40px;
  max-height: 50px;
  max-width: 50px;
  cursor: pointer;
  opacity: 0;
  transform: translateX(-370px);
  transition: all ease 0.7s;
  position: fixed;

  &:hover {
    transform: translateX(-367px) scale(1.2);
  }
  @media (max-width: 767px) {
    &:hover {
      transform: none;
    }
  }
`;

export const Balao = styled.div`
  position: absolute;
  z-index: 1;
  border: solid 1px #ffffff50;
  border-radius: 100px 100px 0px 100px;
  -webkit-border: solid 1px #ffffff50;
  -webkit-border-radius: 100px 100px 0px 100px;
  padding: 1px 10px;
  font-size: 1rem;
  transform: translateX(-55px) translateY(-25px);
  opacity: 0;
  background-color: white;
  color: black;
  position: fixed;
  @media (max-width: 767px) {
    display: none;
  }
`;
