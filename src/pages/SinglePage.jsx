import React, { useEffect, useRef, useState } from 'react';
import * as C from './styled';
import { Link } from 'react-router-dom';

//Components
import Projetos from '../components/Projetos/Projetos';

//Imagens
import bgPlaneta from '../assets/video/planetaTerra.mp4';
import iconWhatss from '../assets/image/icons/whatsapp.png';
import iconLinkedin from '../assets/image/icons/linkedin.png';
import iconGithubs from '../assets/image/icons/github.png';
import iconDropdown from '../assets/image/icons/down.png';
import moldura from '../assets/image/moldura.png';

//Dados
import { Skills, allSkills } from '../data/Skills';
import { expProjetos } from '../data/ExpProfissional';
// import Header from '../components/partials/Header';


import TextoAnimado from '../components/TextoAnimado';
import NavMenu from '../components/NavMenu';
import imgPerfil from '../assets/image/eu.png';
import MouseLuz from '../components/MouseLuz';


export const SinglePage = () => {
  const [expandido, setExpandido] = useState(null);
  const [flip, setFlip] = useState(null);
  const [animacaofinal, setAnimacaofinal] = useState(false);
  const primeiroRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const item = document.querySelectorAll('.sessaoScroll');
      const divXP = document.querySelector('.viewXP');

      item.forEach((e, key) => {
        const rec = e.getBoundingClientRect();
        var totalDiv = window.innerHeight + 400;

        if (rec.top >= 0 && rec.bottom <= totalDiv) {
          if (key === 0 || key === 3) {
            e.classList.add('sessaoBottomFromTop');
          } else if (key === 1) {
            setTimeout(() => { e.classList.add('sessaoBottomFromTop'); }, 1000);
          } else if (key === 2) {
            e.classList.add('sessaoTransition');
            document.getElementById('screenAbrir').classList.add('abrirLivroXP');
            setAnimacaofinal(true);
          }
        } else {
          e.style.opacity = 0;
        }
      });

      const handleBoxXP = () => {
        const boxItems = document.querySelectorAll('.boxScroll');
        boxItems.forEach((e) => {
          const rec = e.getBoundingClientRect();
          var totalDiv = divXP.clientHeight + 300;

          if (rec.top >= 0 && rec.bottom <= totalDiv) {
            e.style.opacity = 1;
          } else {
            e.style.opacity = 0.2;
          }
        });
      };

      divXP.addEventListener('scroll', handleBoxXP);

      return () => {
        divXP.removeEventListener('scroll', handleBoxXP);
      };
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (primeiroRender.current) {
      primeiroRender.current = false;
      let alturaXP = document.getElementById('expProfissional');
      alturaXP.style.height = (alturaXP.clientHeight + 200) + 'px';
    }
  }, []);

  return (
    <C.Container>
      <MouseLuz/>
      <C.AreaHeader id="home">
        <NavMenu />
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
          </C.PerfilApresentacao>
        </C.HeaderPerfil>
      </C.AreaHeader >
            <TextoAnimado />
      <C.SessaoHabilidades id="sessaoHab">
        <C.VideoArea opacity={1} heigth={550}>
          <video autoPlay loop muted playsinline allow="autoplay">
            <source src={bgPlaneta} type='video/mp4' />
          </video>
        </C.VideoArea>
          <C.InfoArea>
            <C.Titulo subTxt={'Skills'}>Minhas Habilidades</C.Titulo>
            <C.Corpo>
              <C.HabilitTech className='sessaoScroll'>
                {
                  Skills.map((x, key) => (
                    <>
                      <C.FlipCard onMouseEnter={() => setFlip(key == flip ? null : key)}>
                        <C.ItemTech flipped={flip === key}>
                          <C.ImgItemTech id={'flip' + key} src={x.image} alt={x.nome} />
                          <p>{x.nome}</p>
                        </C.ItemTech>
                      </C.FlipCard>
                    </>
                  ))
                }
              </C.HabilitTech>
            </C.Corpo>
          </C.InfoArea>

        <C.InfoTech>
          <C.Titulo>Competências e Especialidades</C.Titulo>
          <C.ExpSkill className='sessaoScroll'>
            {
              allSkills.map(x => (
                <C.ItemT>{x}</C.ItemT>
              ))
            }
          </C.ExpSkill>
        </C.InfoTech>
      </C.SessaoHabilidades>

      <C.SessaoExperiencia id='expProfissional'>
        <C.Titulo subTxt={'XP'}>Experiência Profissional</C.Titulo>
        <C.ContainerExperiencia>
          <C.LeftExperiencia id="screenAbrir">
            <img src={moldura} alt="simbulo" className={animacaofinal ? 'escondido' : 'visivel'} />
          </C.LeftExperiencia>
          <C.RightExperiencia className='sessaoScroll viewXP' >
            {
              expProjetos.map((x, key) => (
                <C.BoxRight className='boxScroll'>
                  <C.ExpData>{x.data}</C.ExpData>
                  <C.ExpDescricao expandido={expandido === key}>
                    <C.InfoTitulo>{x.nome}</C.InfoTitulo>
                    <h2>{x.cargo}</h2>
                    <p>{x.descricao}</p>
                    <div onClick={() => setExpandido(key === expandido ? null : key)} className='dropdown'>
                      <img src={iconDropdown} alt="dropdown" />
                    </div>
                    <C.ExpSkill>
                      {x.skills.map(i => (
                        <C.ItemT>{i}</C.ItemT>
                      ))}
                    </C.ExpSkill>
                  </C.ExpDescricao>
                </C.BoxRight>
              ))
            }

          </C.RightExperiencia>
        </C.ContainerExperiencia>
      </C.SessaoExperiencia>

      <C.SessaoProjetos id="expProjetos" >
        <C.Titulo>Projetos</C.Titulo>
        <Projetos />
      </C.SessaoProjetos>

      <C.FooterContainer id="contato">
        <C.Contato>
          <p><i className="fa-solid fa-phone"></i> (28) 9 9996-1628</p>
          <p><i className="fa-regular fa-envelope"></i> dev.robsonom@hotmail.com</p>
          <C.RedeSociais>
            <Link to='https://api.whatsapp.com/send?phone=5528999961628' target="_blank">
              <C.ImgIcon src={iconWhatss} />
            </Link>
            <Link to='https://github.com/robson-magalhaes' target="_blank">
              <C.ImgIcon src={iconGithubs} />
            </Link>
            <Link to='https://www.linkedin.com/in/robson-o-magalhaes/' target="_blank">
              <C.ImgIcon src={iconLinkedin} />
            </Link>
          </C.RedeSociais>
        </C.Contato>
      </C.FooterContainer>
    </C.Container>
  );
};

export default SinglePage;
