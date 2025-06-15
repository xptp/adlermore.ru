import React, { useEffect, useState } from "react";
import "../../styles/ui/carousel.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { HiArrowLongRight } from "react-icons/hi2";
import SwiperComponent from "./swiperComponent";
import { IoMdClose } from "react-icons/io";
import { TbResize } from "react-icons/tb";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalItem, setCurrentModalItem] = useState(null);
  useEffect(() => {
    console.log(currentModalItem);
  }, [currentModalItem]);

  const openModal = (item) => {
    setCurrentModalItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentModalItem(null);
  };

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
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="back-gr">
                <div className="carousel-item-description">
                  <h2 className="h2-carousel">{item.title}</h2>
                  <p className="sd-carousel">{item.shortDescription}</p>
                  <p className="size-carousel">
                    <TbResize /> {item.size} кв.м
                  </p>
                  <button
                    onClick={() => openModal(item)}
                    className="more-btn-carousel"
                  >
                    Подробнее
                  </button>
                  <div className="carousel-btn-containter">
                    <button
                      className="carousel-btn-book"
                      onClick={() =>
                        document
                          .getElementById("up")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <div className="arrow-btn">
                        <HiArrowLongRight />
                      </div>
                      Забронировать
                    </button>

                    <div className="carousel-btn-group">
                      <button
                        className="carousel-btn btn-right"
                        onClick={goToPrev}
                      >
                        <SlArrowLeft />
                      </button>
                      <button
                        className="carousel-btn btn-left"
                        onClick={goToNext}
                      >
                        <SlArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <SwiperComponent
                  objImages={item.img}
                  clName={"room-images-swiper"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно  */}
      {isModalOpen && (
        <div className="modal-overlay-carousel">
          <div className="modal-content-carousel">
            <button className="close-modal-btn-carousel" onClick={closeModal}>
              <IoMdClose />
            </button>

            <div className="modal-main-content">
              <div className="modal-image-section">
                <SwiperComponent
                  objImages={currentModalItem.img}
                  clName={"modal-room-images-swiper"}
                />
              </div>

              <div className="modal-text-section">
                <h2 className="modal-title">{currentModalItem.title}</h2>
                <div className="modal-description">
                  <p>{currentModalItem.description}</p>
                  <p className="room-size">{currentModalItem.size} кв.м</p>
                </div>
                <div>
                  <button
                    className="carousel-btn-more-book"
                    onClick={() => {
                      closeModal();
                      document
                        .getElementById("up")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Забронировать
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-features-container">
              {currentModalItem.other.map((category) => (
                <div key={category.id} className="feature-category">
                  <h4 className="category-title">{category.name}</h4>
                  <div className="feature-items">
                    {category.info.map((item) => (
                      <p key={item.id} className="feature-item">
                        {item.data || item.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
