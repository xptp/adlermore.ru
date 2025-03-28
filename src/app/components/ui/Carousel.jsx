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
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
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
                  // onClick={() => openModal(item)}
                >
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
          </div>
        ))}
      </div>

      {/* Модальное окно остается внутри карусели, но стилизуется на весь экран */}
      {isModalOpen && (
        <div className="modal-overlay-carousel">
          <div className="modal-content-carousel">
            <button className="close-modal-btn-carousel" onClick={closeModal}>
              <IoMdClose />
            </button>

            <div className="modal-div-container-carousel">
              <div>
                <SwiperComponent
                  objImages={currentModalItem.img}
                  clName={"modal-room-images-swiper"}
                />
              </div>

              <div className="modal-text-content-carousel">
                <h2 className="h2-name-modal">{currentModalItem.title}</h2>
                <div className="p-text-modal">
                  <h4>Оснащение номера:</h4>

                  {currentModalItem.other.map((o) => (
                    <>
                      <p className="p-other-modal" key={o.id}>
                        {o.data}
                      </p>
                    </>
                  ))}

                  {/* {currentModalItem.description} */}
                </div>
              </div>
            </div>
            <div className="description-modal">
              <p>{currentModalItem.description}</p>
              <p className="p-size-modal">{currentModalItem.size} кв.м</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
