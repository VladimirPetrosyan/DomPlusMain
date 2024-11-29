import { motion } from "framer-motion";
import style from "./styles.module.css";
import vkIcon2 from "../../assets/Vk2.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import { useState } from "react";
import apiClient from "../../../axiosConfig.ts"; // Импортируем настроенный Axios

interface FormProps {
    onClose: () => void;
    formType?: "default" | "project" | "constructor" | "services";
    project?: string | null;// Название проекта
}

const Form: React.FC<FormProps> = ({ onClose, formType = "default", project }) => {
    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        email: "",
    });
    const [hasError, setHasError] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.phone.trim()) {
            setHasError(true);
            return;
        }
        setHasError(false);

        // Формируем данные для отправки
        const payload: any = {
            name: formData.name || "Без имени",
            phone: formData.phone,
            email: formData.email || "Не указан",
        };

        // Добавляем поле в зависимости от типа формы
        if (formType === "services") {
            payload.services = project || "Не указано"; // Услуги
        } else if (formType === "project") {
            payload.project = project || "Не указано"; // Проекты
        } else if (formType === "constructor") {
            payload.constructor = project || "Не указано"; // Конструктор
        }

        try {
            const response = await apiClient.post("/create-lead", payload);

            if (response.status === 200 || response.status === 201) {
                setFormStatus("success");
            } else {
                setFormStatus("error");
            }
        } catch {
            setFormStatus("error");
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
                onClick={(e) => e.stopPropagation()}
            >
                <button className={style.closeButton} onClick={onClose}>
                    ✕
                </button>

                {formStatus === "success" ? (
                    <p className={style.successMessage}>Спасибо за заявку, наш специалист с вами свяжется!</p>
                ) : formStatus === "error" ? (
                    <p className={style.errorMessage}>Извините, заявка не была отправлена. Попробуйте позже.</p>
                ) : (
                    <>
                        <p className={style.popupTitle}>Оставьте заявку</p>
                        {formType === "project" && project && (
                            <p className={style.popupSubtitle}>
                                Выбранный проект: <strong>{project}</strong>
                            </p>
                        )}
                        {formType === "constructor" && project && (
                            <p className={style.popupSubtitle}>
                                Выбранный конструктор: <strong>{project}</strong>
                            </p>
                        )}
                        {formType === "services" && project && (
                            <p className={style.popupSubtitle}>
                                Выбранные услуги: <strong>{project}</strong>
                            </p>
                        )}

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
                    </>
                )}

                {formStatus === "idle" && (
                    <>
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
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};
export default Form;