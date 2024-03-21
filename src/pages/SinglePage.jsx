import React, { useEffect, useState } from 'react';
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

//Dados
import { Skills, allSkills } from '../data/Skills';
import { expProjetos } from '../data/ExpProfissional';
// import Header from '../components/partials/Header';


import TextoAnimado from '../components/TextoAnimado';
import NavMenu from '../components/NavMenu';
import imgPerfil from '../assets/image/eu.png';


export const SinglePage = () => {
  const [expandido, setExpandido] = useState(null);
  const [flip, setFlip] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const item = document.querySelectorAll('.sessaoScroll');
      for (let i = 0; i < item.length; i++) {
        const rec = item[i].getBoundingClientRect();
        var totalDiv = window.innerHeight + 200;
        if (rec.top >= 0 && rec.bottom <= totalDiv) {
          switch (i) {
            case 0:
            case 1:
            case 3:
              item[i].classList.add('sessaoBottomFromTop');
              break;
            case 2:
              item[i].classList.add('sessaoTransition');
              document.getElementById('screenAbrir').classList.add('abrirLivroXP');
              break;
            default:
              item[i].style.opacity = 0;
              break;

          }
        } else {
          item[i].style.opacity = 0;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const divXP = document.querySelector('.viewXP');
    const handleBoxXP = () => {
      const item = document.querySelectorAll('.boxScroll');
      item.forEach((e) => {
        const rec = e.getBoundingClientRect();
        var totalDiv = divXP.clientHeight + 300;
        if (rec.top >= 0 && rec.bottom <= totalDiv) {
          e.style.opacity = 1;
        } else {
          e.style.opacity = 0.2;
        }
      })
        ((e) => {
          const rec = e.getBoundingClientRect();
          var totalDiv = divXP.clientHeight + 300;
          if (rec.top >= 0 && rec.bottom <= totalDiv) {
            e.style.opacity = 1;
          } else {
            e.style.opacity = 0.2;
          }
        })
    }
    divXP.addEventListener('scroll', handleBoxXP);
    return () => {
      divXP.removeEventListener('scroll', handleBoxXP);
    };
  }, []);
  return (
    <C.Container>
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
            <TextoAnimado />
          </C.PerfilApresentacao>
        </C.HeaderPerfil>
      </C.AreaHeader >
      <C.SessaoHabilidades id="sessaoHab">
        <C.VideoArea opacity={1} heigth={550}>
          <video autoPlay loop muted playsinline allow="autoplay">
            <source src={bgPlaneta} type='video/mp4' />
          </video>
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
        </C.VideoArea>

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
          <C.LeftExperiencia id="screenAbrir"/>
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
