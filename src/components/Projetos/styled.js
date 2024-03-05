import styled from 'styled-components';
import aurora from '../../assets/image/aurora.jpg';

export const SessaoProjetos = styled.div`
   /* display: flex;
   width: 100%;
   height: 100%;
    background: url(${aurora}) center fixed;
    background-size: cover;
    background-position: center; */
`

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
`