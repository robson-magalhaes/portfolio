import imgPerfil from '../../assets/image/eu.webp';
import * as C from './styled';

export const Perfil = () => {
    return (
        <>
            <C.HeaderPerfil>
                <C.BoxImg>
                    <C.ImgPerfil src={imgPerfil} alt='Foto de perfil - Robson Oliveira Magalhães' />
                </C.BoxImg>
                <C.PerfilApresentacao>
                    <C.PerfilTitulo>
                        <h2>Desenvolvedor</h2>
                        <h1>Full Stack</h1>
                        <h5>Robson Oliveira Magalhães</h5>
                    </C.PerfilTitulo>
                    <C.PerfilDescricao>
                        Sou um desenvolvedor dedicado em transformar ideias em realidade digital. Com habilidades sólidas em front-end e back-end, estou pronto para enfrentar qualquer desafio. Com um olhar atento aos detalhes e uma abordagem centrada no usuário, estou comprometido em entregar soluções de alta qualidade que atendam às necessidades do cliente.
                    </C.PerfilDescricao>
                </C.PerfilApresentacao>
            </C.HeaderPerfil>
        </>
    )
}
export default Perfil;