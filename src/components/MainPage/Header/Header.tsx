import { FC } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Иконка@2x.svg";
import vkIcon from "../../../assets/vk.svg";
import telegramIcon from "../../../assets/telegram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";
import style from "./styles.module.css";
import { motion } from "framer-motion";

const Header: FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const location = useLocation();

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains(style.popupOverlay)) {
            setIsPopupOpen(false);
        }
    };

    // Функция для определения, активен ли маршрут
    const isActive = (path: string) => location.pathname === path;

    return (
        <div>
            <div className={style.header}>
            <div className={style.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

                <div className={style.controlPanel}>
                    <p className={isActive("/") ? style.activeLink : ""}>
                        <Link to={"/"}>Главная</Link>
                    </p>
                    <p className={isActive("/services") ? style.activeLink : ""}>
                        <Link to={"/services"}>Услуги</Link>
                    </p>
                    <p className={isActive("/projects") ? style.activeLink : ""}>
                        <Link to={"/projects"}>Проекты</Link>
                    </p>
                    <p className={isActive("/constructor") ? style.activeLink : ""}>
                        <Link to={"/constructor"}>Собрать свой дом</Link>
                    </p>
                    <p className={isActive("/reviews") ? style.activeLink : ""}>
                        <Link to={"/reviews"}>Отзывы</Link>
                    </p>
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
                        <iframe
                            src="../../../../form_1.html"
                            title="AmoCRM Form"
                            width="100%"
                            height="600px"
                            style={{ border: "none" }}
                        ></iframe>
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