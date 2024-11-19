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
                        <p className={style.name}>Оксана Григорьева</p>
                        <p className={style.product}>Жилой дом</p>
                        <img className={style.imageLogo} src={"https://avatars.mds.yandex.net/get-yapic/27232/iMIC57MvrzGCHmjSAlUFIjMROw-1/islands-150"} />
                        <img className={style.quotes} src={quotes} />
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Компания прелесть! Строят быстро и качественно, планировки отличные! Всегда идут на контакт! Исправляют ошибки , если есть! Построили зимой, очень довольны! Рекомендую!
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
                        <p className={style.name}>Валентин Мирный</p>
                        <p className={style.product}>Жилой дом</p>
                        <img className={style.imageLogo} src={"https://avatars.mds.yandex.net/get-yapic/47747/jpfjvTlBcdjlySlEajpdJD3QQM-1573280599/islands-150"} />
                        <img className={style.quotes} src={quotes} />
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Обращался за постройкой дома, дали качественную консультацию и отличную стоимость 👍🏻
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