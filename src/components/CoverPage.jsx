import boda1 from "../assets/img/boda1.jpeg";


const CoverPage = () => {
  return (
    <>
      <div className="scroll__img-conten">
        <img src={boda1} alt="" className="scroll__img" />
      </div>
      <div className="scroll__conten">
        <h1 className="scroll__title">Mayca y Víctor</h1>
        <p className="scroll__description">
          Nos encantaría compartir contigo este día tan especial
        </p>
        <p className="scroll__description">
          Era de Genoveses - San José, Almería <br />
          Sábado 16 de septiembre de 2023 | 18.30 PM
        </p>
        <a
          href="https://planning.wedding/es/website/maycayvictor"
          className="scroll__button"
          target="_blank"
          rel="noreferrer"
        >
          Confirmación
        </a>
      </div>
    </>
  );
};

export default CoverPage;
