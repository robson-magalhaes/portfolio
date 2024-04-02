import styled from 'styled-components';

export const Luz = styled.div`
    width: 200px;
    height: 200px;
    position: fixed;
    z-index: 1;
    background-color: #77777725;
    border-radius: 100%;
    box-shadow: 0px 0px 200px 300px #77777710, 0px 0px 200px 200px #77777710;
    transition: none !important;
    pointer-events: none;
    
    @media(max-width: 780px){
        display: none;
    }
`