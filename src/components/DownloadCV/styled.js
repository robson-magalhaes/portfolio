import styled from 'styled-components';

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
    box-shadow: -2px -2px 5px #00000050 inset, 2px 2px 3px 0px #000000;
    transition: all ease-in-out 0.4s;

    &:hover{
        color: #FFFFFF;
        transform: translateX(-7px) translateY(-7px) scale(1.1);
        box-shadow: -2px -2px 5px #0000ff80 inset, 1px 1px 1px #0090ff, 2px 2px 5px #0000ff, 2px 2px #3E71C1, 10px 10px #1E1E20;
        transition: all ease-in-out 0.4s;
    }
`

export const Carregando = styled.div`
    height: 100%;
    width: 100%;
    background: #00000095;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
`;