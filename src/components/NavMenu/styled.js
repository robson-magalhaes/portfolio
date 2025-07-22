import styled from 'styled-components';
import * as keyframes from './../../helpers/animationScreen';

export const BtnMenu = styled.img`
    display: none;
    position: fixed;
    top: 30px;
    left: 30px;
    height: 50px;
    width: 50px;
    z-index: 99;
    filter: drop-shadow(1px 1px 2px #000000);
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
    padding-top: 25px;
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

export const NavBar = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== 'visivel'
})`
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
        border-radius: 0px;
        transition: all ease-in-out 0.4s;
        animation: ${(props)=>(props.visivel ? keyframes.menuAberto : keyframes.menufechado )} 0.4s;
        opacity: ${(props)=>(props.visivel ? '1' : '0')};
        display: ${(props)=>(props.visivel ? 'flex' : 'none')};
        background: #00000099;
        flex-direction: column;
        width:100%;
        margin-top: 5px;
        padding: 100px 0;
        gap: 30px;
        
        & a{
            text-align: center;
            border-width: 4px;
            border-image: linear-gradient(27deg, var(--cor-primeira) 30%, var(--cor-terceira) 65%, var(--cor-quarta) 72%);
            border-image-slice: 1;
            width: 300px !important;
            border-radius: 0;
            width: 100%;
            padding: 5px 10px;
            font-size: 2rem;
            color: #FFFFFF !important;
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
    
    & a{
        color: var(--cor-primeira);
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
    gap:10px;
`

export const ImgSocial = styled.img`
    width:23px;
    height: 23px;
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
    -webkit-border-radius: 3px;
    border: none;
    color:var(--cor-primeira);
    text-shadow: 1px 1px 5px #000000;
    background: linear-gradient(17deg , black 0%, #32333f 100%);
    box-shadow: 2px 2px 3px 0px #000000, 1px 1px 2px #00000050 inset;
    transition: all ease-in-out 0.4s;
    &:hover{
        color: #FFFFFF;
        transform: translateX(-7px) translateY(-7px) scale(1.2);
        box-shadow: -2px -2px 5px #0000ff80 inset, 1px 1px 1px #0090ff, 2px 2px 5px #0000ff, 2px 2px #3E71C1, 10px 10px #1E1E20;
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