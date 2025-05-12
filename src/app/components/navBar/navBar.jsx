import React, { useEffect, useState } from "react";
import "../../styles/navBars/navBar.scss";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useWindowWidth } from "../hooks/useWindowWidth";
import NavBarMobile from "./navBarMobile";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const width = useWindowWidth();
  // useEffect(() => {
  //   console.log(isNavOpen);
  //   console.log(width);
  // }, [isNavOpen, width]);
  return (
    <div className="header-nav">
      <div className="header_nav-ad-address">
        <div className="nav-address">
          <div className="div-logo">
            <img className="logo" src="/img/logo.png" alt='Отель "Море"' />
          </div>
          <div className="div-address">
            <h1>Отдых в Адлере в отеле «Море»</h1>
            <p>
              Краснодарский край, Сочи, жилой район Адлер, переулок Чкалова, 9А
            </p>
            <div className="contact-links">
              <a target="blank" href="tel:+79189579280">
                +7 (918) 957-92-80
              </a>
              {/* <a href="tel:+78625552544">+7 862 555 25 44</a> */}
            </div>
          </div>
        </div>
        <div className="div_nav-callback">
          {/* <button className="nav-callback-btn">Заказать обратный звонок</button> */}
          <div className="tel-what">
            {/* <a href="" className="telegram">
              <FaTelegram />
            </a> */}
            <a
              href="https://api.whatsapp.com/send?phone=79189579280"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {width < 401 ? (
        <IoIosMenu
          className="navIco"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          type="button"
        />
      ) : (
        <nav className="nav-bar" id="nav-bar">
          <ul className="header_nav-list">
            <li
              className="header_nav-item"
              onClick={() =>
                document
                  .getElementById("hotel-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Отель
            </li>
            <li
              className="header_nav-item"
              onClick={() =>
                document
                  .getElementById("info-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Информация
            </li>
            <li
              className="header_nav-item"
              onClick={() =>
                document
                  .getElementById("rooms-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Номера
            </li>

            <li
              className="header_nav-item"
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
      )}
      <NavBarMobile isOpen={isNavOpen} />
    </div>
  );
};

export default NavBar;
