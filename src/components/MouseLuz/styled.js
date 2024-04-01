import styled from 'styled-components';

export const Luz = styled.div`
    width: 200px;
    height: 200px;
    position: fixed;
    z-index: 1;
    background-color: #A5A5A510;
    border-radius: 100%;
    box-shadow: 0px 0px 200px 200px #A5A5A505, 0px 0px 200px 200px #A5A5A505;
    transition: none !important;
    @media(max-width: 780px){
        display: none;
    }
`