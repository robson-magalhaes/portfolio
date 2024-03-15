import styled from 'styled-components';
import * as keyframes from './../../helpers/animationScreen';

export const BtnMenu = styled.div`
    display: none;
    position: fixed;
    top: 30px;
    left: 30px;
    height: 55px;
    max-width: 50px;
    width: 18%;
    z-index: 99;
    cursor: pointer;
    @media (max-width:780px){
        display: block;
    }
`

export const NavSessao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height:auto;
    margin: 15px 0;

    @media (max-width:780px){
        justify-content: end;
    }
    
`
export const NavMenuContainer = styled.div`
    position: fixed;
    z-index: 2;
    @media (max-width:780px){
        top: 0;
        left: 0;
        width: 100%;
    }
`

export const NavBar = styled.ul`
    animation: ${keyframes.screenToRight} 2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    background: #00000080;
    backdrop-filter: blur(5px);
    height: auto;
    width: auto;
    padding: 5px 10px;
    border-radius: 0px 100px;
    border: 1px solid rgba(226,232,255,.1);
    border-left: solid 3px #2D81C580;
    border-bottom: solid 1px #2D81C580;
    box-shadow: 0 0 10px 1px #000000 inset;

    @media (max-width:780px){
        position: inherit;
        transition: all ease-in-out 0.4s;
        animation: ${(props)=>(props.visivel ? keyframes.menuAberto : keyframes.menufechado )} 0.4s;
        opacity: ${(props)=>(props.visivel ? '1' : '0')};
        display: ${(props)=>(props.visivel ? 'inhreit' : 'none')};
        flex-direction: column;
        width:100%;
        margin-top: 5px;
        & a{
            width: 100%;
            padding: 5px 10px;
            font-size: 2rem;
            color: white;
        }
        & a:active{
            color: #646CFF;
        }
    }
`

export const NavLink = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    color:#3E71C1;
    & a{
        padding: 4px 20px;
        transition: all ease-in-out 0.3s;
    }
    & a:hover{
        transform: scale(1.2);
        color: #FFFFFF;
    }
`
export const BoxSegundo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    right: 40px;
    top: 20px;
    gap: 20px;
`

export const IconSocial = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    gap:10px;
    width: 100%;
    height: auto;

    @media (max-width:670px) {
    }
`

export const ImgSocial = styled.img`
    width:23px;
    transform: scale(1);
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.5) !important;
    }
`
export const BotaoCurriculo = styled.button`
    height: 45px;
    width: 150px;
    padding: 5px 10px;
    border-radius: 0;
    border-bottom: solid 2px #3E71C1;
    border-right: solid 2px #3E71C1;
    -webkit-border-radius: 0;
    -webkit-border-bottom: solid 2px #3E71C1;
    -webkit-border-right: solid 2px #3E71C1;
    background-color: #1D1E20;
    transition: all ease 0.5s;
    color: #3E71C1;




background: linear-gradient(to left, #000000 0%, #333333 35%, #222222 65%, #000000 100%);
  color: white;
  text-shadow: 0px 0px 2px black;
  border: none;
  box-shadow: -2px -2px 5px #0000ff80 inset, 1px 1px 1px #0090ff, 2px 2px 5px #0000ff;


    &:hover{
        color: #FFFFFF;
        opacity: 0.8;
        transform: scale(1.2);
        box-shadow: 2px 2px #3E71C1, 10px 10px #1E1E20;
    }
`
export const Carregando = styled.div`
    height: 100%;
    width: 100%;
    background: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;