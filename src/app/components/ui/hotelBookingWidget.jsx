import { useEffect } from "react";
import "../../styles/ui/hotelWidget.scss";

const initializeHotelWidget = () => {
  if (!window.HotelWidget) return;

  window.HotelWidget.init({
    hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
    version: "2",
    baseUrl: "https://bookonline24.ru/",
    hooks: {
      onError: (e) => console.error("onError", e),
      onInit: () => console.log("Widget initialized"),
      onBooking: (v) => console.log("Booking completed", v),
    },
  });

  window.HotelWidget.add({
    type: "bookingForm",
    inline: true,
    appearance: {
      container: "booking-widget-container",
    },
  });
};

const HotelWidget = () => {
  useEffect(() => {
    // Проверяем, не загружен ли уже виджет
    if (window.HotelWidget) {
      initializeHotelWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://bookonline24.ru/widget.js";
    script.async = true;

    script.onload = () => {
      initializeHotelWidget();
    };

    document.body.appendChild(script);

    return () => {
      // Очистка при размонтировании компонента
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Дополнительная очистка виджета, если нужно
      if (window.HotelWidget && window.HotelWidget.destroy) {
        window.HotelWidget.destroy();
      }
    };
  }, []);

  return (
    <div className="widget-container">
      <div id="booking-widget-container"></div>
    </div>
  );
};

export default HotelWidget;
