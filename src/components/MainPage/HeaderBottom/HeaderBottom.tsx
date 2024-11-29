import { FC } from "react";
import { motion } from "framer-motion";
import style from "./styles.module.css";
import galochka from "../../../assets/Vector.svg";
import dom from "../../../assets/image.png";
import map from "../../../assets/Map.png";
import tg from "../../../assets/Tg.png";
import Vk from "../../../assets/Vk.svg";
import Vb from "../../../assets/Viber.png";
import inst from "../../../assets/Inst.png";
import polosa from "../../../assets/Rectangle 5.png";
import { Link } from "react-router-dom";


const HeaderBottom: FC = () => {
  return (
    <div className={style.headerBottom}>
      <motion.div
          className={style.displayLeft}
          initial={{x: '-100vw'}}
          animate={{x: 0}}
          transition={{duration: 1.3}}
      >
        <div className={style.displayLeftTop}>
          <p className={style.leed}>ДОМ+</p>
          <p className={style.leedText}>СТРОИТЕЛЬСТВО ДОМОВ И ПРОДАЖА КВАРТИР</p>
        </div>
        <div className={style.personalProject}>
          <img className={style.polosa} src={polosa} alt="" />
          <p className={style.projectText}>Сделаем ваш личный проект для <br/> строительства частного дома</p>
        </div>
        <div className={style.displayLeftBottom}>
          <div className={style.displayLeftBottomFirst}>
            <div>
              <img src={galochka} />
              <p>Надежность и профессионализм</p>
            </div>
            <div>
              <img src={galochka} />
              <p>Индивидуальный подход к каждому проекту</p>
            </div>
          </div>
          <div className={style.displayLeftBottomSecond}>
            <div className={style.garant}>
              <img src={galochka} />
              <p>Гарантия качества</p>
            </div>
            <div>
              <img src={galochka} />
              <p>Качественная консультация и отличная стоимость</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
          className={style.displayRight}
          initial={{x: '100vw'}}
          animate={{x: 0}}
          transition={{duration: 1.3}}
      >
        <div className={style.contact}>
          <p className={style.Number}>{("+7 (903) 400-03-61")}</p>
          <div className={style.location}>
            <img src={map} />
            <p className={style.address}>14-я линия 50, Ростов-на-Дону</p>
          </div>
          <div className={style.subscribe}>
            <a href="https://t.me/dom_plus_rnd" target="_blank" rel="noopener noreferrer">
              <img src={tg} alt="Telegram" />
            </a>
            <a href="https://vk.com/dompluse" target="_blank" rel="noopener noreferrer">
              <img src={Vk} alt="ВКонтакте" />
            </a>
            <a href="https://instagram.com/dom_plus_rnd/" target="_blank" rel="noopener noreferrer">
              <img src={inst} alt="Instagram" />
            </a>
            <a href="https://wa.me/79034000361" target="_blank" rel="noopener noreferrer">
              <img src={Vb} alt="Viber" />
            </a>
          </div>
        </div>
        <div className={style.aboutProject}>
          <p className={style.ourProject}>Наши проекты</p>
          <Link to="/projects">
            <img className={style.dom} src={dom} alt="Дом" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderBottom;