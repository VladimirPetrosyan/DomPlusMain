import { useState, useEffect } from "react";
import style from "./styles.module.css";
import { slidesData } from "./slidesData";

const ProjectAssistance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleRange, setVisibleRange] = useState([0, 3]);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000); // Автопрокрутка каждые 6 секунд
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setDirection(1);
    const newSlide = (currentSlide + 1) % slidesData.length;
    setCurrentSlide(newSlide);
    updateVisibleRange(newSlide);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    const newSlide =
      currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    updateVisibleRange(newSlide);
  };

  const handleSelectSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    updateVisibleRange(index);
  };

  const updateVisibleRange = (newSlide: number) => {
    let [start, end] = visibleRange;
    if (newSlide >= end) {
      start = newSlide - 2;
      end = newSlide + 1;
    } else if (newSlide < start) {
      start = newSlide;
      end = newSlide + 3;
    }
    if (start < 0) {
      start = 0;
      end = 3;
    }
    if (end > slidesData.length) {
      end = slidesData.length;
      start = end - 3;
    }
    setVisibleRange([start, end]);
  };

  return (
    <div className={style.main}>
      <div className={style.headerText}>
        <p className={style.topText}>От идеи до воплощения —</p>
        <p className={style.bottomText}>каждый шаг под контролем</p>
      </div>
      <div className={style.window}>
        <div
          key={currentSlide}
          className={`${style.windowContent} ${
            direction === 1 ? style.slideInFromRight : style.slideInFromLeft
          }`}
        >
          {/* Картинка */}
          <div className={style.rightContent}>
            <img
              className={style.imageDom}
              src={slidesData[currentSlide].image}
              alt="Slide"
            />
          </div>

          {/* Текст и иконки */}
          <div className={style.leftContent}>
            <div className={style.helpText}>
              <p className={style.helpTextTop}>
                {slidesData[currentSlide].title}
              </p>
              <p className={style.helpTextBottom}>
                {slidesData[currentSlide].subtitle}
              </p>
            </div>
            <div className={style.helpIco}>
              {slidesData[currentSlide].items.map((item, index) => (
                <div className={style.globalIco} key={index}>
                  <img src={item.icon} alt={item.text} />
                  <p className={style.icoText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomContent}>
        <div className={style.slider}>
          <button className={style.sliderArrow} onClick={handlePrevSlide}>
            {"<"}
          </button>
          {slidesData.map((_, index) => {
            if (index >= visibleRange[0] && index < visibleRange[1]) {
              return (
                <div
                  key={index}
                  className={
                    index === currentSlide
                      ? style.sliderSelectedContent
                      : style.sliderContent
                  }
                  onClick={() => handleSelectSlide(index)}
                >
                  <p
                    className={
                      index === currentSlide
                        ? style.sliderContentTextSelected
                        : style.sliderContentText
                    }
                  >
                    {index + 1}
                  </p>
                </div>
              );
            }
            return null;
          })}
          <button className={style.sliderArrow} onClick={handleNextSlide}>
            {">"}
          </button>
        </div>
        <p className={style.quote}>
          " Учитываем <b>каждый</b> ваш запрос"
        </p>
      </div>
    </div>
  );
};

export default ProjectAssistance;
