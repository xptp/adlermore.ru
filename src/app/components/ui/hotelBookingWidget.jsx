import React, { useEffect, useState } from "react";

const HotelWidget = () => {
  const [widgetError, setWidgetError] = useState(null);
  const widgetContainerRef = React.useRef(null);

  useEffect(() => {
    // Функция для безопасной обработки ошибок
    const safeErrorHandler = (error) => {
      try {
        // Преобразуем ошибку в простой объект, избегая циклических ссылок
        const errorData = {
          message: error.message,
          name: error.name,
          stack: error.stack,
        };
        console.error("Widget Error:", errorData);
        setWidgetError("Произошла ошибка при загрузке виджета бронирования");
      } catch (e) {
        console.error("Error handling error:", e);
      }
    };

    // Функция инициализации виджета
    const initializeWidget = () => {
      if (!window.HotelWidget) {
        safeErrorHandler(new Error("Widget script not loaded"));
        return;
      }

      try {
        window.HotelWidget.init({
          hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
          version: "2",
          baseUrl: "https://bookonline24.ru/",
          hooks: {
            onError: safeErrorHandler,
            onInit: () => {
              console.log("Widget initialized successfully");
              setWidgetError(null);

              // Добавляем виджет после инициализации
              try {
                window.HotelWidget.add({
                  type: "bookingForm",
                  inline: false,
                  appearance: {
                    container: widgetContainerRef.current?.id,
                  },
                });
              } catch (addError) {
                safeErrorHandler(addError);
              }
            },
            onBooking: (data) => console.log("Booking completed:", data),
          },
        });
      } catch (initError) {
        safeErrorHandler(initError);
      }
    };

    // Загрузка скрипта виджета
    const loadWidgetScript = () => {
      const script = document.createElement("script");
      script.src = "https://bookonline24.ru/widget.js";
      script.async = true;
      script.onload = initializeWidget;
      script.onerror = () => {
        safeErrorHandler(new Error("Failed to load widget script"));
      };

      // Добавляем скрипт в body, а не в head, чтобы избежать конфликтов
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    // Проверяем, может быть виджет уже загружен
    if (window.HotelWidget) {
      initializeWidget();
    } else {
      const cleanup = loadWidgetScript();
      return cleanup;
    }

    return () => {
      // Дополнительная очистка при необходимости
    };
  }, []);

  if (widgetError) {
    return (
      <div className="widget-error">
        <h4>Ошибка загрузки виджета бронирования</h4>
        <p>
          Пожалуйста, попробуйте обновить страницу или свяжитесь с поддержкой.
        </p>
        <button onClick={() => window.location.reload()}>
          Обновить страницу
        </button>
      </div>
    );
  }

  return (
    <div
      id="booking-widget-container"
      ref={widgetContainerRef}
      style={{
        minHeight: "500px",
        position: "relative",
      }}
    >
      {/* Показываем индикатор загрузки, пока виджет не инициализирован */}
      {!window.HotelWidget && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Загрузка виджета бронирования...
        </div>
      )}
    </div>
  );
};

export default HotelWidget;
