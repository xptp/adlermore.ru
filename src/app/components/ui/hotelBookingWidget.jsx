import React, { useEffect, useState } from "react";

const HotelWidget = () => {
  const [widgetError, setWidgetError] = useState(null);

  useEffect(() => {
    const initializeWidget = () => {
      try {
        if (!window.HotelWidget) {
          throw new Error("Widget script not loaded");
        }

        window.HotelWidget.init({
          hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
          version: "2",
          baseUrl: "https://bookonline24.ru/",
          hooks: {
            onError: (error) => {
              console.error("Widget Error:", error);
              setWidgetError("Ошибка загрузки виджета бронирования");
            },
            onInit: () => {
              console.log("Widget initialized successfully");
              setWidgetError(null);
            },
            onBooking: (data) => console.log("Booking completed:", data),
          },
        });

        window.HotelWidget.add({
          type: "bookingForm",
          inline: false,
          appearance: {
            container: "booking-widget-container",
          },
        });
      } catch (error) {
        console.error("Widget initialization error:", error);
        setWidgetError("Ошибка инициализации виджета");
      }
    };

    if (window.HotelWidget) {
      initializeWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://bookonline24.ru/widget.js";
      script.async = true;
      script.onload = initializeWidget;
      script.onerror = () => {
        setWidgetError("Не удалось загрузить виджет бронирования");
      };
      document.body.appendChild(script);
    }

    return () => {
      // Очистка при размонтировании
    };
  }, []);

  if (widgetError) {
    return (
      <div className="widget-error">
        <p>{widgetError}</p>
        <p>
          Пожалуйста, попробуйте перезагрузить страницу или свяжитесь с нами.
        </p>
      </div>
    );
  }

  return (
    <div id="booking-widget-container" style={{ minHeight: "500px" }}></div>
  );
};

export default HotelWidget;
