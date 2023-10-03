import CountUp from "react-countup";
import "./styles.scss";
export function Count() {
  return (
    <div>
      <h1 className="counter">
        <CountUp
          start={800}
          end={900}
          suffix=" pontos"
          separator="."
          duration={9}
          delay={1}
        />
      </h1>
      <h1 className="counter">
        <CountUp
          start={50}
          end={100}
          suffix="%"
          separator="."
          duration={9}
          delay={1}
        />
      </h1>
    </div>
  );
}
