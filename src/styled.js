import styled from 'styled-components';
import aurora from './assets/image/aurora.webp';
import * as keyframes from './helpers/animationScreen';

export const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: 100%;
    background: linear-gradient(17deg , #000000 80%, #32333f 100%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;

    & .sessaoBottomFromTop{
        animation: ${keyframes.screenToBottom} 2s forwards;
    }
    & .sessaoTransition{
        animation: ${keyframes.screenToCenter} 1s forwards;
    }
    & .abrirLivroXP{
        animation: ${keyframes.abrirLivro} 2s forwards;
    }
    
    @media (max-width:667px){
        padding: 0;
        margin: 0;
        gap:100px 0;
    }
`;



export const Titulo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'subTxt'
})`
    text-align: center;
    font-size: ${(props) => (props.tmFonte ? props.tmFonte : 2.3)}rem;
    color: transparent;
    background: linear-gradient(27deg, var(--cor-terceira) 0%, var(--cor-primeira) 65%, #FFFFFF 100%);
    background-clip: text;
    -webkit-background-clip:text;
    -ms-background-clip:text;
    margin: 20px 0;
    width: auto;
    z-index: 1;

    &::after{
        display: flex;
        justify-content: end;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 7px;
        content: '${({ subTxt }) => (subTxt ? subTxt : '')}';
        
    }
`;
export const InfoTitulo = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
    color: #FFFFFF;
`

export const SessaoHabilidades = styled.section`
    width: 100%;
    height: auto;
    padding: 0 0 100px 0 !important;
    margin: 0;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const InfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
    font-size: 2rem;
    color:#FFFFFF;
    width: 100%;
    height: 70vh;
    z-index: 1;
    background-color: #000;
    position: relative;
    padding: 100px 0;
    @media (max-width:670px){
        height: 100vh;
    }
`;

export const VideoArea = styled.video.withConfig({
  shouldForwardProp: (prop) => prop !== 'altura'
})`
    display: flex;
    position: absolute;
    width:100%;
    height:100%;
    top: 0;
    object-fit: 100% 100%;
    object-position: center;

    @media (max-width:670px){
        object-position: -350px 50px;
        min-height: 700px !important;
        min-height: 1200px !important;
        margin-top: -100px;
        object-fit: cover;
    }
`;
export const Corpo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const HabilitTech = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 80px;
    height: auto;
    margin: auto;
    perspective: 700px;
    padding-bottom: 30px;
    @media (max-width:670px){
    gap: 20px 40px;
        grid-template-columns: repeat(3, 100px);
    }
`;
export const FlipCard = styled.div`
    transform-style: preserve-3d;
    transition: all ease-in-out 0.5s;
    transform-origin: center;
`

export const ItemTech = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'flipped'
})`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    transition: all ease-in-out 1s;

    & p{
        width: auto;
        height: auto;
        position: absolute;
        border-radius: 7px;
        font-size: 1.1rem;
        font-weight: bold;
        opacity: 0;
        transition: all ease 1s;
        padding: 7px 20px;
        margin-top:10px;
        text-shadow: 1px 2px 5px black;
    }

    ${(props) => (props.flipped ? `
        transition: all ease-in-out 1s;
        transform: rotateY(180deg);
        p{
            backdrop-filter: blur(10px);
            transform: rotateY(180deg);
            opacity: 1;
        }
    ` : '')}
`;
export const ImgItemTech = styled.img`
    width: 60px;
    height: 60px;
    max-width: 60px;
    max-height: 60px;
`;

export const InfoTech = styled.section`
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: auto;
    gap: 30px;
    /* mix-blend-mode: screen; */


    & div{
        justify-content: center;
    }
    & div:last-child{
        padding: 40px 20px;
        margin-bottom: 40px;
    }
`
export const ItemT = styled.h6`
    padding: 5px 10px;
    height: auto;
    width: auto;
    border: solid 1px #FFFFFF50;
    border-radius: 50px;
    -webkit-border: solid 1px #FFFFFF50;
    -webkit-border-radius: 50px;
    color: #FFFFFF;
    font-size: 0.9rem;
    @media (max-width: 750px){
        font-size: 0.7rem;
    }
`

export const SessaoExperiencia = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 100px;
    background: linear-gradient(27deg , #000000 0%, #111111 60%, #32333f 100%);
    box-shadow: 100px 0px 100px 100px black inset;
    
    overflow-y: hidden;
    height: 150vh;
    padding-bottom: 150px;
    
    @media (max-width: 1200px){
       padding-left: 0 !important;
       padding-right: 20px;
    }
    @media (max-width: 800px){
        padding: 0 !important;
        background: linear-gradient(27deg , #000000 0%, #32333f 60%);
    }
`

export const ContainerExperiencia = styled.div`
    display: flex;
    margin-top: 50px;
    perspective: 2000px;
    @media (max-width: 750px){
        height: 700px;
        flex-direction:column;
    }
`

export const LeftExperiencia = styled.div`
    flex: 1;
    height: auto;
    overflow: hidden;
    z-index: 3;
    box-shadow: 20px 0px 50px 20px black inset, -5px 0px 1px 1px #787878;
    border-radius: 7px;
    position: relative;
    transform-style: preserve-3d;
    transform-origin: right;
    transform: rotateY(145deg);
    transition: all ease-in-out 1s;
    background: linear-gradient(27deg, black 0%, #111111 50%, #333333 100%);
    background-size: cover;
    background-position:center;
    
    filter: drop-shadow(10px 15px 10px #000000);
    display: flex;
    justify-content: center;
    align-items: center;

    .visivel{
        opacity: 1;
    }
    .escondido{
        opacity: 0;
    }

    & img{
        opacity: 0.5;
        transition: all ease-in-out 900ms;
        max-height: 550px;
        height: 100%;
        flex:1;
        box-shadow: -2px 0px 0px 2px #777 inset;
    }

    @media (max-width: 780px){
        padding: 0;
        display: none;
    }
`

export const BoxRight = styled.div`
    display: flex;
    margin: 30px 10px;
    padding: 10px;
    border: solid 1px transparent;
    border-radius: 10px;
    transition: all ease 0.4s;
    background-color: #080808;
    box-shadow: 4px 7px 10px #000000, 1px 2px 5px #C5C5C550 inset;
    transition: all ease-in-out 0.5s;
`

export const RightExperiencia = styled.div`
    flex:1 270px;
    height:850px;
    overflow-y: scroll;

    &::-webkit-scrollbar { 
        display: none;
    }
    transition: all ease-in-out 1s;
    box-shadow: 50px 0px 55px #000000 inset, 10px 10px 10px #000000;
    border-radius: 0px 10px 10px 0px;
    
    background-color: #1f1f1f;
    @media (max-width: 750px){
        margin: 20px 0;
    }
    & div:first-child{
        opacity: 1;
    }
`

export const ExpData = styled.p`
    font-size: 1rem;
    padding: 10px;
    text-align: center;
    display: block;
    flex-wrap: nowrap;
    word-wrap: break-word;
    height: 100%;
    flex: 1;
`

export const ExpDescricao = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'expandido'
})`
    border-left: solid 1px white;
    padding: 10px 15px;
    flex: 3;
    & p {
        color: #AAAAAA;
        margin: 0;
        max-height: ${({ expandido }) => (expandido ? '1000px' : '80px')};
        overflow: hidden;
        text-overflow:ellipsis;
        transition: ease-in-out 0.7s;
    }
    & .dropdown{
        cursor: pointer;
        width: 100%;
        transition: all ease 1s;

        & img{
            transform: rotateX(${({ expandido }) => (expandido ? '180deg' : '0deg')});
            width: 50px;
            height: 50px;
            margin: auto;
            &:hover{
                scale: 1.2;
                filter: drop-shadow(0 0 2px #FFFFFF);
            }
        }
    }
    & h2 {
        color: #FFFFFF;
    }
`

export const ExpSkill = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export const SessaoProjetos = styled.section`
    padding: 70px 0;
    height: auto !important;
    box-shadow: 0px 100px 70px 120px black inset;
    background: url(${aurora});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 100%;
    background-attachment: fixed;
    -webkit-background-attachment: fixed;
    -webkit-background-size: cover;
    /* mix-blend-mode: screen; */
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    &::-webkit-background-attachment{
        background-attachment: fixed;
    }
`


export const FooterContainer = styled.footer`
    padding: 20px 100px;
    background: linear-gradient(17deg, #3088cf 0, #32333f 100%);
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    & h4{
        font-size: 1.3rem;
        text-align: start;
        width: 100%;
        padding-bottom: 10px;
    }
`

export const Contato = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    .btnMail{
        width: 100%;
        height: 100%;
        border: 1px solid white;
        padding: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: 2px 2px 3px 1px #000;
        transition: all ease-in-out 0.2s;
        &:hover{
            padding: 12px;
            box-shadow: 2px 2px 10px 3px #000;
        }
    }
    & p, a {
        font-size: 1rem;
        color: #FFFFFF;
        text-decoration: none;
    }
    & i{
        margin-right: 20px;
    }
    
    &::after{
        content: "";
        background-color: white;
        height: 1px;
        width: 100%;
        margin-bottom: 10px;
    }
`
export const RedeSociais = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: start;
    gap:20px;
    height: auto;
`
export const ImgIcon = styled.img`
    width: 30px;
    height: 30px;
    transition: all ease-in-out 0.2s;
    &:hover{
        scale: 1.2;
    }
`