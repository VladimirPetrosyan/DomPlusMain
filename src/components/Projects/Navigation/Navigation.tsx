import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import style from "./styles.module.css";
import { Link, useLocation } from 'react-router-dom';
import arrow from "../../../assets/Arrow.png";
import rectangle from "../../../assets/Rectangle.png";

const Navigation: FC = () => {
    const location = useLocation();
    const isProjectsPage = location.pathname === '/projects';
    const isServicesPage = location.pathname === '/services';
    const isReviewsPage = location.pathname === '/reviews';
    const isConstructorPage = location.pathname === '/constructor'; // Новый путь для конструктора

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className={style.main}>
            <div className={style.topContent}>
                <motion.p
                    className={style.navigate}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Link className={style.address} to={'/'}> Главная</Link>
                    <img src={arrow} alt="arrow" />
                    {isProjectsPage ? (
                        <Link className={style.address} to={'/projects'}>Проекты</Link>
                    ) : isServicesPage ? (
                        <Link className={style.address} to={'/services'}>Услуги</Link>
                    ) : isReviewsPage ? (
                        <Link className={style.address} to={'/reviews'}>Отзывы</Link>
                    ) : isConstructorPage ? (
                        <Link className={style.address} to={'/constructor'}>Собрать свой дом</Link>
                    ) : null}
                </motion.p>
                <motion.p
                    className={style.pageName}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    {isProjectsPage ? 'Проекты' : isServicesPage ? 'Услуги' : isReviewsPage ? 'Отзывы' : isConstructorPage ? 'Собрать свой дом' : ''}
                </motion.p>
                <motion.div
                    className={style.imgRectangle}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.img
                        className={style.rectangle}
                        src={rectangle}
                        alt="rectangle"
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <motion.p
                        className={style.imgText}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {isProjectsPage
                            ? '"Профессиональный подход к каждому проекту!"'
                            : isServicesPage
                                ? '"Весь спектр услуг для вашего проекта"'
                                : isReviewsPage
                                    ? '"Наши клиенты говорят за нас!"'
                                    : isConstructorPage
                                        ? '"Соберите дом своей мечты с нашей помощью!"'
                                        : ''}
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Navigation;