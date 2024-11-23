import { useState, useEffect, forwardRef } from 'react';
import style from "./styles.module.css";
import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation.tsx";
import cardData from "../Projects/Cards/cardData.ts";
import cardDataRealized from "../Projects/RealizedProjects/realizedCardData.ts";
import galochka from "../../../assets/galochka.png";
import telegramIcon from "../../../assets/telegram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";
import vkIcon from "../../../assets/vk.svg";

interface MainWindowProps {
    selectedProjectId: number | null;
    isRealized: boolean;
}

type Project = {
    id: number;
    mainImage: string;
    images: string[];
    text: string; // У всех проектов есть `text`
    title?: string; // У обычных проектов есть `title`, но у реализованных — нет
    description?: string; // Аналогично
    features?: string[]; // Аналогично
};

const MainWindow = forwardRef<HTMLDivElement, MainWindowProps>(({ selectedProjectId, isRealized }, ref) => {
    const data = isRealized ? cardDataRealized : cardData;

    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [mainImage, setMainImage] = useState<string>("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        email: "",
    });
    const [hasError, setHasError] = useState(false); // Для проверки ошибки в телефоне

    const [selectedProject, setSelectedProject] = useState<string | null>(null); // сохранение выбора проекта

    useEffect(() => {
        if (selectedProjectId !== null) {
            const selectedProject = data.find(card => card.id === selectedProjectId);
            if (selectedProject) {
                setActiveProject(selectedProject);
                setMainImage(selectedProject.images[0]);
    
                // Устанавливаем выбранный проект
                setSelectedProject(
                    isRealized ? data[0].text : data[0].title || "Без названия"
                );
            }
        } else if (data && data.length > 0) {
            // Если проект не выбран, используем первый проект
            setActiveProject(data[0]);
            setMainImage(data[0].images[0]);
    
            // Устанавливаем проект по умолчанию
            setSelectedProject(
                isRealized
                    ? data[0].text // Для реализованных проектов
                    : data[0].title || "Без названия" // Для обычных проектов
            );
        }
    }, [isRealized, selectedProjectId, data]);

    const handleImageClick = (image: string) => {
        setMainImage(image);
    };

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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.phone.trim()) {
            setHasError(true); // Устанавливаем ошибку, если телефон не заполнен
            return;
        }
        setHasError(false); // Сбрасываем ошибку при корректном вводе телефона
    
        console.log({
            phone: formData.phone,
            name: formData.name || "Без имени", // Если имя не указано
            email: formData.email || "Не указан", // Если email не указан
            project: selectedProject || "Проект не выбран", // Передача выбранного проекта
        });
    
        alert("Заявка успешно отправлена!");
        togglePopup(); // Закрываем попап после отправки
    };

    if (!activeProject) {
        return <div>Загрузка...</div>;
    }

    return (
        <div ref={ref} className={style.main}>
            <Navigation />
            <div className={style.middleContent}>
                <div className={style.contentLeft}>
                    <div className={style.contentOne}>
                        <div style={{ height: "max-content", width: "max-content" }}>
                            <motion.img
                                key={mainImage}
                                className={style.amg}
                                src={mainImage}
                                alt="Main Project Image"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <div className={style.slider}>
                                {activeProject.images && activeProject.images.length > 0 ? (
                                    activeProject.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            onClick={() => handleImageClick(image)}
                                            alt={`Image ${index}`}
                                        />
                                    ))
                                ) : (
                                    <p>Нет изображений для отображения</p>
                                )}
                            </div>
                        </div>
                        <div className={style.contentRight}>
                        {isRealized ? (
                            <>
                                <motion.p
                                    className={style.contentRightTopThirdText}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                >
                                    {/* Отображение названия проекта из `text` */}
                                    {activeProject.text}
                                </motion.p>
                                {/* Кнопка "Оставить заявку" для реализованных проектов */}
                                <motion.div
                                    className={style.contentRightBottom}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <button
                                        className={style.buttonApply}
                                        onClick={togglePopup}
                                    >
                                        Оставить заявку
                                    </button>
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <div className={style.contentRightTop}>
                                    <motion.p
                                        className={style.contentRightTopFirstText}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {activeProject.title}
                                    </motion.p>
                                    <motion.p
                                        className={style.contentRightTopSecondText}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    >
                                        {activeProject.description}
                                    </motion.p>
                                    <motion.p
                                        className={style.contentRightTopThirdText}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        {activeProject.text}
                                    </motion.p>
                                </div>
                                <div className={style.contentRightMiddle}>
                                    {activeProject.features && activeProject.features.length > 0 ? (
                                        activeProject.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className={style.contentRightManager}
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 1, delay: 0.2 * index }}
                                            >
                                                <img src={galochka} alt="Checkmark" />
                                                <p className={style.contentMiddleText}>{feature}</p>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <p>Нет доступных характеристик</p>
                                    )}
                                </div>
                                <motion.div
                                    className={style.contentRightBottom}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    <button
                                        className={style.buttonApply}
                                        onClick={togglePopup}
                                    >
                                        Оставить заявку
                                    </button>
                                </motion.div>
                            </>
                        )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup форма */}
            {isPopupOpen && (
                <motion.div
                    className={style.popupOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setIsPopupOpen(false)}
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

                        {/* Отображение выбранного проекта */}
                        {activeProject && (
                            <div className={style.projectInfo}>
                                <p className={style.projectTitle}>
                                    {/* Если проект реализованный, берем `text`, иначе `title` */}
                                    Проект: {isRealized ? activeProject.text : activeProject.title || "Без названия"}
                                </p>
                            </div>
                        )}

                        <p className={style.popupTitle}>Оставьте заявку</p>
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
                            <input
                                type="hidden"
                                name="projectId"
                                value={selectedProject || "Проект не выбран"}
                            />
                            <button type="submit" className={style.submitButton}>
                                Отправить
                            </button>
                        </form>
                    
                        {/* Блок с кнопками социальных сетей */}
                        <p className={style.contactSocial}>- Или обратитесь к нам в соцсетях -</p>
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
            )}
        </div>
    );
});

export default MainWindow;
