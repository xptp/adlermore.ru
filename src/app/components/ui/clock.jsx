import React, { useEffect } from "react";
import "../../styles/ui/clock.scss";

const UsefulInfo = () => {
  useEffect(() => {
    // Загрузка скрипта виджета
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//cdn.dayspedia.com/js/dwidget.min.v80654f80.js";
    script.onload = () => {
      if (window.dwidget) {
        window.dwidget.init("dayspedia_widget_3b45fe4d378fe282");
      }
    };

    document.body.appendChild(script);

    return () => {
      // Очистка при размонтировании
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      width="285"
      height="220"
      style={{
        padding: "0!important",
        margin: "0!important",
        border: "none!important",
        background: "none!important",
        background: "transparent!important",
      }}
      marginHeight="0"
      marginWidth="0"
      frameBorder="0"
      scrolling="no"
      comment="/*defined*/"
      src="https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjpmYWxzZSwidy0xMSI6dHJ1ZSwidy0xMyI6dHJ1ZSwidy0xNCI6ZmFsc2UsInctMTUiOmZhbHNlLCJ3LTExMCI6ZmFsc2UsInctd2lkdGgtMCI6dHJ1ZSwidy13aWR0aC0xIjpmYWxzZSwidy13aWR0aC0yIjpmYWxzZSwidy0xNiI6IjI0cHgiLCJ3LTE5IjoiNDgiLCJ3LTE3IjoiMTYiLCJ3LTIxIjp0cnVlLCJiZ2ltYWdlIjoxMCwiYmdpbWFnZVNldCI6dHJ1ZSwidy0yMWMwIjoiI2ZmZmZmZmYiLCJ3LTEiOiIjMzQzNDM0Iiwidy0zIjp0cnVlLCJ3LTNjMCI6IiMzNDM0MzQiLCJ3LTNiMCI6IjEiLCJ3LTYiOiIjMzQzNDM0Iiwidy0yMCI6dHJ1ZSwidy00IjoiIzAwN2RiZiIsInctMTgiOmZhbHNlLCJ3LXdpZHRoLTJjLTAiOiIzMDAiLCJ3LTExNSI6ZmFsc2V9&lang=ru&cityid=28657"
      title="Dayspedia Widget"
    />
  );
};

export default UsefulInfo;

// return (
//   <div className="bs-usefull__info">
//     <div className="bs-usefull__info-time-widget">
//       <p className="bs-usefull__info-time">Время и погода в Адлере</p>
//       <iframe
//         title="Time in Adler"
//         className="irframe"
//         src="https://www.clocklink.com/html5embed.php?clock=004&timezone=Russia_Sochi&color=blue&size=120&Title=&Message=&Target=&From=2021,1,1,0,0,0&Color=blue"
//       ></iframe>
//     </div>
//     {/* <img
//       className="img-clock"
//       src="https://hotel-blacksea.com/img/galleryfull39.jpg"
//       alt=""
//     /> */}
//     {/* <a
//       target="_blank"
//       rel="noopener noreferrer"
//       href="/files/blacksea-rules.pdf"
//       className="bs-usefull__rules-link"
//     >
//       Правила проживания
//     </a> */}
//   </div>
// );
