import { useEffect, useRef } from 'react';

const HotelWidget = ({
  uid = "5e44e758-8a03-4ce0-9bb7-2426e8c776b9",
  lang = "ru",
  currency = "RUB",
  type = "horizontal",
  width = "80%",
  widthMobile = "300",
  background = "#ffffff",
  backgroundMobile = "#ffffff",
  bgAlpha = "100",
  bgAlphaMobile = "100",
  borderColorMobile = "#C6CAD3",
  padding = "24",
  paddingMobile = "24",
  borderRadius = "8",
  buttonFontSize = "14",
  buttonHeight = "42",
  fontType = "inter",
  titleColor = "#242742",
  titleColorMobile = "#242742",
  titleSize = "22",
  titleSizeMobile = "22",
  inpColor = "#242742",
  inpBordhover = "#BBBBBB",
  inpBordcolor = "#DDDDDD",
  inpAlpha = "10",
  btnBackground = "#1875F0",
  btnBackgroundOver = "#1850D2",
  btnTextcolor = "#FFFFFF",
  btnTextover = "#FFFFFF",
  btnBordcolor = "#1875F0",
  btnBordhover = "#1850D2",
  minAge = "0",
  maxAge = "17",
  adultsDefault = "1",
  datesPreset = "on",
  dfromToday = "on",
  dfromValue = "2",
  dtoNextday = "on",
  dtoValue = "2",
  cancelColor = "#1875F0",
  url = "https://adlermore.ru",
  switchMobiles = "on",
  switchMobilesWidth = "800",
} = {}) => {
  const widgetRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Если скрипт уже загружен, не загружаем снова
    if (scriptLoadedRef.current) {
      initWidget();
      return;
    }

    // Загружаем скрипт
    const script = document.createElement('script');
    script.src = 'https://widget.reservationsteps.ru/js/bnovo.js';
    script.async = true;
    
    script.onload = () => {
      scriptLoadedRef.current = true;
      initWidget();
    };
    
    script.onerror = (error) => {
      console.error('Не удалось загрузить скрипт Bnovo:', error);
    };

    document.head.appendChild(script);

    // Инициализация виджета
    const initWidget = () => {
      // Добавляем небольшую задержку, чтобы убедиться, что скрипт полностью загружен
      setTimeout(() => {
        if (window.Bnovo_Widget && widgetRef.current) {
          try {
            // Используем IIFE как в оригинальном коде
            (function() {
              window.Bnovo_Widget.init(function() {
                window.Bnovo_Widget.open('_bn_widget_', {
                  type: type,
                  uid: uid,
                  lang: lang,
                  currency: currency,
                  width: width,
                  width_mobile: widthMobile,
                  background: background,
                  background_mobile: backgroundMobile,
                  bg_alpha: bgAlpha,
                  bg_alpha_mobile: bgAlphaMobile,
                  border_color_mobile: borderColorMobile,
                  padding: padding,
                  padding_mobile: paddingMobile,
                  border_radius: borderRadius,
                  button_font_size: buttonFontSize,
                  button_height: buttonHeight,
                  font_type: fontType,
                  title_color: titleColor,
                  title_color_mobile: titleColorMobile,
                  title_size: titleSize,
                  title_size_mobile: titleSizeMobile,
                  inp_color: inpColor,
                  inp_bordhover: inpBordhover,
                  inp_bordcolor: inpBordcolor,
                  inp_alpha: inpAlpha,
                  btn_background: btnBackground,
                  btn_background_over: btnBackgroundOver,
                  btn_textcolor: btnTextcolor,
                  btn_textover: btnTextover,
                  btn_bordcolor: btnBordcolor,
                  btn_bordhover: btnBordhover,
                  min_age: minAge,
                  max_age: maxAge,
                  adults_default: adultsDefault,
                  dates_preset: datesPreset,
                  dfrom_today: dfromToday,
                  dfrom_value: dfromValue,
                  dto_nextday: dtoNextday,
                  dto_value: dtoValue,
                  cancel_color: cancelColor,
                  url: url,
                  switch_mobiles: switchMobiles,
                  switch_mobiles_width: switchMobilesWidth,
                });
              });
            })();
          } catch (error) {
            console.error('Ошибка при инициализации виджета Bnovo:', error);
          }
        }
      }, 500);
    };

    // Очистка
    return () => {
      // Здесь можно попытаться удалить виджет, если API предоставляет такую возможность
      // Обычно внешние виджеты не требуют очистки
    };
  }, [
    uid, lang, currency, type, width, widthMobile, background, backgroundMobile,
    bgAlpha, bgAlphaMobile, borderColorMobile, padding, paddingMobile, borderRadius,
    buttonFontSize, buttonHeight, fontType, titleColor, titleColorMobile, titleSize,
    titleSizeMobile, inpColor, inpBordhover, inpBordcolor, inpAlpha, btnBackground,
    btnBackgroundOver, btnTextcolor, btnTextover, btnBordcolor, btnBordhover,
    minAge, maxAge, adultsDefault, datesPreset, dfromToday, dfromValue, dtoNextday,
    dtoValue, cancelColor, url, switchMobiles, switchMobilesWidth
  ]);

  // Обработчик для предотвращения стандартной отправки формы
  useEffect(() => {
    const handleSubmit = (e) => {
      // Предотвращаем стандартную отправку формы, если это форма внутри виджета
      if (e.target.closest && e.target.closest('#_bn_widget_')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Добавляем обработчик на все формы в документе
    document.addEventListener('submit', handleSubmit, true); // Используем capture phase
    
    return () => {
      document.removeEventListener('submit', handleSubmit, true);
    };
  }, []);

  return (
    <div className="left" id="_bn_widget_" ref={widgetRef}>
      <a href="https://bnovo.ru/" id="_bnovo_link_" target="_blank" rel="noopener noreferrer">
        Bnovo
      </a>
    </div>
  );
};

export default HotelWidget;