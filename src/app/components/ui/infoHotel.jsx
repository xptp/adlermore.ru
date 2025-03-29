import React, { useState } from "react";
import "../../styles/ui/infoHotel.scss";
import { IoMdClose } from "react-icons/io";
const InfoHotel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCheckIn, setIsModalOpenCheckIn] = useState(false);
  const [isModalOpenCheckOut, setIsModalCheckOut] = useState(false);
  const [isModalOpenAdd, setIsModalAdd] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalCheckIn = () => setIsModalOpenCheckIn(true);
  const closeModalCheckIn = () => setIsModalOpenCheckIn(false);
  const openModalCheckOut = () => setIsModalCheckOut(true);
  const closeModalCheckOut = () => setIsModalCheckOut(false);
  const openModalAdd = () => setIsModalAdd(true);
  const closeModalAdd = () => setIsModalAdd(false);
  return (
    <div className="info-container">
      <div className="info-desc-container info-box">
        <h3>Отдел Бронирования</h3>
        <a href="tel:+79189579280">+7 (918) 957-92-80</a>
        <br />
        {/* <a href="tel:">+7 (918) 915 92 26 (What’s App)</a> */}
        <h3>E-mail</h3>
        <a href="mailto:">test@mail.ru</a>
        <div className="mini-reviews">
          <iframe
            src="https://yandex.ru/sprav/widget/rating-badge/1126085566"
            width="150"
            height="50"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <div className="info-btn-container info-box">
        <button className="modal-btn" onClick={openModalCheckIn}>
          Ранний заезд
        </button>
        <button className="modal-btn" onClick={openModalCheckOut}>
          Ранний выезд
        </button>
        <button className="modal-btn" onClick={openModalAdd}>
          Платные услуги
        </button>
        <button className="modal-btn" onClick={openModal}>
          Сертификат
        </button>
      </div>

      {isModalOpen ? (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="img/certificate.png" alt="Modal" />
            <button onClick={closeModal}>
              <IoMdClose />
            </button>
          </div>
        </div>
      ) : null}
      {isModalOpenCheckIn ? (
        <div className="modal-overlay" onClick={closeModalCheckIn}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-div-container">
              <button onClick={closeModalCheckIn}>
                <IoMdClose />
              </button>
              <h3>Ранний заезд</h3>
              <p>Возможен при условии наличия свободных номеров.</p>
              <p>
                Не более 6 часов до заселения — оплата 50% от стоимости одних
                суток проживания.
              </p>
              <p>Более 7 часов до заезда – оплата за 1 сутки.</p>
            </div>
          </div>
        </div>
      ) : null}
      {isModalOpenCheckOut ? (
        <div className="modal-overlay" onClick={closeModalCheckOut}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-div-container">
              <button onClick={closeModalCheckOut}>
                <IoMdClose />
              </button>
              <h3>Поздний выезд</h3>
              <p>Возможен при условии наличия свободных номеров.</p>
              <p>
                Не более 6 часов до заселения — оплата 50% от стоимости одних
                суток проживания.
              </p>
              <p>Более 7 часов до заезда – оплата за 1 сутки.</p>
            </div>
          </div>
        </div>
      ) : null}
      {isModalOpenAdd ? (
        <div className="modal-overlay" onClick={closeModalAdd}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-div-container">
              <button onClick={closeModalAdd}>
                <IoMdClose />
              </button>
              <h3>Дополнительные услуги:</h3>
              <p>Прачечная (платно)</p>
              <p>Завтрак (платно)</p>
              <p>Организация экскурсий (платно)</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InfoHotel;
