import React, { useEffect } from "react";

const WeatherWidget = () => {
  // Добавляем скрипт динамически
  useEffect(() => {
    // Динамически добавляем скрипт
    const script = document.createElement("script");
    script.src =
      "https://world-weather.ru/wwinformer.php?userid=d2b9ba3c7b32eff1e8db264853bf8dd9";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Удаляем скрипт при размонтировании компонента
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        id="d2b9ba3c7b32eff1e8db264853bf8dd9"
        className="ww-informers-box-854753"
      >
        <p className="ww-informers-box-854754">
          <a href="https://world-weather.ru/pogoda/russia/adler/7days/">
            Подробнее о прогнозе на world-weather.ru
          </a>
          <br />
          <a href="https://world-weather.ru/pogoda/russia/bryansk/">
            Прогноз погоды в Брянске на завтра
          </a>
        </p>
      </div>

      <style jsx>{`
        .ww-informers-box-854754 {
          -webkit-animation-name: ww-informers54;
          animation-name: ww-informers54;
          -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
          white-space: nowrap;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          font-size: 12px;
          font-family: Arial;
          line-height: 18px;
          text-align: center;
        }
        @-webkit-keyframes ww-informers54 {
          0%,
          80% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes ww-informers54 {
          0%,
          80% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default WeatherWidget;
