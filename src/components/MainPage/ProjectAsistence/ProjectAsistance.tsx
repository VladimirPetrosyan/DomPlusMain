import style from "./styles.module.css";
import Group from "../../../assets/Group.png";
import geo from "../../../assets/geo.png";
import Ur from "../../../assets/Ur.png";
import imageDom from "../../../assets/imageDom.png";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const ProjectAsistance = () => {
  const { ref: containerRef, inView } = useInView({ triggerOnce: true });
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: bottomRef, inView: bottomInView } = useInView({ triggerOnce: true });

  return (
    <div className={style.main}>

      <motion.div
        ref={headerRef}
        className={style.headerText}
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <p className={style.topText}>
          От идеи до воплощения —
        </p>
        <p className={style.bottomText}>
          каждый шаг под контролем
        </p>
      </motion.div>

      <div className={style.window} ref={containerRef}>
        <motion.div
          className={style.leftContent}
          initial={{ x: -100 }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className={style.helpText}>
            <p className={style.helpTextTop}>
              Мы поможем вам
            </p>
            <p className={style.helpTextBottom}>
              найти идеальный земельный участок
            </p>
          </div>
          <div className={style.helpIco}>
            <div className={style.globalIco}>
              <img src={geo} />
              <p className={style.icoText}>
                Расположение
              </p>
            </div>
            <div className={style.globalIco}>
              <img src={Group} />
              <p className={style.icoText}>
                Инфраструктура
              </p>
            </div>
            <div className={style.globalIco}>
              <img src={Ur} />
              <p className={style.icoText}>
                Юридическая чистота
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={style.rightContent}
          initial={{ x: 100 }}
          animate={inView ? { x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <img className={style.imageDom} src={imageDom} />
        </motion.div>
      </div>

      <motion.div
        ref={bottomRef}
        className={style.bottomContent}
        initial={{ opacity: 0, y: 50 }}
        animate={bottomInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <div className={style.slider}>
          <button className={style.sliderArrow}>
            {`<`}
          </button>
          <div className={style.sliderFirstContent}>
            <p className={style.sliderContentText}>1</p>
          </div>
          <div className={style.sliderSecondContent}>
            <p className={style.sliderContentTextSecond}>2</p>
          </div>
          <div className={style.sliderThirdContent}>
            <p className={style.sliderContentTextThird}>3</p>
          </div>
          <button className={style.sliderArrow}>{`>`}</button>
        </div>
        <p className={style.quote}>“ Учитываем <b>каждый</b> ваш запрос</p>
      </motion.div>
    </div>
  );
};

export default ProjectAsistance;