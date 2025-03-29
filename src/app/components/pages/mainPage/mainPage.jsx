import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../ui/navBar";
import "../../../styles/pages/mainPage.scss";
import Carousel from "../../ui/Carousel";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import BookingImg from "../../ui/bookingImg";
import MapLocation from "../../ui/mapLocation";
import rooms from "../../../data/rooms.json";
import NavBarScroll from "../../ui/navBarScroll";
import InfoHotel from "../../ui/infoHotel";
import Gallery from "../../ui/gallery";

const MainPage = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
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
      {showStickyNav ? <NavBarScroll /> : null}
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
        <div className="info-description">
          <h2>О НАС</h2>
          <div className="info-des-short">
            Планируете отпуск в России? <strong>Адлер ждёт вас!</strong>
          </div>
          <div className="info-des-long">
            Отдых в сердце Адлера! Район Курортного городка! Здесь есть всё для
            вашего комфортного отдыха. Муниципальный оборудованный пляж в 5
            минутах. Прогулочный зелёный парк. Океанариум. Дельфинарий.
            Террариум. Парк аттракционов. Множество точек общественного питания.
            Сетевые продуктовые магазины. Ж/д вокзал в 10 минутах. Аэропорт Сочи
            в 15 минутах.
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

      <div className="services-block">
        <h2>Услуги</h2>
        <div className="services-background-block">
          <div className="services-white-block">
            <h3>В номерах:</h3>
            <p>Современное оснащение</p>
            <p>Кабельное телевидение</p>
            <p>Высокоскоростной интернет</p>
            <p>Электронный мини-сейф</p>
            <p>
              Собственная ванная комната с комплектом <br /> душевых
              принадлежностей
            </p>
          </div>
        </div>
      </div>

      <div className="advantages-block">
        <h2>Наши преимущества</h2>
        <div className="advantages-box">
          <div className="advantages-div">
            <img src="https://hotel-blacksea.com/img/icons/map.png" alt="" />
            <p>Удобное расположение: 5 мин. от моря</p>
          </div>
          <div className="advantages-div">
            <img src="https://hotel-blacksea.com/img/icons/pool.png" alt="" />
            <p>Теплый бассейн на крыше с морской водой и видом на море</p>
          </div>
          <div className="advantages-div">
            <img src="https://hotel-blacksea.com/img/icons/glass.png" alt="" />
            <p>Бар около бассейна. Терраса для загара</p>
          </div>
          <div className="advantages-div">
            <img
              src="https://hotel-blacksea.com/img/icons/network.png"
              alt=""
            />
            <p>Бесплатный Wi-Fi</p>
          </div>
          <div className="advantages-div">
            <img
              src="https://hotel-blacksea.com/img/icons/suitcase.png"
              alt=""
            />
            <p>Камера хранения багажа</p>
          </div>
          <div className="advantages-div">
            <img
              src="https://hotel-blacksea.com/img/icons/parking.png"
              alt=""
            />
            <p>Охраняемая парковка на месте</p>
          </div>
        </div>
      </div>

      <Gallery />

      <h2 className="contacts-h2">Информация</h2>
      <div className="info-hotel" id="info-section">
        <InfoHotel />
      </div>
      <h2 className="contacts-h2">Как нас найти</h2>

      <div className="map-contacts" id="contacts-section">
        <MapLocation />
      </div>
      <div className="reviews">
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
              height: "100%",
              border: "1px solid #e6e6e6",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
            src="https://yandex.ru/maps-reviews-widget/1126085566?comments&sort=rating_desc"
            title="Yandex Map Widget"
          ></iframe>
          <a
            href="https://yandex.ru/maps/org/more/1126085566/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              color: "#b3b3b3",
              fontSize: "10px",
              fontFamily: "YS Text, sans-serif",
              padding: "0 20px",
              position: "absolute",
              bottom: "8px",
              width: "100%",
              textAlign: "center",
              left: "0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              maxHeight: "14px",
              whiteSpace: "nowrap",
              padding: "0 16px",
              boxSizing: "border-box",
            }}
          >
            Море на карте Сочи — Яндекс Карты
          </a>
        </div>
      </div>

      <div className="footer">
        <div>
          <img className="footer-img" src="/img/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};
// href="/home#targetSection"
export default MainPage;
