import React, { useEffect } from "react";

const HotelWidget = () => {
  useEffect(() => {
    // Создаем функцию для загрузки скрипта
    const loadWidgetScript = () => {
      (function (k, o, t, e, l) {
        l = document.createElement("script");
        l.type = "text/javascript";
        l.src = "https://bookonline24.ru/widget.js";
        l.async = !0;
        l.onload = l.onreadystatechange = function () {
          e = this.readyState;
          !o && (!e || e === "complete") && (o = 1) && k();
        };
        t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(l, t);
      })(function () {
        if (window.HotelWidget) {
          window.HotelWidget.init({
            hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
            version: "2",
            baseUrl: "https://bookonline24.ru/",
            hooks: {
              onError: function (e) {
                console.error("onError", e);
              },
              onInit: function () {
                console.log("onInit");
              },
              onBooking: function (v) {
                console.log("onBooking", v);
              },
            },
          });
        }
      });
    };

    // Проверяем, не загружен ли уже скрипт
    if (
      !document.querySelector('script[src="https://bookonline24.ru/widget.js"]')
    ) {
      loadWidgetScript();
    }

    // Инициализируем виджеты после загрузки скрипта
    const initWidgets = () => {
      if (window.HotelWidget) {
        // Вертикальная форма бронирования
        window.HotelWidget.add({
          type: "bookingForm",
          inline: false,
          appearance: {
            container: "WidgetVerticalBlockId",
          },
        });

        // Горизонтальная форма бронирования
        window.HotelWidget.add({
          type: "bookingForm",
          inline: true,
          appearance: {
            container: "WidgetHorizontalBlockId",
          },
        });

        // Список номеров
        window.HotelWidget.add({
          type: "roomsList",
          appearance: {
            container: "WidgetRoomsListId",
          },
        });
      }
    };

    // Если скрипт уже загружен, инициализируем сразу
    if (window.HotelWidget) {
      initWidgets();
    } else {
      // Иначе ждем, когда он загрузится
      window.addEventListener("hotelWidgetLoaded", initWidgets);
    }

    // Очистка при размонтировании
    return () => {
      window.removeEventListener("hotelWidgetLoaded", initWidgets);
    };
  }, []);

  return (
    <div>
      {/* Вертикальная форма бронирования */}
      <div id="WidgetVerticalBlockId"></div>

      {/* Горизонтальная форма бронирования */}
      <div id="WidgetHorizontalBlockId"></div>

      {/* Список номеров */}
      <div id="WidgetRoomsListId"></div>

      {/* Добавьте другие контейнеры по мере необходимости */}
    </div>
  );
};

export default HotelWidget;
