import styled from 'styled-components';
import * as keyframes from '../../helpers/animationScreen';

export const HeaderPerfil = styled.div`
    display: flex;
    padding: 10px 20px;
`;

export const PerfilApresentacao = styled.div`
    padding: 20px;
    margin-top: 70px;
    width: 100%;
    height: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px 0;
    @media (max-width: 768px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 40px 0;
    }
`;

export const PerfilDescricao = styled.p`
    animation: ${keyframes.screenToTop} 2s;
    font-size: 1rem;
    color: var(--cor-quarta);
    align-self: center;
    width: 80%;
    height: 100%;
    font-display: swap;
`

export const PerfilTitulo = styled.div`
    font-display: swap;
    height: auto;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(27deg, var(--cor-primeira) 10%, var(--cor-terceira) 45%, var(--cor-quarta) 60%);
    background-clip: text;
    -webkit-background-clip:text;
    -ms-background-clip:text;
    
    & h1{
        font-size: 6rem;
        line-height: 60px;
    font-display: swap;
    }
    
    & h2{
        margin-left: 10px;
        font-size: 3rem;
    font-display: swap;
    }
    & h5{
        text-align: center;
        margin-top: 10px;
        font-size: 1.7rem;
        font-weight: normal;
    font-display: swap;
    }
`;

export const BoxImg = styled.div`
    animation: ${keyframes.screenToRight} 2s;
    margin-top:10px;
    background: linear-gradient(to top, #3088cf 0, transparent 90%);
    border-radius:0px 273px;
    padding: 10px 10px 40px 40px;
    max-width: 400px !important;
    max-height: 400px;
    width: 100%;
    height: 100%;

    @media (max-width:780px){
        display: none;
        padding: 0;
        margin: 0;
    }
`;

export const ImgPerfil = styled.img`
    animation: ${keyframes.screenToRight} 3s;
    border-radius:100%;
    width: 100%;
    height: 100%;
    max-height: 343px;
    max-width: 350px;
    filter: drop-shadow(-10px 0 15px #000000);
`;