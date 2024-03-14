import React from 'react';
import * as C from './styled';
import { Link } from 'react-router-dom';

//Components
import TxtAnimado from '../components/TxTAnimado/txtAnimado';
import { NavMenu } from '../components/NavMenu/navMenu';
import Projetos from '../components/Projetos/Projetos';

//Imagens
import iconGithub from '../assets/image/icons/githubXP.png'
import imgPerfil from '../assets/image/eu.png';
import bgPlaneta from '../assets/video/planetaTerra.mp4';
import iconWhatss from '../assets/image/icons/whatsapp.png';
import iconLinkedin from '../assets/image/icons/linkedin.png';
import iconGithubs from '../assets/image/icons/github.png';

//Dados
import { Skills, allSkills } from '../data/Skills';
import { expProjetos } from '../data/ExpProfissional';

export const SinglePage = () => {

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
              <TxtAnimado />
            </C.PerfilDescricao>
          </C.PerfilApresentacao>
        </C.HeaderPerfil>
      </C.AreaHeader >

      <C.SessaoHabilidades id="sessaoHab">
        <C.VideoArea opacity={1} heigth={550}>
          <video autoPlay loop muted allow="autoplay">
            <source src={bgPlaneta} type='video/mp4' />
          </video>
          <C.InfoArea>
            <C.Titulo className='my-5' >Minhas Habilidades</C.Titulo>
            <C.Corpo>
              <C.HabilitTech>
                {
                  Skills.map(x => (
                    <>
                      <C.ItemTech>
                        <C.ImgItemTech src={x.image} alt={x.nome} />
                        <p>{x.nome}</p>
                      </C.ItemTech>

                    </>
                  ))
                }
              </C.HabilitTech>
            </C.Corpo>
          </C.InfoArea>
        </C.VideoArea>

        <C.InfoTech>
          <C.Titulo style={{ width: '100%' }}>Competências e Especialidades</C.Titulo>
          {
            allSkills.map(x => (
              <C.ExpSkill>
                <C.ItemT>{x}</C.ItemT>
              </C.ExpSkill>
            ))
          }
        </C.InfoTech>
      </C.SessaoHabilidades>

      <C.SessaoExperiencia id='expProfissional'>
        <C.Titulo>Experiência Profissional</C.Titulo>
        <C.ContainerExperiencia>
          <C.LeftExperiencia />
          <C.RightExperiencia>
            {
              expProjetos.map(x => (
                <C.BoxRight>
                  <C.ExpData>{x.data}</C.ExpData>
                  <C.ExpDescricao>
                    {x.urlGithub &&
                      <Link to={x.urlGithub} target="_blank">
                        <C.IconGitHub src={iconGithub} />
                      </Link>
                    }
                    <C.InfoTitulo>{x.nome}</C.InfoTitulo>
                    <h2>{x.cargo}</h2>
                    <p>{x.descricao}</p>
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
          <p><i className="fa-solid fa-phone"></i> (28)999961628</p>
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
