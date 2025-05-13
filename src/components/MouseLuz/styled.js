import styled from 'styled-components';

export const Luz = styled.div`
    width: 1px;
    height: 1px;
    position: fixed;
    z-index: 999;
    border-radius: 100%;
    pointer-events: none;
    box-shadow:
    0 0 200px 100px rgba(255, 255, 255, 1),
    0 0 200px 50px rgba(255, 255, 255, 1);

    @media(max-width: 780px){
        display: none;
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: #000;
    mix-blend-mode: color-dodge;
    pointer-events: none;
`;
