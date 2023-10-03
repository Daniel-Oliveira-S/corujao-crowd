import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../assets/avatar-1.svg";
import avatar2 from "../assets/avatar-2.svg";
import avatar3 from "../assets/avatar-3.svg";
import "../styles/styles.scss";
export function SliderMob() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots",
    arrows: true,
    centerMode: false,
    centerPadding: "60px",
    draggable: true,
    easing: "ease",
    fade: true,
  };
  return (
    <div id="slider-mobile">
      <Slider {...settings}>
        <div className="slide">
          <img src={avatar1} alt="" />
          <h1>Erick - Colégio Mobile</h1>

          <p>
            Passei na GV, em ADM com 98 pontos, deu tudo certo. Na redação
            fiquei com 2 pontos acima da média. Eu passei em Economia, na
            Insper, posicionada em décima quarta. Tirei 960 na redação.
          </p>
        </div>
        <div className="slide">
          <img src={avatar2} alt="" />
          <h1>Dora Lobo - Colégio Mobile</h1>
          <p>
            Muito obrigado, Corujão! Você é demais! Te garanto que você foi
            muito essencial para essa aprovação. Pode esperar mais uma Coruja
            para a sua coleção. Passei em ADM na GV e fiquei em décimo segundo
            lugar no vestibular da Insper
          </p>
        </div>
        <div className="slide">
          <img src={avatar3} alt="" />
          <h1>Matheus Sato - Colégio Bandeirantes</h1>
          <p>
            Passei! Acabou de sair a primeira chamada! Escrevo, mesmo. Hahaha.
            Infelizmente, não sei se consigo ver quanto tirei na redação. Fiquei
            na posição 61 de todos os que fizeram a prova.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export function SliderDesk() {
  return (
    <div id="slider-container">
      <div className="slide">
        <img src={avatar1} alt="" />
        <h1>Erick - Colégio Mobile</h1>
        <span
          style={{
            color: "#7c2399",
            fontSize: "3em",
            fontFamily: "Roboto",
            margin: "1rem auto -2rem auto",
            textAlign: "start",
            width: "100%",
          }}
        >
          &#8220;
        </span>
        <p>
          Passei na GV, em ADM com 98 pontos, deu tudo certo. Na redação fiquei
          com 2 pontos acima da média. Eu passei em Economia, na Insper,
          posicionada em décima quarta. Tirei 960 na redação.
        </p>
      </div>
      <div className="slide">
        <img src={avatar2} alt="" />
        <h1>Dora lobo - Colégio Mobile</h1>
        <span
          style={{
            color: "#7c2399",
            fontSize: "3em",
            fontFamily: "Roboto",
            margin: "1rem auto -2rem auto",
            textAlign: "start",
            width: "100%",
          }}
        >
          &#8220;
        </span>

        <p>
          Muito obrigado, Corujão! Você é demais! Te garanto que você foi muito
          essencial para essa aprovação. Pode esperar mais uma Coruja para a sua
          coleção. Passei em ADM na GV e fiquei em décimo segundo lugar no
          vestibular da Insper.
        </p>
      </div>
      <div
        className="slide slide-3
    "
      >
        <img src={avatar3} className="Matheus" alt="" />
        <h1>Matheus Sato - Colégio Bandeirantes</h1>
        <span
          style={{
            color: "#7c2399",
            fontSize: "3em",
            fontFamily: "Roboto",
            margin: "1rem auto -2rem auto",
            textAlign: "start",
            width: "100%",
          }}
        >
          &#8220;
        </span>
        <p>
          Passei! Acabou de sair a primeira chamada! Escrevo, mesmo. Hahaha.
          Infelizmente, não sei se consigo ver quanto tirei na redação. Fiquei
          na posição 61 de todos os que fizeram a prova.
        </p>
      </div>
    </div>
  );
}
