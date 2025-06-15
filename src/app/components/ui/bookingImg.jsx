import React, { useState } from "react";
import HotelWidget from "./hotelBookingWidget";
import "../../styles/ui/imgBlock.scss";
import { IoMdClose } from "react-icons/io";

const BookingImg = ({ vidth }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="img-block">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/video/mainVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="img-block-content">
        {vidth ? <div className="img_text"> Отель "Море" в Адлере</div> : null}
        <div className="img_text">
          {vidth
            ? "Здесь рады гостям круглый год!"
            : "Рады гостям круглый год!"}
        </div>
        <div className="wiget-img">{!vidth ? <HotelWidget /> : null}</div>
      </div>
      <button className="btn-prev" onClick={() => setIsModal(true)}>
        Видео презентация
      </button>
      {isModal ? (
        <div className="modal-video-overlay">
          {" "}
          <div className="modal-video-content">
            <button
              className="modal-video-close-btn"
              onClick={() => setIsModal(false)}
            >
              <IoMdClose />
            </button>
            <video controls className="modal-video">
              <source src="/video/mainVideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BookingImg;

{
  /* <video autoPlay muted loop playsInline>
        <source src="/video/mainVideo.mp4" type="video/mp4" />
      </video> */
}
