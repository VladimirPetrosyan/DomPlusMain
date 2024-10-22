import { FC, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import style from "./styles.module.css";

function updateSlider(event: ChangeEvent<HTMLInputElement>) {
    const polzunok = event.target;
    const value = parseFloat(polzunok.value);
    const min = parseFloat(polzunok.min);
    const max = parseFloat(polzunok.max);
    const percentage = ((value - min) / (max - min)) * 100;

    polzunok.style.background = `linear-gradient(to right, #FFD700 ${percentage}%, #ccc ${percentage}%)`;
}

const Credit: FC = () => {
    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
    const { ref: sliderRef, inView: sliderInView } = useInView({ triggerOnce: true });
    const { ref: paymentRef, inView: paymentInView } = useInView({ triggerOnce: true });

    return (
        <div className={style.main}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: -50 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className={style.topContent}
            >
                <p className={style.topText}>РАССЧИТАТЬ ИПОТЕКУ</p>
            </motion.div>
            <motion.div
                ref={sliderRef}
                initial={{ opacity: 0, y: 50 }}
                animate={sliderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2 }}
                className={style.window}
            >
                <div className={style.middleContent}>
                    <div className={style.leftContent}>
                        <div className={style.firstContent}>
                            <div className={style.sum}>
                                <p className={style.firstP}>
                                    Сумма ипотеки
                                </p>
                                <p className={style.firstP}>
                                    30 000 000 ₽
                                </p>
                            </div>
                            <div className={style.line}>
                                <input
                                    className={style.polzunok}
                                    min="500000"
                                    max="100000000"
                                    onChange={updateSlider}
                                    type={"range"}
                                />
                            </div>
                            <div className={style.sumBottom}>
                                <p className={style.secondP}>
                                    500 000 ₽
                                </p>
                                <p className={style.secondP}>
                                    100 000 000 ₽
                                </p>
                            </div>
                        </div>
                        <div className={style.secondContent}>
                            <div className={style.sum}>
                                <p className={style.firstP}>
                                    Срок ипотеки
                                </p>
                                <p className={style.firstP}>
                                    14 лет
                                </p>
                            </div>
                            <div className={style.line}>
                                <input
                                    className={style.polzunok}
                                    min="5"
                                    max="30"
                                    onChange={updateSlider}
                                    type={"range"}
                                />
                            </div>
                            <div className={style.sumBottom}>
                                <p className={style.secondP}>
                                    5 лет
                                </p>
                                <p className={style.secondP}>
                                    30 лет
                                </p>
                            </div>
                        </div>
                        <div className={style.thirdContent}>
                            <div className={style.sum}>
                                <p className={style.firstP}>
                                    Процентная ставка
                                </p>
                                <p className={style.firstP}>
                                    8 %
                                </p>
                            </div>
                            <div className={style.line}>
                                <input
                                    className={style.polzunok}
                                    min="0.1"
                                    max="30"
                                    onChange={updateSlider}
                                    type={"range"}
                                />
                            </div>
                            <div className={style.sumBottom}>
                                <p className={style.secondP}>
                                    0.1 %
                                </p>
                                <p className={style.secondP}>
                                    30 %
                                </p>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        ref={paymentRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={paymentInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1 }}
                        className={style.rightContent}
                    >
                        <div className={style.payment}>
                            <p className={style.paymentText}>
                                Ежемесячный платеж
                            </p>
                            <p className={style.paymentText}>
                                200 000 ₽
                            </p>
                        </div>
                        <div className={style.help}>
                            <p className={style.helpText}>
                                Получить консультацию
                            </p>
                            <p className={style.helpText}>
                                +7 (903) 400-03-61
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className={style.bottomContent}
            >
                <p className={style.bottomText}>
                    “ Конечный расчёт основан на средней процентной ставке. Точная процентная ставка и сумма ипотечного кредита будут определены при заключении договора.
                    Банк оставляет за собой право отказать в предоставлении ипотеки без указания причин.
                </p>
            </motion.div>
        </div>
    );
};

export default Credit;