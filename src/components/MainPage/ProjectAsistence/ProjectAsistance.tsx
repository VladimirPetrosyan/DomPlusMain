import  { useState } from "react";
import style from "./styles.module.css";
import { slidesData } from "./slidesData";
import { motion, AnimatePresence } from "framer-motion"; // Добавляем framer-motion

const ProjectAsistance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // Направление слайда

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const handleSelectSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = -1; i <= 1; i++) {
      const slideIndex = (currentSlide + i + slidesData.length) % slidesData.length;
      visibleSlides.push(slideIndex);
    }
    return visibleSlides;
  };

  return (
    <div className={style.main}>
      <div className={style.headerText}>
        <p className={style.topText}>От идеи до воплощения —</p>
        <p className={style.bottomText}>каждый шаг под контролем</p>
      </div>

      <div className={style.window}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            className={style.leftContent}
            initial={{ opacity: 1, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className={style.helpText}>
              <p className={style.helpTextTop}>{slidesData[currentSlide].title}</p>
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
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className={style.rightContent}
            key={currentSlide}
            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className={style.imageDom}
              src={slidesData[currentSlide].image}
              alt="Slide"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={style.bottomContent}>
        <div className={style.slider}>
          <button className={style.sliderArrow} onClick={handlePrevSlide}>
            {"<"}
          </button>

          {getVisibleSlides().map((index) => (
            <motion.div
              key={index}
              className={
                index === currentSlide
                  ? style.sliderSelectedContent
                  : style.sliderContent
              }
              onClick={() => handleSelectSlide(index)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
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
            </motion.div>
          ))}

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

export default ProjectAsistance;