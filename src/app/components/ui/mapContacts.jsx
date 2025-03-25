import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import "../../styles/ui/mapContacts.scss";
import { IoMdClose } from "react-icons/io";

const MapContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="contacts">
        <h3>Адрес</h3>
        <p>354340, г. Сочи, Адлерский район, ул. Бестужева, 6а</p>
        <h3>Отдел Бронирования</h3>
        <a href="tel:">+7 (862) 555 25 44</a>
        <br />
        <a href="tel:">+7 (918) 915 92 26 (What’s App)</a>
        <h3>E-mail</h3>
        <a href="mailto:">test@mail.ru</a>
        <a
          href="https://yandex.ru/maps/239/sochi/?from=mapframe&ll=39.895485%2C43.476799&mode=routes&rtext=~43.476131%2C39.895524&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1126085566&source=mapframe&utm_source=mapframe&z=18"
          className="route-btn"
          target="blank"
        >
          <div className="arrow-btn">
            <HiArrowLongRight />
          </div>
          Построить маршурт
        </a>
        <button className="modal-btn" onClick={openModal}>
          Сертификат
        </button>
        {isModalOpen ? (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src="img/certificate.png" alt="Modal" />
              <button onClick={closeModal}>
                <IoMdClose />
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="map">
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Ссылки поверх карты */}
          <a
            href="https://yandex.ru/maps/org/more/1126085566/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Море
          </a>
          <a
            href="https://yandex.ru/maps/239/sochi/category/guest_house/131994109947/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Гостевой дом в Сочи
          </a>

          {/* Iframe с картой */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.894695%2C43.475238&mode=poi&poi%5Bpoint%5D=39.895523%2C43.476131&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1126085566&utm_campaign=v1&utm_medium=rating&utm_source=badge&z=18.2"
            width="560"
            height="400"
            frameBorder="1"
            allowFullScreen
            style={{ position: "relative" }}
            title="Yandex Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapContacts;
