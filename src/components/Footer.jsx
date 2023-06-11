import { Icon } from "@iconify/react";
import CountdownTimer from "./CountdownTimer";

const Footer = () => {
  return (
    <div className="fixed">
      <footer className="footer">
      
        <nav className="main__footer">
        <CountdownTimer targetDate="2023-09-16T18:30:00" />
          <ul className="menu">
            <li className="menu__item">
              <a href={null} className="menu__link">
                <Icon icon="mdi:home" width={25} />
                Inicio
              </a>
            </li>
           
            <li className="menu__item">
              <a href={null} className="menu__link">
                <Icon icon="mdi:search-web" width={25} />
                Buscar
              </a>
            </li>
            <li className="menu__item">
              <a href={null} className="menu__link">
                <Icon icon="mdi:bookshelf" width={25} />
                Biblioteca
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Footer