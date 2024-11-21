import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import style from "./styles.module.css";
import telegramIcon from "../../../assets/telegram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";
import vkIcon from "../../../assets/vk.svg";
import banks from "../../../assets/banks.jpg";

interface CreditProps {
    selectedProjectId: number | null;
}

const Credit: FC<CreditProps> = ({ selectedProjectId }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        email: "",
        projectId: selectedProjectId,
    });

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains(style.popupOverlay)) {
            setIsPopupOpen(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Отправка данных на сервер, включая выбранный проект
        alert("Заявка отправлена!");
    };

    const popupContent = (
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
                onClick={(e) => e.stopPropagation()}
            >
                <button className={style.closeButton} onClick={togglePopup}>
                    ✕
                </button>
                <p className={style.popupTitle}>Оставьте заявку</p>
                <p className={style.popupSubtitle}>
                    Специалист свяжется с вами и даст конечный результат
                </p>
                <form className={style.form} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        className={style.inputField}
                        placeholder="Номер телефона"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className={style.inputField}
                        placeholder="ФИО"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        className={style.inputField}
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {/* Скрытое поле для передачи ID проекта */}
                    <input
                        type="hidden"
                        name="projectId"
                        value={formData.projectId || ""}
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
                        <img
                            src={telegramIcon}
                            alt="Telegram"
                            className={style.icon}
                        />
                        Telegram
                    </button>
                    <button className={style.socialButton}>
                        <img
                            src={whatsappIcon}
                            alt="WhatsApp"
                            className={style.icon}
                        />
                        WhatsApp
                    </button>
                    <button className={style.socialButton}>
                        <img src={vkIcon} alt="ВКонтакте" className={style.icon} />
                        ВКонтакте
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        <div className={style.mortgageContainer}>
            <div className={style.mortgageImage}>
                <img src={banks} alt="Mortgage Programs" />
            </div>
            <div className={style.mortgageText}>
                <h2>Доступные ипотечные программы для ИЖС</h2>
                <ul>
                    <li>Семейная ипотека с использованием эскроу 6%</li>
                    <li>Сельская ипотека 2.75%</li>
                    <li>IT-ипотека 6%</li>
                    <li>Военная ипотека (рассчитывается индивидуально)</li>
                </ul>
                <button onClick={togglePopup} className={style.submitButton}>
                    Оставить заявку
                </button>
            </div>
            {isPopupOpen && createPortal(popupContent, document.body)}
        </div>
    );
};

export default Credit;