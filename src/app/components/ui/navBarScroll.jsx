import React from "react";
import "../../styles/ui/navBarScroll.scss";

const NavBarScroll = () => {
  return (
    <div className="header-nav-scroll">
      <nav className="nav-bar-scroll">
        <ul className="header_nav-list-scroll">
          <li
            className="header_nav-item-scroll"
            // onClick={() =>
            //   document
            //     .getElementById("info-section")
            //     .scrollIntoView({ behavior: "smooth" })
            // }
          >
            Отель
          </li>
          <li
            className="header_nav-item-scroll"
            onClick={() =>
              document
                .getElementById("info-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Информация
          </li>
          <li
            className="header_nav-item-scroll"
            onClick={() =>
              document
                .getElementById("rooms-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Номера
          </li>
          <li
            className="header_nav-item-scroll"
            onClick={() =>
              document
                .getElementById("contacts-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Контакты
          </li>
          <li className="header_nav-item-scroll">и ещё кнопка</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarScroll;
