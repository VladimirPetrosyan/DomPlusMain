import {motion} from "framer-motion";
import style from "./styles.module.css";
import vkIcon2 from "../../assets/Vk2.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import { useState } from "react";
import axios from "axios";

interface FormProps {
    onClose: () => void; // Пропс для закрытия формы
}

const Form: React.FC<FormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        email: "",
    });
    const [hasError, setHasError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Проверка на заполненность телефона
        if (!formData.phone.trim()) {
            setHasError(true); // Отображение ошибки, если телефон пустой
            return;
        }
        setHasError(false); // Сбрасываем ошибку, если телефон указан

        try {
            const response = await axios.post(`http://10.8.1.19:4000/create-lead`, {
                name: formData.name || "Без имени", // Если имя не указано, отправляем "Без имени"
                phone: formData.phone, // Передача номера телефона
                email: formData.email || "Не указан", // Если email не указан, отправляем "Не указан"
            });

            if (response.status === 200 || response.status === 201) {
                alert("Заявка успешно отправлена!");
                console.log("Lead created successfully:", response.data);
                onClose(); // Закрыть форму после успешной отправки
            } else {
                alert("Ошибка при отправке заявки.");
                console.error("Failed to create lead:", response.data);
            }
        } catch (error) {
            alert("Ошибка сети при отправке заявки.");
            console.error("Error creating lead:", error);
        }
    };

    return (
        <motion.div
            className={style.popupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => {
                if ((e.target as HTMLDivElement).classList.contains(style.popupOverlay)) {
                    onClose();
                }
            }}
        >
            <motion.div
                className={style.popupContent}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
            >
                <button className={style.closeButton} onClick={onClose}>
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
                        placeholder="Номер телефона"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {hasError && <p className={style.errorMessage}>Введите номер телефона</p>}
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
                        <img src={vkIcon2} alt="ВКонтакте" className={style.icon} />
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
};

export default Form;
