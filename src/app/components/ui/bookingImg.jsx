import React from "react";
import HotelWidget from "./hotelBookingWidget";
import "../../styles/ui/imgBlock.scss";
// import { useWindowWidth } from "../hooks/useWindowWidth";
const BookingImg = () => {
  // const width = useWindowWidth();
  return (
    <div className="img-block">
      <div className="img-block-content">
        <div className="img_text">Рады гостям круглый год!</div>
        <div className="wiget-img">
          <HotelWidget />
        </div>
      </div>
    </div>
  );
};

export default BookingImg;
