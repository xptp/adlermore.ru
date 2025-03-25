import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../../styles/ui/swiperComponent.scss";

const SwiperComponent = ({ objImages, clName }) => {
  console.log(objImages);

  return (
    <div className={clName}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        // onSlideChange={() => console.log("ffffff")}
      >
        {objImages.map((o) => (
          <SwiperSlide key={o.id}>
            <img className="images-swiper" src={o.image} alt={o.alt || ""} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
