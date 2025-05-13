import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../navBar/navBar";
import "../../../styles/pages/mainPage.scss";
import Carousel from "../../ui/Carousel";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import BookingImg from "../../ui/bookingImg";
import MapLocation from "./../../ui/mapLocation";
import rooms from "../../../data/rooms.json";
import NavBarScroll from "../../navBar/navBarScroll";
import InfoHotel from "../../ui/infoHotel";
import Gallery from "../../ui/gallery";
import WaveAnimation from "./waveAnimation";
import FishAnimation from "../../ui/fish";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const MainPage = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const width = useWindowWidth();
  let scrinWidth = width < 400 ? true : false;

  const triggerBlockRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyNav(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    if (triggerBlockRef.current) observer.observe(triggerBlockRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-page" id="up">
      {!scrinWidth && showStickyNav ? <NavBarScroll /> : null}
      <NavBar />
      <BookingImg />

      <div ref={triggerBlockRef} style={{ height: "1px" }} />
      {showStickyNav ? (
        <button
          className="up-btn"
          onClick={() =>
            document.getElementById("up").scrollIntoView({ behavior: "smooth" })
          }
        >
          <MdOutlineArrowCircleUp />
        </button>
      ) : null}

      <div className="info">
        {/* <img
          className="info-img"
          src="https://hotel-blacksea.com/img/three_photos_new.webp"
          alt=""
        /> */}

        <div className="info-description" id="hotel-section">
          <div className="about-container">
            <div className="about-content">
              <div className="about-text">
                <h2>О НАС</h2>
                <div className="info-des-short">
                  Планируете отпуск в России? <strong>Адлер ждёт вас!</strong>
                </div>
                <p>
                  Отдых в сердце Адлера! Район Курортного городка! Здесь есть
                  всё для вашего комфортного отдыха. Муниципальный оборудованный
                  пляж в 5 минутах. Прогулочный зелёный парк. Океанариум.
                  Дельфинарий. Террариум. Парк аттракционов. Множество точек
                  общественного питания. Сетевые продуктовые магазины. Ж/д
                  вокзал в 10 минутах. Аэропорт Сочи в 15 минутах.
                </p>
              </div>
              <div className="about-map">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A2a446ffe2e0114f9e8cadbe2c1c8c363a3bad91779196094fbeb387cf0e8e50f&amp;source=constructor"
                  width="513"
                  height="600"
                  frameborder="0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="info-des-long">
            Гостевой дом «Море» оснащён огромным выбором номерного фонда. Теплый
            бассейн на крыше с морской водой и с видом на море. К вашим услугам
            укомплектованный всем необходимым номер. Две просторные террасы.
            Оборудованная кухня общего пользования. Кабельное телевидение.
            Интернет.
          </div>
        </div>
      </div>
      <div id="rooms-section">
        <Carousel items={rooms} />
      </div>

      <Gallery />

      <h2 className="contacts-h2" id="info-section">
        Информация
      </h2>
      <div className="info-hotel">
        <InfoHotel />
      </div>

      <h2 className="contacts-h2">Как нас найти</h2>

      <div className="map-contacts" id="contacts-section">
        <MapLocation />
      </div>

      {!scrinWidth ? (
        <div className="reviews">
          <FishAnimation />
          <div
            style={{
              margin: "0 auto",
              width: "560px",
              height: "800px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <iframe
              style={{
                width: "100%",
                height: "90%",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
              src="https://yandex.ru/maps-reviews-widget/1126085566?comments&sort=rating_desc"
              title="Yandex Map Widget"
            ></iframe>
          </div>
        </div>
      ) : null}

      <div className="footer">
        <WaveAnimation />
        <img className="footer-img" src="/img/logo.png" alt="" />
      </div>
    </div>
  );
};
// href="/home#targetSection"
export default MainPage;
