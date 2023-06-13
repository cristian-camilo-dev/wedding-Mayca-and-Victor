import Clipboard from "./Clipboard";
import boda4 from "../assets/img/boda4.jpg";
import avion from "../assets/img/avion.png";
import banco from "../assets/img/Banco.png";

const CardConfirmation = () => {
  return (
    <div>
      <div className="container__cards">
        <div className="card">
          <div className="cover__card">
            <img src={boda4} alt="" />
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
          <h2 className="bank__title">¡SE VA A LIAR! ATTE. MAYCA & VICTOR</h2>
          <ul>
            <li>Sólo adultos</li>
            <li>
              Hay autobuses desde San José para todos los desplazamientos y para
              los vuelos de BCN Y MAD desde el aeropuerto
            </li>
          </ul>
          <img src={avion} alt="avion" className="avion_img" />
        </div>
        <div className="banco">
          <img src={banco} alt="banco" className="banco_img" />
        </div>
      </div>
      <div className="container__iban">
        <Clipboard />
      </div>
    </div>
  );
};

export default CardConfirmation;
