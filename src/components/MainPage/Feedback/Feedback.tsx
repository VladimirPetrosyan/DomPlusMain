import style from "./styles.module.css";
import imageLogo from "../../../assets/imageLogo.png";
import quotes from "../../../assets/quotes.png";
import quotesEnd from "../../../assets/quotesEnd.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Feedback = () => {
    const { ref: topRef, inView: topInView } = useInView({ triggerOnce: true });
    const { ref: leftCardRef, inView: leftCardInView } = useInView({ triggerOnce: true });
    const { ref: rightCardRef, inView: rightCardInView } = useInView({ triggerOnce: true });
    const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true });

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
                        <p className={style.name}>Крабов салат</p>
                        <p className={style.product}>Дом какой-то там</p>
                        <img className={style.imageLogo} src={imageLogo} />
                        <img className={style.quotes} src={quotes} />
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Купил дом через эту компанию — всё сделали на высшем уровне! Быстро, качественно и без лишних проблем. Очень доволен результатом.
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
                        <p className={style.name}>Крабов салат</p>
                        <p className={style.product}>Дом какой-то там</p>
                        <img className={style.imageLogo} src={imageLogo} />
                        <img className={style.quotes} src={quotes} />
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Купил дом через эту компанию — всё сделали на высшем уровне! Быстро, качественно и без лишних проблем. Очень доволен результатом.
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
                <button className={style.more}>Больше</button>
            </motion.div>
        </div>
    );
};

export default Feedback;