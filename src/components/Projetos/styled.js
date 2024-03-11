import styled from 'styled-components';

export const LeftContainer = styled.div`
    flex:1;
    height: 340px;
    background: ${(props) => (props.urlImage ? `url(${props.urlImage})` : 'blue')};
    background-size: cover;
    background-repeat: space;
    background-position: right;
    box-shadow: 0px 0px 15px #1E1E20 inset, 5px 5px 10px #000000;
    border-radius: 7px;
`

export const RightContainer = styled.div`
    flex:1;
    padding: 20px;
    text-align: start;
    @media(max-width:767px){
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`

export const Descricao = styled.div`
    text-align: end;
    border-radius: 7px;
    margin: 10px 0;
    margin-left: -80px;
    padding: 20px;
    height: 80%;
    background-color: #131314;
    box-shadow: 0 0 100px black inset;
    color: #FFFFFF;
    @media(max-width:767px){
        width: 80%;
        height: 200px;
        background-color: #13131470;
    }
`