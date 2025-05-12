import React from "react";
import "../../styles/navBars/navBarMobile.scss";

const NavBarMobile = (isOpen) => {
  console.log(isOpen);

  return (
    <div className={`header-nav-mobile ${isOpen ? "open" : null}`}>
      <nav className="nav-bar-mobile">
        <ul className="header_nav-list-mobile">
          <li
            className="header_nav-item-mobile"
            onClick={() =>
              document
                .getElementById("hotel-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Отель
          </li>
          <li
            className="header_nav-item-mobile"
            onClick={() =>
              document
                .getElementById("info-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Информация
          </li>
          <li
            className="header_nav-item-mobile"
            onClick={() =>
              document
                .getElementById("rooms-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Номера
          </li>
          <li
            className="header_nav-item-mobile"
            onClick={() =>
              document
                .getElementById("up")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Забронировать
          </li>
          <li
            className="header_nav-item-mobile"
            // onClick={() =>
            //   document
            //     .getElementById("gallery-section")
            //     .scrollIntoView({ behavior: "smooth" })
            // }
            onClick={() => {
              const element = document.getElementById("gallery-section");
              const yOffset =
                element.getBoundingClientRect().top + window.pageYOffset - 50;
              window.scrollTo({ top: yOffset, behavior: "smooth" });
            }}
          >
            Галерея
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMobile;
