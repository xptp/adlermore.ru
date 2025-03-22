import React from "react";
import "../../styles/ui/clock.scss";

const UsefulInfo = () => {
  return (
    <div className="bs-usefull__info">
      <div className="bs-usefull__info-time-widget">
        <p className="bs-usefull__info-time">Время в Адлере</p>
        <iframe
          title="Time in Adler"
          className="irframe"
          src="https://www.clocklink.com/html5embed.php?clock=004&timezone=Russia_Sochi&color=blue&size=120&Title=&Message=&Target=&From=2021,1,1,0,0,0&Color=blue"
        ></iframe>
      </div>
      {/* <img
        className="img-clock"
        src="https://hotel-blacksea.com/img/galleryfull39.jpg"
        alt=""
      /> */}
      {/* <a
        target="_blank"
        rel="noopener noreferrer"
        href="/files/blacksea-rules.pdf"
        className="bs-usefull__rules-link"
      >
        Правила проживания
      </a> */}
    </div>
  );
};

export default UsefulInfo;
