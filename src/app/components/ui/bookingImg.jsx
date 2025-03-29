import React from "react";
import HotelBookingWidget from "./hotelBookingWidget";
const BookingImg = () => {
  return (
    <div className="img-block">
      <div className="img-block-content">
        <div className="img_text">Рады гостям круглый год!</div>
        <div className="wiget-img">
          <HotelBookingWidget />
        </div>
      </div>
    </div>
  );
};

export default BookingImg;
