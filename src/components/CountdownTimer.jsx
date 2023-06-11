import  { useState, useEffect } from "react";
import ReactPropTypes from "prop-types";


const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

   
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="countdown">
        <div className="countdown__item">
          <div className="countdown__item--number">{timeLeft.days}</div>
          <div className="countdown__item--text">Días</div>
        </div>
        <div className="countdown__item">
            <div className="countdown__item--number">{timeLeft.hours}</div>
            <div className="countdown__item--text">Horas</div>
        </div>
        <div className="countdown__item">
            <div className="countdown__item--number">{timeLeft.minutes}</div>
            <div className="countdown__item--text">Minutos</div>
        </div>
        <div className="countdown__item">
            <div className="countdown__item--number">{timeLeft.seconds}</div>
            <div className="countdown__item--text">Segundos</div>
        </div>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
    targetDate: ReactPropTypes.string.isRequired,
}

export default CountdownTimer;
