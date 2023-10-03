import "./styles/styles.scss";
import logo from "./assets/logo_Corujao_PRIO_RGB.png";
import {
  PurpleHover,
  OrangeHover,
  OutlineButton,
  Separator,
} from "./components/CTA";
import puzzle from "./assets/puzzle.svg";
import puzzlemob from "./assets/puzzle-mob.svg";
import { useState, useEffect } from "react";
import { Cards } from "./components/card";
import { Count } from "./components/counter";
import point from "./assets/1 1.png";
import valor from "./assets/Valor.svg";
import valorMob from "./assets/valores_mob.svg";
import corujao from "./assets/corujao-perfil.svg";
import txtHashtag from "./assets/txt-hashtag.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderDesk, SliderMob } from "./components/testimonial-slider";
import styled from "styled-components";
import { Facebook, Instagram } from "lucide-react";
import "./components/styles.scss";
export function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleIsHovered() {
    setIsHovered(!isHovered);
  }

  function handleIsMobile() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 835);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <body>
      <header className="header ">
        <nav id="nav">
          {isMobile ? (
            <div className="nav-navigation">
              <nav
                id="nav-mob"
                className={`nav-mob ${isMenuOpen ? "active" : "closed"}`}
              >
                <button
                  id="btn-mobile"
                  aria-controls="menu-mob"
                  onClick={handleIsMobile}
                >
                  <span id="hamburger" className="hamburger"></span>
                </button>
                <ul
                  id="menu-mob"
                  className={`navigation${isHovered ? "active" : ""}`}
                >
                  <li>
                    <a onClick={handleIsHovered} href="#metodologia">
                      Metodologia
                    </a>
                  </li>
                  <MenuSeparator />
                  <li>
                    <a onClick={handleIsHovered} href="#resultados">
                      Resultados
                    </a>
                  </li>
                  <MenuSeparator />

                  <li>
                    <a onClick={handleIsHovered} href="#valor">
                      Valor
                    </a>
                  </li>
                  <MenuSeparator />
                  <li>
                    <a onClick={handleIsHovered} href="#depoimentos">
                      Depoimentos
                    </a>
                  </li>
                  <MenuSeparator />

                  <li>
                    <a onClick={handleIsHovered} href="#sobre">
                      Sobre o corujão
                    </a>
                  </li>
                </ul>
              </nav>
              <img src={logo} alt="Logo" />
            </div>
          ) : (
            <>
              <img src={logo} alt="Logo" />
              <ul
                id="menu"
                className={`navigation${isHovered ? "active" : ""}`}
              >
                <li>
                  <a onClick={handleIsHovered} href="#metodologia">
                    Metodologia
                  </a>
                </li>
                <li>
                  <a onClick={handleIsHovered} href="#resultados">
                    Resultados
                  </a>
                </li>
                <li>
                  <a onClick={handleIsHovered} href="#valor">
                    Valor
                  </a>
                </li>
                <li>
                  <a onClick={handleIsHovered} href="#depoimentos">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a onClick={handleIsHovered} href="#sobre">
                    Sobre o Corujão
                  </a>
                </li>
                <a onClick={handleIsHovered} href="#form">
                  <PurpleHover href="#form">Inscreva-se</PurpleHover>
                </a>
              </ul>
            </>
          )}
        </nav>
      </header>

      <main id="main">
        <div id="main-title">
          <h1>
            Aprenda redação com quem aprova nos vestibulares mais concorridos do
            país
          </h1>
          <h2>
            Aprenda redação com quem aprova nos vestibulares mais concorridos do
            país
          </h2>
          <div id="button">
            <OrangeHover href="#form" id="main-button">
              Vem para o corujão
            </OrangeHover>
          </div>
        </div>
      </main>

      <section id="metodologia">
        <div id="meto-container">
          <h2>
            Um laboratório de redação <span>focado na sua aprovação</span>
          </h2>
          <div id="img-mobile-desktop">
            {isMobile ? (
              <img
                src={puzzlemob}
                style={{
                  margin: "4rem 2rem",
                  width: "100%",
                }}
                alt="Quebra-cabeça corujão"
              />
            ) : (
              <img
                src={puzzle}
                alt="Quebra-cabeça corujão"
                style={{
                  margin: "4rem auto",
                }}
              />
            )}
          </div>
          <h3>
            Com o Corujão você entra para a turma dos aprovados no vestibular!
          </h3>
          <OutlineButton href="#form">Inscreva-se</OutlineButton>
        </div>
      </section>
      <Separator />
      <section id="resultados">
        <div className="title">
          <h2>Nenhuma redação com menos de</h2>
          <Count />
          <h2 className="aluno">dos alunos aprovados desde 2021</h2>
        </div>
        <Cards />
      </section>

      <section id="valor">
        <h1>
          Curso online de <span>Técnica de redação do Corujão</span>
        </h1>
        <div id="img-pointings">
          <div id="pointings">
            <div className="pointing">
              <img src={point} width={45} height={25} alt="" />
              <p>
                <strong>30 horas de duração,</strong> divididas em 1 ou 2 aulas
                por semana, com 2 horas de duração por aula
              </p>
            </div>
            <div className="pointing">
              <img src={point} alt="" />
              <strong>Aulas em grupo ou individuais</strong>
            </div>
            <div className="pointing">
              <img src={point} alt="" />
              <strong>Correções e feedbacks atualizados</strong>
            </div>
          </div>
          {isMobile ? (
            <img
              src={valorMob}
              style={{
                margin: "2rem auto",
              }}
              className="value"
              alt=""
            />
          ) : (
            <img src={valor} className="value" alt="" />
          )}
        </div>
        <OutlineButton href="#form" className="width">
          Inscreva-se ou agende uma aula de demonstração!
        </OutlineButton>
      </section>

      <section id="depoimentos">
        <h1>
          Faça como eles: conquiste uma vaga na universidade com ajuda do método
          de redação do Corujão!
        </h1>
        {isMobile ? <SliderMob /> : <SliderDesk />}
      </section>
      <div className="Separator">
        <PurpleHover href="#form">Vem para o Corujão</PurpleHover>
      </div>
      <section id="sobre">
        <h1>
          Conheça o <span>Corujão</span>
        </h1>
        <div className="img-sobre">
          <img src={corujao} alt="" />
          <div className="sobre-text">
            <p>
              Professor há mais de 30 anos, o Corujão é filho da também
              professora Stella Garrafa, uma das maiores educadoras brasileiras
              de todos os tempos. Apaixonado pela Língua Portuguesa, sua
              história na sala de aula atravessa gerações.
            </p>
            <br />
            <p>
              Aplicando seu método único com uma didática totalmente singular, o
              Corujão cria uma parceria com os alunos baseada em disciplina,
              comprometimento e criatividade. É assim que ele vem ensinando
              estudantes a escreverem melhor para conquistarem um melhor
              desempenho na redação e alcançarem a tão esperada vaga na
              universidade.
            </p>
            <OutlineButton href="#form" className="Width">
              Inscreva-se
            </OutlineButton>
          </div>
        </div>
      </section>

      <section id="form">
        <img src={txtHashtag} alt="#VemParaOCorujão" />
        <div id="txt-form">
          <div className="txt">
            <h1>
              Mais que um curso de redação, o seu caminho mais rápido para a
              universidade.
            </h1>
            <p>
              Entre em contato com a nossa equipe para saber mais sobre o curso,
              tirar dúvidas e adequar as aulas à sua rotina de estudos.
            </p>
          </div>

          <div
            className="pipedriveWebForms"
            data-pd-webforms="https://webforms.pipedrive.com/f/ccSXgfMEm71DaRSRY6gqNIgcuqFXHZVj5LcUVLWEtYRgvDDehEbu8PAwGeMZ9YsGnV"
          >
            <script src="https://webforms.pipedrive.com/f/loader"></script>
          </div>
        </div>
      </section>

      <footer>
        <img src={logo} alt="logo" />
        <div className="icon-links">
          <a href="https://facebook.com/corujaoredacao" target="_blank">
            <Facebook size={24} color="#fff" />
          </a>
          <a href="https://instagram.com/corujaoredacao/" target="_blank">
            <Instagram size={24} color="#fff" />
          </a>
        </div>
      </footer>
    </body>
  );
}

export const MenuSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e7e7e7;
`;
