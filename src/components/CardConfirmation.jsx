import Clipboard from "./Clipboard";

const CardConfirmation = () => {
  return (
    <div>
      <div className="container__cards">
        <div className="card">
          <div className="cover__card">
            <img src="/src/assets/img/boda4.jpg" alt="" />
          </div>
          <h2>CONFÍRMANOS TU ASISTENCIA AQUÍ:</h2>
          <a
            href="https://planning.wedding/es/website/maycayvictor"
            className="scroll__button_confirmacion"
            id="confirmacion"
            target="_blank"
            rel="noreferrer"
          >
            Confirmación
          </a>
        </div>
      </div>
      <div className="container__bank">
        <div>
          <h2 className="bank__title">SE VA A LIAR! ATTE. MAYCA & VICTOR</h2>

          <img
            src="/src/assets/img/avion.png"
            alt="avion"
            className="avion_img"
          />
        </div>
        <div className="banco">
          <img
            src="/src/assets/img/Banco.png"
            alt="banco"
            className="banco_img"
          />
        </div>
      </div>
      <div className="container__iban">
        <Clipboard />
      </div>
    </div>
  );
};

export default CardConfirmation;
