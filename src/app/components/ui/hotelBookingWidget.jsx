// import React, { useEffect, useState } from "react";

// const HotelWidget = () => {
//   // Формируем URL для iframe с вашим hotelId
//   const iframeUrl = `https://bookonline24.ru/widget/embed/4394f0c6-a98b-4547-82c0-dc4af910313f?version=2`;

//   return (
//     <div style={{ width: "100%", minHeight: "650px", position: "relative" }}>
//       <iframe
//         src={iframeUrl}
//         title="Онлайн бронирование отеля"
//         style={{
//           width: "100%",
//           height: "100%",
//           border: "none",
//           minHeight: "650px",
//           overflow: "hidden",
//         }}
//         allow="payment"
//         loading="lazy"
//       />

//       {/* Fallback контент для старых браузеров */}
//       <noscript>
//         <div style={{ padding: "20px", textAlign: "center" }}>
//           <p>
//             Для работы виджета бронирования необходим JavaScript. Пожалуйста,
//             включите его в настройках браузера.
//           </p>
//           <a
//             href="https://bookonline24.ru/"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               display: "inline-block",
//               padding: "10px 20px",
//               backgroundColor: "#2c3e50",
//               color: "white",
//               borderRadius: "4px",
//               textDecoration: "none",
//               marginTop: "10px",
//             }}
//           >
//             Перейти к бронированию
//           </a>
//         </div>
//       </noscript>
//     </div>
//   );
// };

// export default HotelWidget;

import React, { useEffect } from "react";

const HotelWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function(k,o,t,e,l){
          l = document.createElement("script");
          l.type = "text/javascript";
          l.src = "https://bookonline24.ru/widget.js";
          l.async = !0;
          l.onload = l.onreadystatechange = function() {
              e = this.readyState;
              !o && (!e || e === "complete") && (o = 1) && k();
          };
          t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(l, t);
      })(function(){
          HotelWidget.init({
              hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
              version: "2",
              baseUrl: "https://bookonline24.ru/",
              hooks: {
                  onError: function(e) { console.error("onError", e); },
                  onInit: function() { console.log("onInit"); },
                  onBooking: function(v) { console.log("onBooking", v) }
              }
          }); 

          HotelWidget.add({
              type: "bookingForm",
              inline: false,
              appearance: { container: "WidgetVerticalBlockId" }
          });

          HotelWidget.add({
              type: "bookingForm",
              inline: true,
              appearance: { container: "WidgetHorizontalBlockId" }
          });

          HotelWidget.add({
              type: "roomsList",
              appearance: { container: "WidgetRoomsListId" }
          });

          HotelWidget.add({
              type: "availabilityCalendar",
              months: 1,
              appearance: { container: "WidgetVerticalAvailabilityCalendarId" }
          });

          HotelWidget.add({
              type: "availabilityCalendar",
              months: 2,
              appearance: { container: "WidgetHorizontalAvailabilityCalendarId" }
          });

          HotelWidget.add({
              type: "showCheckAvailabilityButtonForMobileDevices",
              appearance: { container: "WidgetShowCheckAvailabilityButtonForMobileDevicesId" }
          });
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* <div id="WidgetVerticalBlockId"></div> */}
      <div id="WidgetHorizontalBlockId"></div>
      {/* <div id="WidgetRoomsListId"></div>
      <div id="WidgetVerticalAvailabilityCalendarId"></div>
      <div id="WidgetHorizontalAvailabilityCalendarId"></div>
      <div id="WidgetShowCheckAvailabilityButtonForMobileDevicesId"></div> */}
    </div>
  );
};

export default HotelWidget;
