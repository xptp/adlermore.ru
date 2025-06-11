import React from "react";
import HotelWidget from "./hotelBookingWidget";
import "../../styles/ui/imgBlock.scss";
// import video from "./video/mainVideo.mp4";
// import { useWindowWidth } from "../hooks/useWindowWidth";
const BookingImg = () => {
  // const width = useWindowWidth();
  return (
    <div className="img-block">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/video/mainVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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

{
  /* <video autoPlay muted loop playsInline>
        <source src="/video/mainVideo.mp4" type="video/mp4" />
      </video> */
}
