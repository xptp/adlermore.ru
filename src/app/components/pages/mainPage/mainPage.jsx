import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../ui/navBar";
import "../../../styles/pages/mainPage.scss";
import Carousel from "../../ui/Carousel";
import WeatherWidget from "../../ui/weather";
import UsefulInfo from "../../ui/clock";
import { MdOutlineArrowCircleUp } from "react-icons/md";
import BookingImg from "../../ui/bookingImg";
import MapContacts from "../../ui/mapContacts";
import rooms from "../../../data/rooms.json";
import NavBarScroll from "../../ui/navBarScroll";

const MainPage = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const triggerBlockRef = useRef();
  // const items = [
  //   {
  //     image:
  //       "https://downloader.disk.yandex.ru/preview/9fe94223f6fdfb4b03daaf7f71c1045ad48a31334e0e4631a3b5536b56e66992/67db1222/yi6pjBnGVbr8nDHI5jP8j_eFua_Ba4hRGnwmwnGkUHawYT6tsLiwu5Tr1aAPPFOXGfF1lvfwHmeZJSJGk9s1oA%3D%3D?uid=0&filename=1-изображения-14.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2543x1299",
  //     title: "Двухместный стандарт",
  //     description:
  //       "Привлекательный классический стандартный номер предназначен для размещения до двух гостей и предлагает комфортное пространство с широкой кроватью и новыми ортопедическими матрасами. В номере имеется все необходимое для удовлетворения потребностей гостей, включая телевизор, холодильник, кондиционер, электрочайник и полный набор мебели. Гостям также доступен собственный санузел и балкон с видом либо на бассейн либо на оживленную улицу, создающий расслабляющую атмосферу для отдыха и наслаждения прекрасным видом.",
  //     size: 20,
  //   },
  //   {
  //     image:
  //       "https://downloader.disk.yandex.ru/preview/c36f475f9d7dd92cb22759bab1ea5ba33017796036098e5d85956ae3b2a36757/67db1223/lW7SfppC0arr3gIR-pnvpI4wtL4O-nJlhj0f-rP1SQqoAiOpnOkvgczys-YFEjCEBPeovs8tlbCnzyIVpMD5-A%3D%3D?uid=0&filename=4933120.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2543x1299",
  //     title: "Комфорт с балконом",
  //     description:
  //       "Просторный номер с элегантным дизайном, удобной кроватью, мини-баром, телевизором и стильной ванной комнатой.",
  //   },
  //   {
  //     image:
  //       "https://downloader.disk.yandex.ru/preview/5e80b4433bcd4145b1291b716aa3dd863d978f2c53287b82c814665eebb1fddd/67db1224/ZI_Cuaq5bG1wSgelMNdu1vd_CObjP5HvkuAmBZiXCZS92wELkfibdZZqPomlPKzJIG5YTCtrFhnb_EuqJ4hOaA%3D%3D?uid=0&filename=4933146.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2560x1316",
  //     title: "Двухкомнатный люкс",
  //     description:
  //       "Luxury suite with a jacuzzi and a panoramic view of the mountains.",
  //   },
  // ];
  console.log(rooms);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Если верх триггер-блока выше верха окна — показываем навбар
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
      <div className="info" id="info-section">
        <img
          className="info-img"
          src="https://hotel-blacksea.com/img/three_photos_new.webp"
          alt=""
        />
        <div className="info-description">
          <h2>О НАС</h2>
          <div className="info-des-short">
            Планируете отпуск в России? Посетите Адлер!
          </div>
          <div className="info-des-long">
            Отдых в сердце Адлера! Район Курортного городка! Здесь есть всё для
            вашего комфортного отдыха. Муниципальный оборудованный пляж в 5
            минутах. Прогулочный зелёный парк. Океанариум. Дельфинарий.
            Террариум. Парк аттракционов. Множество точек общественного питания.
            Сетевые продуктовые магазины. Ж/д вокзал в 10 минутах. Аэропорт Сочи
            в 15 минутах. Гостевой дом «Море» оснащён огромным выбором номерного
            фонда. Теплый бассейн на крыше с морской водой и с видом на море.{" "}
          </div>
          <div className="info-des-long">
            К вашим услугам укомплектованный всем необходимым номер. Две
            просторные террасы. Оборудованная кухня общего пользования.
            Кабельное телевидение. Интернет.
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
            <button>Забронировать</button>
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
      <div className="gallery-block">
        <h2>Галлерея</h2>
        <div className="gallery-img-block">
          <img src="https://hotel-blacksea.com/img/galleryfull38.jpg" alt="" />
          <img src="https://hotel-blacksea.com/img/galleryfull22.jpg" alt="" />
          <img src="https://hotel-blacksea.com/img/galleryfull39.jpg" alt="" />
          <img src="https://hotel-blacksea.com/img/galleryfull15.jpg" alt="" />
        </div>
        <button>Больше фото</button>
      </div>

      <div className="weather-clock-block">
        <WeatherWidget />

        <UsefulInfo />
        <iframe
          src="https://yandex.ru/sprav/widget/rating-badge/1126085566?type=alt"
          width="150"
          height="50"
          frameborder="0"
        ></iframe>
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
            src="https://yandex.ru/maps-reviews-widget/1126085566?comments"
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

      <h2 className="contacts-h2">Контактная информация</h2>
      <div className="map-contacts" id="contacts-section">
        <MapContacts />
      </div>

      <div className="footer">
        <div>
          <img className="footer-img" src="/img/logo.png" alt="" />
          <button
            onClick={() =>
              document
                .getElementById("up")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <MdOutlineArrowCircleUp />
          </button>
        </div>
      </div>
    </div>
  );
};
// href="/home#targetSection"
export default MainPage;
