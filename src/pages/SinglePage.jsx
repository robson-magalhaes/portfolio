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
import Header from '../components/Partials/Header';

export const SinglePage = () => {
  const [expandido, setExpandido] = useState(null);
  const [flip, setFlip] = useState(null);
  
  return (
    <C.Container>
      <Header/>
      <C.SessaoHabilidades id="sessaoHab">
        <C.VideoArea opacity={1} heigth={550}>
          <video autoPlay loop muted playsinline allow="autoplay">
            <source src={bgPlaneta} type='video/mp4' />
          </video>
          <C.InfoArea>
            <C.Titulo className='my-5' subTxt={'Skills'}>Minhas Habilidades</C.Titulo>
            <C.Corpo>
              <C.HabilitTech>
                {
                  Skills.map((x, key) => (
                    <>
                    <C.FlipCard onMouseEnter={()=>setFlip(key == flip ? null : key)}>
                     <C.ItemTech  flipped={flip === key}>
                        <C.ImgItemTech id={'flip'+key} src={x.image} alt={x.nome} />
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
          <C.ExpSkill>
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
          <C.LeftExperiencia />
          <C.RightExperiencia>
            {
              expProjetos.map((x, key) => (
                <C.BoxRight >
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

      <C.SessaoProjetos id="expProjetos">
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
