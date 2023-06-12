import loma from "../assets/img/loma.jpg";
import reproductor from "../assets/img/reproductor.png";
import ceremonia from "../assets/img/ceremonia.jpg";
import ceremonia1 from "../assets/img/ceremonia1.jpg";
import hotelJose from "../assets/img/hotelJose.png";
import hotelPakyta from "../assets/img/hotelp.jpg";


const LeisureSection = () => {
  return (
    <div className="Leisure__container">
      <h2 className="title-interesar">También te puede interesar...</h2>
      <div>
        <div>
          <img
            src={loma}
            loading="lazy"
            alt="Cortijo la Loma"
            className="img__leisure"
          />
        </div>
        <div className="leisure__text">
          <h3>PREBODA Viernes 15 de Septiembre.</h3>
          <h4>White party a las 19:00h - Cortijo la Loma </h4>
          <p>
            Cortijo La Loma, 04118 La Isleta Del moro <br />
            <span>Dresscode: blanco, se recomienda no llevar tacón fino</span>
          </p>
        </div>
        <div>
          <img
            src={reproductor}
            alt=""
            className="reproductormusica"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src={ceremonia}
            loading="lazy"
            alt="Ceremonia"
            className="img__leisure"
          />
        </div>
        <div className="leisure__text">
          <h3>CEREMONIA Sábado 16 Sep. 18:30h</h3>
          <h4>Era de los Genoveses,04118 San josé, Almeria </h4>
          <p>
            <span>Se recomienda no llevar tacón fino</span>
          </p>
        </div>
        <div>
          <img
            src={reproductor}
            alt=""
            className="reproductormusica"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src={ceremonia1}
            loading="lazy"
            alt="Celebración"
            className="img__leisure"
          />
        </div>
        <div className="leisure__text">
          <h3>CELEBRACIÓN</h3>
          <h4>Cortijo La Loma </h4>
          <p>
            Cortijo La Loma, 04118 La Isleta Del moro <br />
            <span>Se recomienda no llevar tacón fino</span>
          </p>
        </div>
        <div>
          <img
            src={reproductor}
            alt=""
            className="reproductormusica"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src={hotelJose}
            loading="lazy"
            alt="hotel san jose"
            className="img__leisure"
          />
        </div>
        <div className="leisure__text">
          <h3>HOTEL MC SAN JOSÉ</h3>
          <h4>C. del Faro, 2, 04118 San José, Almería </h4>
          <p>
            <span>(+34) 678 49 99 72</span>
          </p>
        </div>
        <div>
          <img
            src={reproductor}
            alt=""
            className="reproductormusica"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src={hotelPakyta}
            loading="lazy"
            alt="hotel pakyta"
            className="img__leisure"
          />
        </div>
        <div className="leisure__text">
          <h3>HOTEL DOÑA PAKYTA</h3>
          <h4>C. Correo, 51, 04118 San José, Almería</h4>
          <p>
            <span>950 61 11 75</span>
          </p>
        </div>
        <div>
          <img
            src={reproductor}
            alt=""
            className="reproductormusica"
          />
        </div>
      </div>
    </div>
  );
};

export default LeisureSection;
