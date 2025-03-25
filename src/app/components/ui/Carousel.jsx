import React, { useState } from "react";
import "../../styles/ui/carousel.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { HiArrowLongRight } from "react-icons/hi2";
import SwiperComponent from "./swiperComponent";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-item-description">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="carousel-btn-containter">
                <button className="carousel-btn-book">
                  <div className="arrow-btn">
                    <HiArrowLongRight />
                  </div>
                  Забронировать
                </button>

                <div>
                  <button className="carousel-btn btn-right" onClick={goToPrev}>
                    <SlArrowLeft />
                  </button>
                  <button className="carousel-btn btn-left" onClick={goToNext}>
                    <SlArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <SwiperComponent
              objImages={item.img}
              clName={"room-images-swiper"}
            />
            {/* <img className="carousel-img" src={item.image} alt={item.title} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
