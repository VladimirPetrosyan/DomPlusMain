import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import style from "./styles.module.css";
import telegramIcon from "../../../assets/telegram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";
import vkIcon from "../../../assets/vk2.svg";
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
    const [hasError, setHasError] = useState(false); // Для отображения ошибки

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

        // Проверка на заполненность телефона
        if (!formData.phone.trim()) {
            setHasError(true); // Устанавливаем ошибку
            return;
        }
        setHasError(false); // Сбрасываем ошибку, если телефон указан

        // Имитация отправки данных на сервер
        console.log({
            phone: formData.phone,
            name: formData.name || "Без имени", // Если имя не указано, используем "Без имени"
            email: formData.email || "Не указан", // Если email не указан, используем "Не указан"
            projectId: formData.projectId || "Не выбран",
        });

        alert("Заявка успешно отправлена!");
        togglePopup(); // Закрываем попап после отправки
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
                        className={`${style.inputField} ${hasError ? style.errorField : ""}`}
                        placeholder="Номер телефона (обязательно)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {hasError && <p className={style.errorMessage}>Пожалуйста, введите номер телефона</p>}
                    <input
                        type="text"
                        className={style.inputField}
                        placeholder="ФИО (необязательно)"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        className={style.inputField}
                        placeholder="E-mail (необязательно)"
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
                    <a 
                        href="https://vk.com/dompluse" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={style.socialButton}
                    >
                        <img src={vkIcon} alt="ВКонтакте" className={style.icon} />
                        ВКонтакте
                    </a>
                    <a 
                        href="https://t.me/dom_plus_rnd" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={style.socialButton}
                    >
                        <img src={telegramIcon} alt="Telegram" className={style.icon} />
                        Telegram
                    </a>
                    <a 
                        href="https://wa.me/79034000361" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={style.socialButton}
                    >
                        <img src={whatsappIcon} alt="WhatsApp" className={style.icon} />
                        WhatsApp
                    </a>
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
                <button onClick={togglePopup} className={style.buttonApply}>
                    Оставить заявку
                </button>
            </div>
            {isPopupOpen && createPortal(popupContent, document.body)}
        </div>
    );
};

export default Credit;
