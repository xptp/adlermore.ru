import React from "react";
import "../../styles/ui/gallery.scss";
const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery-section">
      <h2 className="h2-gallery ">Галерея</h2>
      <div className="gallery-img-block">
        <img
          src="/img/gallery/1.webp"
          alt="Фото цветов в номере отеля или гостиницы"
        />
        <img src="/img/gallery/3.webp" alt="Фото на крыше отеля с бассейном" />
        <img
          src="/img/gallery/5.webp"
          alt="Бассейн на крыше отеля или гостиницы"
        />
        <img src="/img/gallery/6.webp" alt="Номер отеля или гостиницы" />
        <img
          src="/img/gallery/21.webp"
          alt="Крыша отеля с шезлонгом для отдыха"
        />
        {/* <img src="https://hotel-blacksea.com/img/galleryfull22.jpg" alt="" />
        <img src="https://hotel-blacksea.com/img/galleryfull39.jpg" alt="" />
        <img src="https://hotel-blacksea.com/img/galleryfull15.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Gallery;
