import React, { useEffect } from "react";

const WeatherWidget = () => {
  // Добавляем скрипт динамически
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://world-weather.ru/wwinformer.php?userid=e56c837deaa3dd43b01f86536a7df1d6";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    // Очистка при размонтировании компонента
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="e56c837deaa3dd43b01f86536a7df1d6"
      className="ww-informers-box-854753"
    >
      <p className="ww-informers-box-854754">
        <a href="https://world-weather.ru/pogoda/russia/adler/month/">
          {/* Подробнее о погоде в Москве на 30 дней */}
        </a>
        <br />
        <a href="https://world-weather.ru/pogoda/russia/chelyabinsk/">
          {/* https://world-weather.ru/pogoda/russia/chelyabinsk/ */}
        </a>
      </p>
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
    </div>
  );
};

export default WeatherWidget;
