import { useEffect, useRef, useState } from "react";
import * as C from "./styled";

//Componentes
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Projetos from "./components/Projetos/Projetos";

//Imagens
// import bgPlaneta from "./assets/video/planetaTerra.mp4";
// import bgPlaneta from "./assets/video/planetaTerra.gif";

import iconDropdown from "./assets/image/icons/down.webp";
import moldura from "./assets/image/moldura.webp";

//Dados
import { Skills, allSkills } from "./data/Skills";
import { expProjetos } from "./data/ExpProfissional";


//Elementos
import MouseLuz from "./components/MouseLuz";
import { GridBackground } from "./components/GridBackground";

export default function App() {
  const [expandido, setExpandido] = useState(null);
  const [flip, setFlip] = useState(null);
  const [animacaofinal, setAnimacaofinal] = useState(false);
  const primeiroRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const item = document.querySelectorAll(".sessaoScroll");

      item.forEach((e, key) => {
        const rec = e.getBoundingClientRect();
        var totalDiv = window.innerHeight + 400;

        if (rec.top >= 0 && rec.bottom <= totalDiv) {
          if (key === 0 || key === 3) {
            e.classList.add("sessaoBottomFromTop");
          } else if (key === 1) {
            setTimeout(() => {
              e.classList.add("sessaoBottomFromTop");
            }, 1000);
          } else if (key === 2) {
            e.classList.add("sessaoTransition");
            document
              .getElementById("screenAbrir")
              .classList.add("abrirLivroXP");
            setAnimacaofinal(true);
          }
        } else {
          e.style.opacity = 0;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (primeiroRender.current) {
      primeiroRender.current = false;
      let alturaXP = document.getElementById("expProfissional");
      alturaXP.style.height = alturaXP.clientHeight + 200 + "px";
    }
  }, []);

  return (
    <C.Container>
      <GridBackground />
      <MouseLuz />
      <div>
        <Header />
        <C.SessaoHabilidades id="sessaoHab">
          {/* <C.VideoContainer>
        </C.VideoContainer> */}
          <C.InfoArea>
            {/* <C.VideoArea
              type="video/mp4"
              src={bgPlaneta}
              altura={850}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            /> */}
            <C.Titulo subTxt={"Skills"}>Minhas Habilidades</C.Titulo>
            <C.Corpo>
              <C.HabilitTech className="sessaoScroll">
                {Skills.map((x, key) => (
                  <C.FlipCard
                    key={key}
                    onMouseEnter={() => setFlip(key == flip ? null : key)}
                  >
                    <C.ItemTech key={key} flipped={flip == key ? true : false}>
                      <C.ImgItemTech
                        src={x.image}
                        alt={x.nome}
                        loading="lazy"
                      />
                      <p>{x.nome}</p>
                    </C.ItemTech>
                  </C.FlipCard>
                ))}
              </C.HabilitTech>
            </C.Corpo>
          </C.InfoArea>
        </C.SessaoHabilidades>
        <C.SessaoHabilidades>
          <C.InfoTech>
            <C.Titulo>Competências e Especialidades</C.Titulo>
            <C.ExpSkill className="sessaoScroll">
              {allSkills.map((x, key) => (
                <C.ItemCE key={key}>{x}</C.ItemCE>
              ))}
            </C.ExpSkill>
          </C.InfoTech>
        </C.SessaoHabilidades>
        <C.SessaoExperiencia id="expProfissional">
          <C.Titulo subTxt={"XP"}>Experiência Profissional</C.Titulo>
          <C.ContainerExperiencia>
            <C.LeftExperiencia id="screenAbrir">
              <img
                src={moldura}
                alt="moldura"
                className={animacaofinal ? "escondido" : "visivel"}
                loading="lazy"
              />
            </C.LeftExperiencia>
            <C.RightExperiencia className="sessaoScroll viewXP">
              {expProjetos.map((x, key) => (
                <C.BoxRight key={key}>
                  <C.ExpData>{x.data}</C.ExpData>
                  <C.ExpDescricao expandido={expandido === key}>
                    <C.InfoTitulo>{x.nome}</C.InfoTitulo>
                    <h2>{x.cargo}</h2>
                    <p>{x.descricao}</p>
                    <div
                      onClick={() =>
                        setExpandido(key === expandido ? null : key)
                      }
                      className="dropdown"
                    >
                      <img
                        src={iconDropdown}
                        alt="icone de dropdown"
                        loading="lazy"
                      />
                    </div>
                    <C.ExpSkill>
                      {x.skills.map((i, key) => (
                        <C.ItemT key={key}>{i}</C.ItemT>
                      ))}
                    </C.ExpSkill>
                  </C.ExpDescricao>
                </C.BoxRight>
              ))}
            </C.RightExperiencia>
          </C.ContainerExperiencia>
        </C.SessaoExperiencia>

        <C.SessaoProjetos id="expProjetos">
          <C.Titulo>Projetos</C.Titulo>
          <Projetos />
        </C.SessaoProjetos>

        <Footer/>
      </div>
    </C.Container>
  );
}
