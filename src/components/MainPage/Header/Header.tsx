import { FC, MouseEvent } from "react";
import { useState } from "react";
import logo from "../../../assets/Иконка@2x.svg";
import vkIcon from "../../../assets/vk.svg";
import telegramIcon from "../../../assets/telegram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";

import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header: FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains(style.popupOverlay)) {
            setIsPopupOpen(false);
        }
    };

    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                </div>

                <div className={style.controlPanel}>
                    <p>
                        <Link to={"/"}>Главная</Link>
                    </p>
                    <p>
                        <Link to={"/services"}>Услуги</Link>
                    </p>
                    <p>
                        <Link to={"/projects"}>Проекты</Link>
                    </p>
                    <p>
                        <Link to={"/constructor"}>Собрать свой дом</Link>
                    </p>
                    <Link to={"/reviews"}>Отзывы</Link>
                    {/*<p>О нас</p>*/}
                </div>

                <div className={style.bid} onClick={togglePopup}>
                    <span>Оставить заявку</span>
                </div>
            </div>

            {isPopupOpen && (
                <motion.div
                    className={style.popupOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        className={style.popupContent}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button className={style.closeButton} onClick={togglePopup}>
                            ✕
                        </button>
                        <p className={style.popupTitle}>Оставьте заявку</p>
                        <p className={style.popupSubtitle}>
                            Специалист свяжется с вами и даст конечный результат
                        </p>
                        <form className={style.form}>
                            <input
                                type="text"
                                className={style.inputField}
                                placeholder="Номер телефона"
                            />
                            <input
                                type="text"
                                className={style.inputField}
                                placeholder="ФИО"
                            />
                            <input
                                type="email"
                                className={style.inputField}
                                placeholder="E-mail"
                            />
                            <button type="submit" className={style.submitButton}>
                                Оставить заявку
                            </button>
                        </form>
                        <p className={style.contactSocial}>
                            - Или обратитесь к нам в соцсетях -
                        </p>
                        <div className={style.socialButtons}>
                            <button className={style.socialButton}>
                                <img src={telegramIcon} alt="Telegram" className={style.icon} />
                                Telegram
                            </button>
                            <button className={style.socialButton}>
                                <img src={whatsappIcon} alt="WhatsApp" className={style.icon} />
                                WhatsApp
                            </button>
                            <button className={style.socialButton}>
                                <img src={vkIcon} alt="ВКонтакте" className={style.icon} />
                                ВКонтакте
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Header;