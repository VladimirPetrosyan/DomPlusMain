import { useState, useEffect, forwardRef } from 'react';
import style from "./styles.module.css";
import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation.tsx";
import cardData from "../Projects/Cards/cardData.ts";
import cardDataRealized from "../Projects/RealizedProjects/realizedCardData.ts";
import galochka from "../../../assets/galochka.png";
import Form from "../../../widgets/Form/Form.tsx"; // Импортируем компонент Form
import useMediaQuery from "./useMediaQuery"; // Импортируем хук

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

    // Хук для отслеживания ширины экрана
    const isSmallScreen = useMediaQuery("(max-width: 1000px)");

    useEffect(() => {
        if (selectedProjectId !== null) {
            const selectedProject = data.find(card => card.id === selectedProjectId);
            if (selectedProject) {
                setActiveProject(selectedProject);
                setMainImage(selectedProject.images[0]);
            }
        } else if (data && data.length > 0) {
            // Если проект не выбран, используем первый проект
            setActiveProject(data[0]);
            setMainImage(data[0].images[0]);
        }
    }, [isRealized, selectedProjectId, data]);

    const handleImageClick = (image: string) => {
        setMainImage(image);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    if (!activeProject) {
        return <div>Загрузка...</div>;
    }

    return (
        <div ref={ref} className={style.main}>
            <Navigation />
            <div className={style.middleContent} style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
                <div className={style.contentLeft}>
                    <motion.img
                        key={mainImage}
                        className={style.amg}
                        src={mainImage}
                        alt="Main Project Image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <div
                        className={style.slider}
                        style={{
                            flexDirection: isSmallScreen ? "row" : "column",
                            justifyContent: isSmallScreen ? "center" : "flex-start",
                            marginTop: isSmallScreen ? "20px" : "0",
                        }}
                    >
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
                                {activeProject.text}
                            </motion.p>
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

            {isPopupOpen && (
                <Form
                    onClose={togglePopup}
                    formType="project"
                    project={isRealized ? activeProject.text : activeProject.title || "Без названия"}
                />
            )}
        </div>
    );
});

export default MainWindow;
