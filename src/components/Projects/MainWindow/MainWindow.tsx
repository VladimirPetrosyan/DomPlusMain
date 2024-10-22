import { useState, useRef, useEffect, FC } from 'react';
import style from "./styles.module.css";
import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation.tsx";
import cardData from "../Projects/Cards/cardData.ts";  // импортируем данные проектов
import galochka from "../../../assets/galochka.png";

type MainWindowProps = {
    selectedProjectId: number | null;  // Пропс с типом number или null
};

const MainWindow: FC<MainWindowProps> = ({ selectedProjectId }) => {
    // Состояние для текущего выбранного проекта
    const [activeProject, setActiveProject] = useState(cardData[0]);
    const [mainImage, setMainImage] = useState(activeProject.images[0]);
    
    // Ref для скролла
    const mainWindowRef = useRef<HTMLDivElement>(null);

    // Функция для смены проекта
    const handleProjectChange = (projectId: number) => {
        const selectedProject = cardData.find(card => card.id === projectId);
        if (selectedProject) {
            setActiveProject(selectedProject);
            setMainImage(selectedProject.images[0]);
            mainWindowRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Отслеживаем изменения selectedProjectId
    useEffect(() => {
        if (selectedProjectId !== null) {
            handleProjectChange(selectedProjectId);
        }
    }, [selectedProjectId]);

    const handleImageClick = (image: string) => {
        setMainImage(image);
    };

    return (
        <div ref={mainWindowRef} className={style.main}>
            <Navigation />
            <div className={style.middleContent}>
                <div className={style.contentLeft}>
                    <div className={style.contentOne}>
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
                            {activeProject.images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image} 
                                    onClick={() => handleImageClick(image)} 
                                    alt={`Image ${index}`} 
                                />
                            ))}
                        </div>
                        <div className={style.contentRight}>
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
                                <motion.p
                                    className={style.contentRightTopFourthlyText}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                >
                                </motion.p>
                            </div>
                            <div className={style.contentRightMiddle}>
                                {[...Array(4)].map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className={style.contentRightManager}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.2 * index }}
                                    >
                                        <img src={galochka} alt="Checkmark" />
                                        <p className={style.contentMiddleText}>
                                            {[
                                                "3 спальни и кабинет",
                                                "Просторная кухня и гостиная",
                                                "Отделка в стиле минимализм",
                                                "Панорамные окна"
                                            ][index]}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                className={style.contentRightBottom}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <button className={style.bottomButton}>Посчитать ипотеку</button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainWindow;