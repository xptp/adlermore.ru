import { useEffect } from "react";
import ".././../styles/ui/hotelBookingWidget.scss";

const HotelBookingWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://bookonline24.ru/widget.js";
      script.async = true;
      script.onload = initializeWidget;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const initializeWidget = () => {
    if (window.HotelWidget) {
      window.HotelWidget.init({
        hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
        version: "2",
        baseUrl: "https://bookonline24.ru/",
        hooks: {
          onError: (e) => console.error("Ошибка виджета:", e),
          onInit: () => console.log("Виджет загружен!"),
          onBooking: (v) => console.log("Бронирование:", v),
        },
      });

      // Форма бронирования (горизонтальная)
      window.HotelWidget.add({
        type: "bookingForm",
        inline: true, // Горизонтальный layout
        appearance: {
          container: "booking-widget-container",
        },
      });
    }
  };

  return (
    <div className="widget-container">
      <div id="booking-widget-container"></div>
    </div>
  );
};

export default HotelBookingWidget;
