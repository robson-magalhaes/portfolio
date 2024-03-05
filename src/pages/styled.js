import styled from 'styled-components';
import * as keyframes from '../helpers/animationScreen';
import aurora from '../assets/image/aurora.jpg';
import bgXP from '../assets/image/projeto/bg-exp.jpg';

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: linear-gradient(17deg , black 80%, #32333f 100%);
    width: 100%;
    overflow-x: hidden;
`;

export const AreaHeader = styled.div`
    padding: 20px 100px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    margin-bottom: 100px;
`;

export const HeaderPerfil = styled.div`
    display: flex;
    padding: 10px 20px;
`;

export const PerfilApresentacao = styled.div`
    margin: 20px;
`;
export const PerfilDescricao = styled.div`
    animation: ${keyframes.screenToTop} 2s;
    font-size: 1rem;
    color: #FFFFFF;
    width: 72%;
`
export const PerfilTitulo = styled.div`
    translate: 0px;
    & p{
        text-align: center;
        margin-top:10px;
        font-size: 30px;
        font-weight: normal;
    }
    height: 200px;
    font-size: 6rem;
    font-weight: bold;
    line-height: 60px;
    letter-spacing: normal;
    color: transparent;
    background: linear-gradient(27deg, #3088cf 10%, purple 45%, white 60%);
    background-clip: text;
`

export const BoxImg = styled.div`
    animation: ${keyframes.screenToRight} 2s;
    margin-top:10px;
    background: linear-gradient(to top, #3088cf 0, transparent 90%);
    border-radius:0px 273px;
    padding: 10px 10px 40px 40px;
    max-width: 400px;
    max-height: 400px;
    width: 100%;
    height: 100%;
`;

export const ImgPerfil = styled.img`
    animation: ${keyframes.screenToRight} 3s;
    border-radius:100%;
    width: 100%;
    height: 100%;
    filter: drop-shadow(-10px 0 15px #000000);
`;

export const Titulo = styled.p`
    text-align: center;
    font-size: ${(props) =>(props.tmFonte ? props.tmFonte : 2.3)}rem;
    color: transparent;
    background: linear-gradient(27deg, #3088cf 10%, purple 45%, white 60%);
    background-clip: text;
    margin: 20px 0;
`;
export const InfoTitulo = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
`
export const InfoSubTitulo = styled.p``

export const SessaoHabilidades = styled.section`
    height:auto;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
`;

export const VideoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-color: black;
    width: 100%;
    height: 100%;

    video {
    padding: 20px 0;
    opacity: ${(props) => (props.opacity = props.opacity)};
    width: 100%;
    height: 100%;
    max-height: ${(props) => (props.heigth = props.heigth)}px;
    object-fit: contain;
    object-position: top;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    z-index:1;
    height: auto;
    font-size: 2rem;
    color:white;
    gap: 40px;
    margin-top: -200px;
    width: 100%;
`;
export const Corpo = styled.div`
    height: auto;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    perspective: 700px;
`;

export const HabilitTech = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 50px 80px;
    height: auto;
    margin: auto;
    
    transform-style: preserve-3d;
    transition: all ease-in-out 0.5s;
    transform-origin: center;
`;

export const ItemTech = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    transition: all ease-in-out 1s;

    & p{
        position: absolute;
        border-radius: 7px;
        font-size: 1.1rem;
        font-weight: bold;
        opacity: 0;
        transition: all ease 1s;
        padding: 7px 20px;
        margin-top:-5px;
        text-shadow: 1px 2px 5px black;
    }
    &:hover{
        transform: rotateY(180deg);
        p{
            backdrop-filter: blur(10px);
            transform: translateY(15px) rotateY(180deg);
            opacity: 1;
        }
    }
`;
export const ImgItemTech = styled.img`
    align-self: center;
    border-radius: 7px;
    width: 100%;
    height: 100%;
    max-width: 60px;
    max-height: 60px;
`;

export const InfoTech = styled.div`
    margin: 30px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const ItemT = styled.div`
    padding: 5px 10px;
    height: auto;
    width: auto;
    border: solid 1px #FFFFFF50;
    border-radius: 50px;
`

export const SessaoExperiencia = styled.section`
    padding: 50px 100px;
    background: linear-gradient(27deg , #000000 0%, #111111 60%, #32333f 100%);
    box-shadow: 100px 0px 100px 100px black inset;
`

export const ContainerExperiencia = styled.div`
    display: flex;
    margin-top: 50px;
`

export const LeftExperiencia = styled.div`
    flex:1;
    height:auto;
    background-image: url(${bgXP});
    background-size: cover;
    background-position:center;
    box-shadow: 20px 0px 50px 30px black inset;
`

export const RightExperiencia = styled.div`
    flex:1 270px;
    height:620px;
    overflow-y: scroll;
    scrollbar-width: none;
    transition: all ease-in-out 1s;
    box-shadow: 0 -20px 30px 5px #22222290 inset;
    border-radius: 0px 10px 10px 0px;
`

export const BoxRight = styled.div`
    display: flex;
    margin: 30px 10px;
    padding: 10px;
    border: solid 1px transparent;
    border-radius: 10px;
    transition: all ease 0.4s;

    &:hover{
        & img{
            translate: 160px;
            opacity: 1;
        }
        background-color: #00000050;
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

export const ExpDescricao = styled.div`
    border-left : solid 1px white;
    padding: 10px 15px;
    flex: 3;
    p{
        color:#aaa;
    }
`

export const ExpSkill = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px;
    flex-wrap: wrap;
`;

export const IconGitHub = styled.img`
    float: right;
    width: 40px;
    height: 40px;
    margin: 15px;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-150px) translateY(-21px);
    transition: all ease 0.4s;

    &:hover{
        transform: translateX(-127px) translateY(-21px);
        scale: calc(1.2);
    }
`;

export const SessaoProjetos = styled.section`
    //background: linear-gradient(27deg , #000000 0%, #111111 60%, #32333f 100%);
    padding: 50px 100px;
    box-shadow: 0px 0px 70px 120px black inset;
    background: url(${aurora}) center fixed;
    background-size: cover;
    background-position: center;
`
export const ProjetoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    gap:0 50px;

    & a{
        width: 100%;
        padding:0;
        margin: 0;
    }
`;


export const FooterContainer = styled.footer`
    padding: 10px 100px;
    background: linear-gradient(17deg, #3088cf 0, #32333f 100%);
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
`

export const Contato = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    height: 50%;
    & p {
        font-size: 1rem;
    }
    & i{
        margin-right: 20px;
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
    height: auto;
`