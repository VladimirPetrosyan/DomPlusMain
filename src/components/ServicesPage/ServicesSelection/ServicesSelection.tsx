import { useState, useEffect } from "react";
import style from "./styles.module.css";
import { motion } from "framer-motion";
import vkIcon from "../../../assets/vk.svg";
import telegramIcon from "../../../assets/telegram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";

const services = [
    "Поиск земельных участков",
    "Геодезия участка",
    "Геология",
    "Межевальные услуги",
    "Юридические услуги",
    "Проект ремонта",
    "Ландшафтный проект",
    "Проект дома",
    "Подключение коммуникаций",
    "Ипотечное сопровождение",
    "Строительство коммерч. помещений",
    "Любые строительные работы",
];

interface ServicesSelectionProps {
    selectedServices: string[];
    toggleService: (service: string) => void;
    onSubmit: (services: { phone: string, name: string, email: string, servicesString: string }) => void;
}

const ServicesSelection: React.FC<ServicesSelectionProps> = ({ selectedServices, toggleService, onSubmit }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        name: '',
        email: '',
        servicesString: '',  // Строка с выбранными услугами
    });

    // Обновление строки с услугами при изменении выбранных услуг
    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            servicesString: selectedServices.join(", "), // Преобразуем массив в строку
        }));
    }, [selectedServices]);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);  // Отправляем данные в родительский компонент
        togglePopup();  // Закрытие попапа после отправки
    };

    return (
        <div className={style.main}>
            <p className={style.topText}>ВЫБРАТЬ УСЛУГИ</p>
            <div className={style.selectedContainer}>
                <div className={style.servicesContainer}>
                    {services.map((service) => (
                        <button
                            key={service}
                            className={`${style.serviceButton} ${
                                selectedServices.includes(service) ? style.selected : ""
                            }`}
                            onClick={() => toggleService(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>
                <div className={style.requestSection}>
                    <div className={style.contentRight}>
                        <div className={style.textRequest}>
                            <p className={style.firstText}>Оставьте заявку</p>
                            <p className={style.secondText}>чтобы специалист связался с вами и дал конечный результат</p>
                        </div>
                    </div>
                    <button className={style.submitButton} onClick={togglePopup}>
                        Оставить заявку
                    </button>
                </div>
            </div>
            <div className={style.selectionSummary}>
                <p className={style.bottomText}>“ Выбор пунктов услуг будет включен в заявку</p>
            </div>

            {isPopupOpen && (
                <motion.div
                    className={style.popupOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                        if ((e.target as HTMLElement).classList.contains(style.popupOverlay)) {
                            setIsPopupOpen(false);
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

                            <div className={style.checkboxContainer}>
                                {services.map((service) => (
                                    <label key={service} className={style.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            checked={selectedServices.includes(service)}
                                            onChange={() => toggleService(service)}
                                            className={style.checkbox}
                                        />
                                        {service}
                                    </label>
                                ))}
                            </div>

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

export default ServicesSelection;