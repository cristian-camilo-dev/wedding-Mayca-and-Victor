import loma from "../assets/img/loma2.png";
import reproductor from "../assets/img/reproductor.png";
import ceremonia from "../assets/img/ceremonia3.jpg";
import ceremonia1 from "../assets/img/comida.jpg";
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
          <a href="https://www.google.com/maps/place/36%C2%B049'12.6%22N+2%C2%B003'04.5%22W/@36.820179,-2.051257,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.820179!4d-2.051257?entry=ttu" 
          target="_blank"
          rel="noreferrer"
          className="leisure__text-link"
          >
            Cortijo La Loma, 04118 La Isleta Del moro <br />
           
          </a>
          <span className="dresscode">Dresscode: blanco, se recomienda no llevar tacón fino</span>
        </div>
        <div>
          <img src={reproductor} alt="" className="reproductormusica" />
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
          
          <a href="https://www.google.com/maps/place/36%C2%B045'22.6%22N+2%C2%B007'18.1%22W/@36.756278,-2.12169,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.756278!4d-2.12169?entry=ttu"
          target="_blank"
          rel="noreferrer"
          className="leisure__text-link"
          >
            Era de los Genoveses,04118 San josé, Almeria  <br />
            <span>Se recomienda no llevar tacón fino</span>
          </a>
        </div>
        <div>
          <img src={reproductor} alt="" className="reproductormusica" />
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
          <a href="https://www.google.com/maps/place/36%C2%B049'12.6%22N+2%C2%B003'04.5%22W/@36.820179,-2.051257,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.820179!4d-2.051257?entry=ttu"
          target="_blank"
          rel="noreferrer"
          className="leisure__text-link"
          >
            Cortijo La Loma, 04118 La Isleta Del moro <br />
            <span>Se recomienda no llevar tacón fino</span>
          </a>
        </div>
        <div>
          <img src={reproductor} alt="" className="reproductormusica" />
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
          <a className="phone" href="tel:+34678499972">(+34) 678 49 99 72</a>

          </p>
        </div>
        <div>
          <img src={reproductor} alt="" className="reproductormusica" />
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
            <a className="phone" href="tel:950611175" >950 61 11 75</a>
          </p>
        </div>
        <div>
          <img src={reproductor} alt="" className="reproductormusica" />
        </div>
      </div>
    </div>
  );
};

export default LeisureSection;
