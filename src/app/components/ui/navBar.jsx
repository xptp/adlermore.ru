import React from "react";
import "../../styles/ui/navBar.scss";

const NavBar = () => {
  return (
    <div className="header-nav">
      <div className="header">
        <div className="header-content">
          <div className="header_text">Мы находимся в самом центре Адлера</div>
          <div className="header_btn">
            <button className="message-btn">Написать сообщение</button>
          </div>
        </div>
      </div>

      <div className="header_nav-ad-address">
        <div className="nav-address">
          <div className="div-logo">
            <img className="logo" src="/img/logo.png" alt="Adlermore Logo" />
          </div>
          <div className="div-address">
            <h2>Adlermore</h2>
            <p>354340, г. Сочи, Адлерский район ул. Бестужева, 6а</p>
            <div className="contact-links">
              <a href="tel:+79189159226">+7 918 915 92 26</a>
              <a href="tel:+78625552544">+7 862 555 25 44</a>
            </div>
          </div>
        </div>
        <div className="div_nav-callback">
          <button className="nav-callback-btn">Обратный звонок</button>
        </div>
      </div>

      <nav className="nav-bar">
        <ul className="header_nav-list">
          <li className="header_nav-item">Отель</li>
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
            onClick={() =>
              document
                .getElementById("contacts-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Контакты
          </li>
          <li className="header_nav-item">Галерея</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
