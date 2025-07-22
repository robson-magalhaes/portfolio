import imgPerfil from '../../assets/image/eu.webp';
import * as C from './styled';

export const Perfil = () => {
    return (
        <C.HeaderPerfil>
            <C.BoxImg>
                <C.ImgPerfil src={imgPerfil} alt='Foto de perfil - Desenvolvedor Full Stack' loading='eager'/>
            </C.BoxImg>
            <C.PerfilApresentacao>
                <C.PerfilTitulo>
                    <h2>Desenvolvedor</h2>
                    <h1>Full Stack</h1>
                    <h5>Robson Oliveira Magalhães</h5>
                </C.PerfilTitulo>
                <C.PerfilDescricao>
                    Sou desenvolvedor especializado em criar sites e aplicativos personalizados, transformando ideias em soluções digitais eficazes. Com experiência abrangente em front-end e back-end, estou pronto para enfrentar desafios complexos, sempre com foco na experiência do usuário e na eficiência do projeto. Meu objetivo é entregar produtos de alta qualidade, ajustados às necessidades do cliente e com atenção aos mínimos detalhes.
                </C.PerfilDescricao>
            </C.PerfilApresentacao>
        </C.HeaderPerfil>
    )
}
export default Perfil;