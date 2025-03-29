import React from "react";
import "../../styles/ui/navBarScroll.scss";

const NavBarScroll = () => {
  return (
    <div className="header-nav-scroll visible">
      <nav className="nav-bar-scroll">
        <ul className="header_nav-list-scroll">
          <li
            className="header_nav-item-scroll"
            onClick={() =>
              document
                .getElementById("hotel-section")
                .scrollIntoView({ behavior: "smooth" })
            }
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
                .getElementById("gallery-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Галерея
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarScroll;
