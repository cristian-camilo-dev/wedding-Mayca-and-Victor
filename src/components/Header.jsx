import { useState } from "react";
import { Icon } from "@iconify/react";

import { dataMenu } from "../data/dataMenu";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleViewMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header">
      <div className="grid-2-small header__menu">
        <div className="header__icon">
          <Icon icon="mdi:chevron-left" width={25} />
        </div>
        <div className="header__icon-right">
          <Icon icon="mdi:cards-heart-outline" width={25} />
          <Icon
            onClick={handleViewMenu}
            icon="carbon:overflow-menu-vertical"
            width={25}
            style={{ color: "black" }}
          />
        </div>
        { isMenuVisible   && (
          <ul className="menu-top">
            {dataMenu.map((item) => (
              <li key={item.id} className="menu-top__item">
                <a href="#" className="menu-top__link">
                  <Icon icon={item.icon} width={25} />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
