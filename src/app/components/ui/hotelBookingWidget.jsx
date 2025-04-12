import React, { useEffect, useState } from "react";

const HotelWidget = () => {
  // Формируем URL для iframe с вашим hotelId
  const iframeUrl = `https://bookonline24.ru/widget/embed/4394f0c6-a98b-4547-82c0-dc4af910313f?version=2`;

  return (
    <div style={{ width: "100%", minHeight: "650px", position: "relative" }}>
      <iframe
        src={iframeUrl}
        title="Онлайн бронирование отеля"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          minHeight: "650px",
          overflow: "hidden",
        }}
        allow="payment"
        loading="lazy"
      />

      {/* Fallback контент для старых браузеров */}
      <noscript>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>
            Для работы виджета бронирования необходим JavaScript. Пожалуйста,
            включите его в настройках браузера.
          </p>
          <a
            href="https://bookonline24.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#2c3e50",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            Перейти к бронированию
          </a>
        </div>
      </noscript>
    </div>
  );
};

export default HotelWidget;
