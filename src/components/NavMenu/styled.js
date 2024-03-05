import styled from 'styled-components';
import * as keyframes from './../../helpers/animationScreen';


export const NavContainer = styled.div`
    background-color: transparent;
    height:70px;
    display:flex;
`
export const NavMenuContainer = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width:100%;
    padding:10px;
    z-index: 2;
    left: 50%;
    transform: translate(-50%);
    isolation: isolate;
    overflow: hidden;

    &::before{
        position: absolute;
        content: "";
        width: 100px;
        height: 1px;
        top: 80px;
        background: linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,.1) 50%,rgba(255,255,255,0) 100%);
        transition: opacity .45s cubic-bezier(.6,.6,0,1);
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
    height: 45px;
    width: auto;
    padding: 5px 10px;
    //border-radius: 100px;
    //border-radius: 0px 100px;
    border-radius: 0px 100px;
    border: 1px solid rgba(226,232,255,.1);
    border-left: solid 3px #2D81C580;
    border-bottom: solid 1px #2D81C580;
    box-shadow: 0 0 10px 1px #000000 inset;
`

export const NavLink = styled.li`
    color:white;
    & a{
        display: flex;
        align-items: center;
        justify-content: center;
        color:#3E71C1;
        padding: 4px 20px;
        border-radius: 100px;
        transition: all ease-in-out 0.3s;
    }
    & a:hover{
        transform: scale(1.2);
        color: #FFFFFF;
    }
`
export const IconSocial = styled.div`
    animation: ${keyframes.screenToLeft} 2s;
    position: absolute;
    align-items: center;
    right:150px;
    top:10px;
    margin: 0 20px;
    display:flex;
    gap:10px;
    width:auto;
    z-index: 2;
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
export const Button = styled.button`
    position: absolute;
    top:50px;
    translate: -30px;
    height: 45px;
    width: 150px;
    padding: 5px 10px;
    border-radius: 0;
    border-bottom: solid 2px #3E71C1;
    border-right: solid 2px #3E71C1;
    transition: all ease 0.5s;
    color: #3E71C1;

    &:hover{
        color: #FFFFFF;
        opacity: 0.8;
        transform: scale(1.2);
        box-shadow: 2px 2px #3E71C1, 10px 10px #1E1E20;
    }
`