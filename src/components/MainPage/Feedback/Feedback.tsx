import style from "./styles.module.css";
import quotes from "../../../assets/quotes.png";
import quotesEnd from "../../../assets/quotesEnd.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const { ref: topRef, inView: topInView } = useInView({ triggerOnce: true });
    const { ref: leftCardRef, inView: leftCardInView } = useInView({ triggerOnce: true });
    const { ref: rightCardRef, inView: rightCardInView } = useInView({ triggerOnce: true });
    const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true });
    const navigate = useNavigate(); // Инициализация навигации

    return (
        <div className={style.main}>
            <motion.div
                ref={topRef}
                className={style.contentTop}
                initial={{ opacity: 0, y: -50 }}
                animate={topInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2 }}
            >
                <p className={style.quoteTop}>
                    Мы не станем расхваливать себя, ведь..
                </p>
                <p className={style.quoteBottom}>
                    НАШИ <span className={style.client}>КЛИЕНТЫ</span> ГОВОРЯТ ЗА НАС
                </p>
            </motion.div>

            <div className={style.contentMiddle}>
                <motion.div
                    ref={leftCardRef}
                    className={style.feedback}
                    initial={{ x: -150 }}
                    animate={leftCardInView ? { x: 0 } : {}}
                    transition={{ duration: 1.2 }}
                >
                    <div className={style.firstFeedbackName}>
                        <p className={style.name}>Виктория К.</p>
                        <p className={style.product}>Жилой дом</p>
                        <img className={style.imageLogo} src={"https://avatars.mds.yandex.net/get-yapic/54535/4mBNgAq0xxCYBOkJ4HviA96KIE-1/islands-150"} />
                        <img className={style.quotes} src={quotes} />
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Все очень понравилось, квалифицированно рассказали о том как строят, посчитали смету, одобрили ипотеку БЕСПЛАТНО, что не может не радовать. Сейчас в ожидании дома, мы на этапе фундамент. Но уже сейчас могу сказать, что работа делается быстро и качественно 🔥🔥🔥Сотрудничеством довольна на 100%
                        </p>
                        <img className={style.quotesEnd} src={quotesEnd} />
                    </div>
                </motion.div>

                <motion.div
                    ref={rightCardRef}
                    className={style.feedbackSecond}
                    initial={{ x: 150 }}
                    animate={rightCardInView ? { x: 0 } : {}}
                    transition={{ duration: 1.2 }}
                >
                    <div className={style.firstFeedbackName}>
                        <p className={style.name}>АЛЕКСАНДР С.</p>
                        <p className={style.product}>Жилой дом</p>
                        <img className={style.imageLogo} src={"https://avatars.mds.yandex.net/get-yapic/31804/enc-47c605f1e52f2504902da4f8375f7b3fec0356e103c3bdaa09ead01d71ca593a/islands-150"} />
                        <img className={style.quotes} src={quotes} />
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Ребята,Дом + мечта,а не компания Не покидают и не бросают ни на одном этапе постройки дома! Спасибо большое Александру Кибальникову,человек настоящий профессионал! Объясняет все терпеливо и на пальцах!
                        </p>
                        <img className={style.quotesEnd} src={quotesEnd} />
                    </div>
                </motion.div>
            </div>

            <motion.div
                ref={buttonRef}
                className={style.contentBottom}
                initial={{ opacity: 0, y: 50 }}
                animate={buttonInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2 }}
            >
                <button
                    className={style.more}
                    onClick={() => navigate("/reviews")}
                >
                    Больше
                </button>
            </motion.div>
        </div>
    );
};

export default Feedback;