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
      width="294"
      height="252"
      style={{
        padding: "0 !important",
        margin: "0 !important",
        border: "none !important",
        background: "none !important",
        backgroundColor: "transparent !important",
      }}
      marginHeight="0"
      marginWidth="0"
      frameBorder="0"
      scrolling="no"
      comment="/defined/"
      src="https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjpmYWxzZSwidy0xMSI6ZmFsc2UsInctMTMiOmZhbHNlLCJ3LTE0IjpmYWxzZSwidy0xNSI6dHJ1ZSwidy0xMTAiOnRydWUsInctd2lkdGgtMCI6ZmFsc2UsInctd2lkdGgtMSI6ZmFsc2UsInctd2lkdGgtMiI6dHJ1ZSwidy0xNiI6IjQ4cHgiLCJ3LTE5IjoiMzIiLCJ3LTE3IjoiMTYiLCJ3LTIxIjp0cnVlLCJiZ2ltYWdlIjo3LCJiZ2ltYWdlU2V0Ijp0cnVlLCJ3LTIxYzAiOiIjNDRiY2M2Iiwidy0wIjpmYWxzZSwidy0zIjpmYWxzZSwidy0zYzAiOiIjMzQzNDM0Iiwidy0zYjAiOiIxIiwidy02IjoiIzA2OTJlMiIsInctMjAiOnRydWUsInctNCI6IiMwMDAwMDAiLCJ3LTE4Ijp0cnVlLCJ3LXdpZHRoLTJjLTAiOiIyMDAiLCJ3LTExNSI6ZmFsc2V9&lang=ru&cityid=28657"
      title="Digital Clock"
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
