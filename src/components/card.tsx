import { Card } from "./CTA";
import CountUp from "react-countup";
import briefcase from "../assets/briefcase.svg";
import medal from "../assets/medal.svg";
import shake from "../assets/shake-hands.svg";
import checkbox from "../assets/checkbox.svg";
import "./styles.scss";
export function Cards() {
  return (
    <>
      <div id="cards">
        <Card className="Card">
          <div className="icon-text">
            <img src={medal} alt="" />
            <h1
              id="counter"
              style={{
                color: "#FFFF",
                fontSize: "2rem",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <CountUp
                prefix="+ "
                start={900000}
                end={1000000}
                separator="."
                duration={9}
                delay={3}
              />
            </h1>
          </div>
          <p>de redações corrigidas</p>
        </Card>
        <Card className="Card">
          <div className="icon-text">
            <img src={checkbox} alt="" />
            <h1
              id="counter"
              style={{
                color: "#FFFF",
                fontSize: "2rem",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <CountUp
                start={4899}
                end={5000}
                separator="."
                suffix=" mil"
                duration={9}
                delay={3}
              />
            </h1>
          </div>
          <p>alunos atendidos</p>
        </Card>
        <Card className="Card">
          <div className="icon-text">
            <img src={briefcase} alt="" />
            <h1
              id="counter"
              style={{
                color: "#FFFF",
                fontSize: "2rem",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <CountUp
                start={20}
                end={30}
                separator="."
                suffix=" anos"
                duration={9}
                delay={3}
              />
            </h1>
          </div>
          <p>de trajetória</p>
        </Card>
        <Card className="Card last-card">
          <div className="icon-text">
            <img src={shake} alt="" />
            <h1
              id="counter"
              style={{
                color: "#FFFF",
                fontSize: "2rem",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <CountUp
                start={9}
                end={20}
                separator="."
                suffix=" anos"
                duration={9}
                delay={3}
              />
            </h1>
          </div>
          <p> de parceria entre aluno e corujão</p>
        </Card>
      </div>
    </>
  );
}
