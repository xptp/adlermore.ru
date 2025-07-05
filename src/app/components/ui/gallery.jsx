import React from "react";
import "../../styles/ui/gallery.scss";
const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery-section">
      <h2 className="h2-gallery ">Галерея</h2>
      <div className="gallery-img-block">
        <img src="/img/gallery/1.webp" alt="Фото крыша,шезлонги" />
        <img src="/img/gallery/2.webp" alt="Фото крыша,шезлонги" />
        <img
          src="/img/gallery/3.webp"
          alt="Бассейн на крыше отеля или гостиницы"
        />
        <img src="/img/gallery/4.webp" alt="Крыша отеля с бассейном" />
        <img
          src="/img/gallery/5.webp"
          alt="Крыша отеля с шезлонгом для отдыха"
        />
        <img src="/img/gallery/6.webp" alt="Вид с крыши отеля на Адлер" />
        <img src="/img/gallery/7.webp" alt="Шезлонг на крыше отеля" />
        <img src="/img/gallery/8.webp" alt="Шезлонг на крыше отеля" />
        <img src="/img/gallery/9.webp" alt="Цветы в номере отеля" />
        {/* <img src="https://hotel-blacksea.com/img/galleryfull22.jpg" alt="" />
        <img src="https://hotel-blacksea.com/img/galleryfull39.jpg" alt="" />
        <img src="https://hotel-blacksea.com/img/galleryfull15.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Gallery;
