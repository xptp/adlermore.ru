import React from "react";
import "../../styles/navBars/navBarMobile.scss";
import { MdClose } from "react-icons/md";

const NavBarMobile = ({ isOpen, closeNav }) => {
  console.log(isOpen);

  return (
    <div className={`header-nav-mobile ${isOpen ? "open" : null}`}>
      <button className="closeNav" onClick={() => closeNav()}>
        <MdClose />
      </button>
      <nav className="nav-bar-mobile">
        <ul className="header_nav-list-mobile">
          <li
            className="header_nav-item-mobile"
            onClick={() => {
              document
                .getElementById("hotel-section")
                .scrollIntoView({ behavior: "smooth" });
              closeNav();
            }}
          >
            Отель
          </li>
          <li
            className="header_nav-item-mobile"
            onClick={() => {
              document
                .getElementById("info-section")
                .scrollIntoView({ behavior: "smooth" });
              closeNav();
            }}
          >
            Информация
          </li>
          <li
            className="header_nav-item-mobile"
            onClick={() => {
              document
                .getElementById("rooms-section")
                .scrollIntoView({ behavior: "smooth" });
              closeNav();
            }}
          >
            Номера
          </li>
          <li
            className="header_nav-item-mobile"
            onClick={() => {
              document
                .getElementById("up")
                .scrollIntoView({ behavior: "smooth" });
              closeNav();
            }}
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
              closeNav();
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
