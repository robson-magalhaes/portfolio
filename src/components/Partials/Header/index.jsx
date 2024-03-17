import imgPerfil from '../../../assets/image/eu.png';
import NavMenu from '../../NavMenu';
import TxtAnimado from '../../TxtAnimado';
import * as C from './styled';

const Header = () => {
    return(
        <C.AreaHeader id="home">
        <NavMenu/>
        <C.HeaderPerfil>
          <C.BoxImg>
            <C.ImgPerfil src={imgPerfil} />
          </C.BoxImg>
          <C.PerfilApresentacao>
            <C.PerfilTitulo>
              <div> Desenvolvedor</div>Full Stack
              <div>Robson Oliveira Magalhães</div>
            </C.PerfilTitulo>
            <C.PerfilDescricao>
              <p>
                Se você procura um desenvolvedor de Software, dedicado e entusiasmado, para se juntar à sua equipe, estou disponível para discutir como posso contribuir para seus projetos e objetivos de negócios. Estou animado para decolar com minha carreira e crescer como profissional, enquanto ajuda a sua empresa.
              </p>
            </C.PerfilDescricao>
            <TxtAnimado/>
          </C.PerfilApresentacao>
        </C.HeaderPerfil>
      </C.AreaHeader >
    )
}
export default Header;