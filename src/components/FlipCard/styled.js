import styled from 'styled-components';

export const FlipContainer = styled.div`
    perspective: 1000px;
    flex:1;
    height: auto;
`;

export const FlipCard = styled.div`
    height: 350px;
    flex: 1;
    border: solid 1px #FFFFFF50;
    border-bottom: solid 3px blue;
    border-right: solid 4px blue;
    color: #3E71C1;
    transform-style: preserve-3d;
    transition: all ease-in-out 0.5s;
    transform-origin: center;
    
    &:hover {
        transform: rotateY(180deg);
        border-right: none;
        border-left: solid 4px blue;
    }
`;

export const FlipCardFace = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    will-change: transform;
`;

export const FrontFace = styled(FlipCardFace)`
    transform: rotateY(0deg);
`;

export const BackFace = styled(FlipCardFace)`
     transform: rotateY(180deg);
`;

export const BoxCard = styled.div`
    height: 100%;
    padding: 5px;
    color:white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`