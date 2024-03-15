import styled from 'styled-components';
import iconGithub from '../../assets/image/icons/githubXP.png';
import iconLink from '../../assets/image/icons/link.png';

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

    /* &:hover{
        & img{
            translate: 160px;
            opacity: 1;
        }
    } */
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
    display: flex;
    flex-direction: column;
    align-items: space-between;
    & p{
        height: 100%;
    }
    @media(max-width:767px){
        width: 80%;
        height: 200px;
        background-color: #13131470;
    }
`
export const LinkIcons = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    gap: 0 30px;
    & a:first-child{
        width: 30px;
    }
`

export const IconGitHub = styled.img`
    float: right;
    height: 50px;
    width: 50px;
    max-height: 50px;
    max-width: 50px;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-350px);
    transition: all ease 0.7s;
    &:hover{
        transition: 0.3s;
        transform: translateX(-347px) scale(1.2);
    }
`;