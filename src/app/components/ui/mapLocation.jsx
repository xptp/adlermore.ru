import React from "react";
import "../../styles/ui/mapLocation.scss";
import WeatherWidget from "./weather";
import UsefulInfo from "./clock";

const MapLocation = () => {
  return (
    <>
      <div className="contacts">
        <div className="h3-a-container">
          <h3>Наш адрес</h3>
          <a
            href="https://yandex.ru/maps/239/sochi/?from=mapframe&ll=39.895485%2C43.476799&mode=routes&rtext=~43.476131%2C39.895524&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1126085566&source=mapframe&utm_source=mapframe&z=18"
            className="route-btn"
            target="blank"
          >
            Построить маршурт
          </a>
        </div>
        <p>
          Краснодарский край, Сочи, жилой район Адлер, переулок
          <br /> Чкалова, 9А
        </p>

        <div className="weather-clock-block">
          <UsefulInfo />
          <WeatherWidget />
        </div>
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
            // src="https://yandex.ru/map-widget/v1/?ll=39.894695%2C43.475238&z=18.2"
            width="600"
            height="500"
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

export default MapLocation;
