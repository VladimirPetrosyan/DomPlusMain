import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./styles.module.css";
import galochka from "../../../assets/Vector.svg";
import dom from "../../../assets/image.png"; // Основное изображение
import domMobile from "../../../assets/main_dom2.png"; // Альтернативное изображение
import map from "../../../assets/Map.png";
import tg from "../../../assets/Tg.png";
import Vk from "../../../assets/Vk.svg";
import Vb from "../../../assets/Viber.png";
import inst from "../../../assets/Inst.png";
import polosa from "../../../assets/Rectangle 5.png";
import { Link } from "react-router-dom";

const HeaderBottom: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Следим за изменением размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1070);
    };

    handleResize(); // Устанавливаем значение при первой загрузке
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.headerBottom}>
      <motion.div
        className={style.displayLeft}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div className={style.displayLeftTop}>
          <p className={style.leed}>ДОМ+</p>
          <p className={style.leedText}>СТРОИТЕЛЬСТВО ДОМОВ И ПРОДАЖА КВАРТИР</p>
        </div>
        <div className={style.personalProject}>
          <img className={style.polosa} src={polosa} alt="" />
          <p className={style.projectText}>
            Сделаем ваш личный проект для <br /> строительства частного дома
          </p>
        </div>
        <div className={style.displayLeftBottom}>
          <div className={style.displayLeftBottomFirst}>
            <div>
              <img className={style.ok} src={galochka} />
              <p className={style.inputs}>Надежность и профессионализм</p>
            </div>
            <div>
              <img className={style.ok} src={galochka} />
              <p className={style.inputs}>Индивидуальный подход к каждому проекту</p>
            </div>
          </div>
          <div className={style.displayLeftBottomSecond}>
            <div className={style.garant}>
              <img className={style.ok} src={galochka} />
              <p className={style.inputs}>Гарантия качества</p>
            </div>
            <div>
              <img className={style.ok} src={galochka} />
              <p className={style.inputs}>Качественная консультация и отличная стоимость</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={style.displayRight}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div className={style.contact}>
          <p className={style.Number}>{"+7 (903) 400-03-61"}</p>
          <div className={style.location}>
            <img src={map} />
            <p className={style.address}>14-я линия 50, Ростов-на-Дону</p>
          </div>
          <div className={style.subscribe}>
            <a
              href="https://t.me/dom_plus_rnd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tg} alt="Telegram" />
            </a>
            <a
              href="https://vk.com/dompluse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Vk} alt="ВКонтакте" />
            </a>
            <a
              href="https://instagram.com/dom_plus_rnd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={inst} alt="Instagram" />
            </a>
            <a
              href="https://wa.me/79034000361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Vb} alt="Viber" />
            </a>
          </div>
        </div>
        <div className={style.aboutProject}>
          <p className={style.ourProject}>Наши проекты</p>
          <Link to="/projects">
            {/* Меняем изображение в зависимости от ширины экрана */}
            <img
              className={style.dom}
              src={isMobile ? domMobile : dom}
              alt="Дом"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderBottom;