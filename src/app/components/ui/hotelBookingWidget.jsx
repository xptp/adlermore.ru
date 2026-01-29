import React, { useEffect, useRef  } from "react";

const HotelWidget = () => {
  const widgetRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    const loadScript = () => {
      if (scriptLoaded.current) return;

      const script = document.createElement('script');
      script.src = '//widget.reservationsteps.ru/js/bnovo.js';
      script.async = true;
      script.onload = initializeWidget;
      script.onerror = () => {
        console.error('Failed to load Bnovo widget script');
      };
      document.body.appendChild(script);
      
      scriptLoaded.current = true;
    };

    const initializeWidget = () => {
      // Используем window для доступа к глобальному объекту
      if (window.Bnovo_Widget && widgetRef.current) {
        window.Bnovo_Widget.init(() => {
          window.Bnovo_Widget.open(widgetRef.current, {
            type: "horizontal",
            uid: "5e44e758-8a03-4ce0-9bb7-2426e8c776b9",
            // ... все остальные параметры
          });
        });
      }
    };

    // Проверяем, если скрипт уже загружен
    if (window.Bnovo_Widget) {
      initializeWidget();
    } else {
      loadScript();
    }

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="left" ref={widgetRef}>
      <a 
        href="https://bnovo.ru/" 
        id="_bnovo_link_" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Bnovo
      </a>
    </div>
  );
};

export default HotelWidget;
// const HotelWidget = () => {
//   // useEffect(() => {
//   //   const script = document.createElement("script");
//   //   script.type = "text/javascript";
//   //   script.innerHTML = `
//   //     (function(k,o,t,e,l){
//   //       l = document.createElement("script");
//   //       l.type = "text/javascript";
//   //       l.src = "https://bookonline24.ru/widget.js";
//   //       l.async = !0;
//   //       l.onload = l.onreadystatechange = function() {
//   //         e = this.readyState;
//   //         !o && (!e || e === "complete") && (o = 1) && k();
//   //       };
//   //       t = document.getElementsByTagName("script")[0];
//   //       t.parentNode.insertBefore(l, t);
//   //     })(function(){
//   //       HotelWidget.init({
//   //         hotelId: "4394f0c6-a98b-4547-82c0-dc4af910313f",
//   //         version: "2",
//   //         baseUrl: "https://bookonline24.ru/",
//   //         hooks: {
//   //           onError: function(e) { console.error("onError", e); },
//   //           onInit: function() { console.log("onInit"); },
//   //           onBooking: function(v) { console.log("onBooking", v) }
//   //         }
//   //       }); 

//   //       HotelWidget.add({
//   //         type: "bookingForm",
//   //         inline: false,
//   //         appearance: {
//   //           container: "WidgetVerticalBlockId"
//   //         }
//   //       });

//   //       HotelWidget.add({
//   //         type: "bookingForm",
//   //         inline: true,
//   //         appearance: {
//   //           container: "WidgetHorizontalBlockId"
//   //         }
//   //       });

//   //       HotelWidget.add({
//   //         type: "roomsList",
//   //         appearance: {
//   //           container: "WidgetRoomsListId"
//   //         }
//   //       });

//   //       HotelWidget.add({
//   //         type: "availabilityCalendar",
//   //         months: 1,
//   //         appearance: {
//   //           container: "WidgetVerticalAvailabilityCalendarId"
//   //         }
//   //       });

//   //       HotelWidget.add({
//   //         type: "availabilityCalendar",
//   //         months: 2,
//   //         appearance: {
//   //           container: "WidgetHorizontalAvailabilityCalendarId"
//   //         }
//   //       });

//   //       HotelWidget.add({
//   //         type: "showCheckAvailabilityButtonForMobileDevices",
//   //         appearance: {
//   //           container: "WidgetShowCheckAvailabilityButtonForMobileDevicesId"
//   //         }
//   //       });
//   //     });
//   //   `;
//   //   document.body.appendChild(script);

//   //   return () => {
//   //     document.body.removeChild(script);
//   //   };
//   // }, []);
  

//   return (
//     <div>
//       {/* <div id="WidgetVerticalBlockId"></div> */}
//       <div id="WidgetHorizontalBlockId"></div>
//       {/* <div id="WidgetRoomsListId"></div>
//       <div id="WidgetVerticalAvailabilityCalendarId"></div>
//       <div id="WidgetHorizontalAvailabilityCalendarId"></div>
//       <div id="WidgetShowCheckAvailabilityButtonForMobileDevicesId"></div> */}
//     </div>
//   );

  
// };

// export default HotelWidget;
