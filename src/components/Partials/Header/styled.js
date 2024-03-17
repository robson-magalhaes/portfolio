import styled from 'styled-components';
import * as keyframes from '../../../helpers/animationScreen';

export const AreaHeader = styled.header`
    padding: 50px 100px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    @media (max-width: 1180px){
        padding: 0;
        padding-top: 20px ;
        padding-bottom: 80px;
        margin: 0;
    }
`;

export const HeaderPerfil = styled.div`
    display: flex;
    padding: 10px 20px;
`;

export const PerfilApresentacao = styled.div`
    padding: 20px;
    margin-top: 70px;
    @media (max-width: 768px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        gap: 40px 0;
    }
`;

export const PerfilDescricao = styled.div`
    animation: ${keyframes.screenToTop} 2s;
    font-size: 1rem;
    color: #FFFFFF;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    
    & p{
        align-self: center;
        width: 82%;
    }
`
export const PerfilTitulo = styled.div`
    translate: 0px;
    height: auto;
    font-size: 6rem;
    font-weight: bold;
    line-height: 60px;
    letter-spacing: normal;
    color: transparent;
    background: linear-gradient(27deg, #3088cf 10%, purple 45%, white 60%);
    background-clip: text;
    -webkit-background-clip:text;
    -ms-background-clip:text;
    & div:first-child{
        margin-left: 10px;
        font-size: 3rem;
    }
    & div:last-child{
        text-align: center;
        margin-top: 10px;
        font-size: 1.7rem;
        font-weight: normal;
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
    filter: drop-shadow(-10px 0 15px #000000);
`;

