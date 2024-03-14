import iconWhats from '../../assets/image/icons/whatsapp.png';
import iconGitHub from '../../assets/image/icons/github.png';
import iconLinkedin from '../../assets/image/icons/linkedin.png';
import iconMenu from '../../assets/image/icons/barra-de-menu.png';
import { HashLink as Link } from 'react-router-hash-link';
import * as C from './styled';
import { useState } from 'react';

export const NavMenu = () => {
  const [estaVisivel, setVisivel] = useState(false);
  function handleClickDownload(){
    const url = "src/data/curriculo.pdf";
    var download = document.createElement('a');
    download.href = url;
    download.setAttribute('download', 'Curriculo Dev Software - ROBSON.pdf');
    download.click();
  }
  return (
    <>
      <C.NavSessao>
        <C.BtnMenu onClick={()=>setVisivel(!estaVisivel)}>
          <img src={iconMenu} alt="" />
          </C.BtnMenu>
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
              <C.ImgSocial src={iconWhats} />
            </Link>
            <Link to='https://github.com/robson-magalhaes' target="_blank">
              <C.ImgSocial src={iconGitHub} />
            </Link>
            <Link to='https://www.linkedin.com/in/robson-o-magalhaes/' target="_blank">
              <C.ImgSocial src={iconLinkedin} />
            </Link>
          </C.IconSocial>
          <C.BotaoCurriculo onClick={handleClickDownload}>
            Download CV
            {/* <Link to={"src/data/curriculo.pdf"}> Download CV</Link> */}
          {/* <a href="src/data/curriculo.pdf" download="Curriculo Dev Software - ROBSON.pdf">Download</a> */}
            </C.BotaoCurriculo>
        </C.BoxSegundo>
      </C.NavSessao>
    </>
  );
}