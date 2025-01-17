import styled from 'styled-components';

export const LeftContainer = styled.a`
    flex:1;
    width: 100%;
    height: auto;
    background: ${(props) => (props.urlimage ? `url(${props.urlimage})` : 'blue')};
    background-size: 100% 100%;
    background-repeat: space;
    background-position: center;
    box-shadow: 0px 0px 15px #1E1E20 inset, 5px 5px 10px #000000;
    border-radius: 7px;
`

export const RightContainer = styled.div`
    flex:1;
    padding: 10px 20px;
    text-align: start;
    height: 500px;
    max-height: 360px;
    
    @media(max-width:1067px){
        max-height: 260px;
    }
    @media(max-width:767px){
        max-height: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: end;
        height: 100%;
    }
`

export const Descricao = styled.div`
    text-align: start;
    border-radius: 7px;
    margin: 10px 0;
    margin-left: -80px;
    padding: 7px 10px 13px 15px;
    padding-bottom: 13px;
    height: 80%;
    max-height: 500px;
    background-color: #131314;
    box-shadow: 0 0 100px black inset;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    overflow-y:scroll;

    &::-webkit-scrollbar{
        overflow-y: hidden;
    }
    & p {
        height: 100%;
    }
    
    @media(max-width:767px){
        width: 90%;
        height: 300px;
        max-height: 250px;
        overflow-y: scroll;
        background-color: #13131470;
    }
`

export const LinkIcons = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    gap: 0 30px;
    & a{
        height: auto;
        width: auto;
    }
    & a:hover{
            div{
                opacity: 1;
            }
        }
    
    @media(max-width:767px){
        position: absolute;
        display: flex;
        justify-content: end;
        flex-direction:column;
        height: 100px;
        width: auto;
        left: 5px;
        bottom: 50px;
        gap: 10px;
        filter: drop-shadow(2px 2px 1px black);
        & a img{
            transform: none;
            opacity: 1;
            width: 40px;
        }
    }
`

export const IconProjeto = styled.img`
    float: right;
    height: 40px;
    width: 40px;
    max-height: 50px;
    max-width: 50px;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-370px);
    transition: all ease 0.7s;

    &:hover{
        transform: translateX(-367px) scale(1.2);
    }
    @media(max-width:767px){
        &:hover{
            transform: none;
        }
    }
`;

export const Balao = styled.div`
    position: absolute;
    z-index: 1;
    border: solid 1px #FFFFFF50;
    border-radius: 100px 100px 0px 100px;
    -webkit-border: solid 1px #FFFFFF50;
    -webkit-border-radius: 100px 100px 0px 100px;
    padding: 1px 10px;
    font-size: 1rem;
    transform: translateX(-55px) translateY(-25px);
    opacity: 0;
    background-color: white;
    color: black;
    @media(max-width:767px){
        display: none;
    }
`