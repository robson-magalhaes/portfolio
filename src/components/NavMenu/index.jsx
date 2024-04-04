import iconWhats from '../../assets/image/icons/whatsapp.webp';
import iconGitHub from '../../assets/image/icons/github.webp';
import iconLinkedin from '../../assets/image/icons/linkedin.webp';
import iconMenu from '../../assets/image/icons/barra-de-menu.webp';
import iconX from '../../assets/image/icons/x.webp';

import { HashLink as Link } from 'react-router-hash-link';
import * as C from './styled';
import { useState } from 'react';
import meuCurriculo from '../../data/curriculo.pdf';

const NavMenu = () => {
  const [loading, setLoading] = useState(false);
  const [estaVisivel, setVisivel] = useState(false);
  
  function handleClickDownload() {
    setLoading(true);
    var link = document.createElement('a');
    link.href = meuCurriculo;
    link.download = "Curriculo Dev Software - ROBSON.pdf";
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
      setLoading(false);
    }, 1000);
  }
  return (
    <>
      <C.NavSessao>
        <C.BtnMenu onClick={() => setVisivel(!estaVisivel)} src={!estaVisivel ? iconMenu : iconX} alt='botao menu'/>
        <C.NavMenuContainer>
          <C.NavBar id="navBar" visivel={estaVisivel}>
            <C.NavLink>
              <Link
                to="/#home"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{ textDecoration: 'none' }}>
                Sobre
              </Link>
            </C.NavLink>
            <C.NavLink>
              <Link
                to="/#sessaoHab"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{ textDecoration: 'none' }}>
                Skills
              </Link>
            </C.NavLink>
            <C.NavLink>
              <Link
                to="/#expProfissional"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{ textDecoration: 'none' }}>
                XP
              </Link>
            </C.NavLink>
            <C.NavLink>
              <Link
                to="/#expProjetos"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{ textDecoration: 'none' }}>
                Projetos
              </Link>
            </C.NavLink>
            <C.NavLink>
              <Link
                to="/#contato"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{ textDecoration: 'none' }}>
                Contato
              </Link>
            </C.NavLink>
          </C.NavBar>
        </C.NavMenuContainer>
        <C.BoxSegundo>
          <C.IconSocial>
            <Link to='https://api.whatsapp.com/send?phone=5528999961628' target="_blank">
              <C.ImgSocial src={iconWhats} alt='WhatsApp'/>
            </Link>
            <Link to='https://github.com/robson-magalhaes' target="_blank">
              <C.ImgSocial src={iconGitHub} alt='GitHub'/>
            </Link>
            <Link to='https://www.linkedin.com/in/robson-o-magalhaes/' target="_blank">
              <C.ImgSocial src={iconLinkedin} alt='Linkedin'/>
            </Link>
          </C.IconSocial>
          <C.BotaoCurriculo onClick={handleClickDownload}>
            Download CV
          </C.BotaoCurriculo>
        </C.BoxSegundo>
      </C.NavSessao>
      {loading && 
        <>
          <C.Carregando>
            <div className='p-8 rounded-full border-8 border-l-blue-700 animate-spin'></div>
          </C.Carregando>
        </>
      }
    </>
  );
}
export default NavMenu;