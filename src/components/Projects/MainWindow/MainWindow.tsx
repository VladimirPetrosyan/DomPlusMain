import { useState, useRef, useEffect, FC } from 'react';
import style from "./styles.module.css";
import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation.tsx";
import cardData from "../Projects/Cards/cardData.ts";
import cardDataRealized from "../Projects/RealizedProjects/realizedCardData.ts"; // Импорт данных для реализованных проектов
import galochka from "../../../assets/galochka.png";

type MainWindowProps = {
    selectedProjectId: number | null;
    isRealized: boolean; // Новое свойство для определения типа контента (реализованные или обычные проекты)
};

const MainWindow: FC<MainWindowProps> = ({ selectedProjectId, isRealized }) => {
    // Выбор данных на основе текущей вкладки
    const data = isRealized ? cardDataRealized : cardData;

    // Состояния активного проекта
    const [activeProject, setActiveProject] = useState<any>(null);
    const [mainImage, setMainImage] = useState<string>("");

    const mainWindowRef = useRef<HTMLDivElement>(null);

    // Обновление активного проекта при изменении типа контента (реализованные или обычные)
    useEffect(() => {
        // Если выбран проект, то подгружаем его, иначе выбираем первый проект в списке
        if (selectedProjectId !== null) {
            const selectedProject = data.find(card => card.id === selectedProjectId);
            if (selectedProject) {
                setActiveProject(selectedProject);
                setMainImage(selectedProject.images[0]);
            }
        } else {
            // Если проект не выбран, то устанавливаем первый проект из данных
            if (data && data.length > 0) {
                setActiveProject(data[0]);
                setMainImage(data[0].images[0]);
            }
        }
    }, [isRealized, selectedProjectId, data]); // Завязка на isRealized, selectedProjectId и data

    const handleImageClick = (image: string) => {
        setMainImage(image);
    };

    if (!activeProject) {
        // Показать загрузку или сообщение об ошибке, если данных нет
        return <div>Загрузка...</div>;
    }

    return (
        <div ref={mainWindowRef} className={style.main}>
            <Navigation />
            <div className={style.middleContent}>
                <div className={style.contentLeft}>
                    <div className={style.contentOne}>
                        <div style={{height: "max-content", width: "max-content"}}>
                            <motion.img
                                key={mainImage}
                                className={style.amg}
                                src={mainImage}
                                alt="Main Project Image"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1}}
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
                                <motion.p
                                    className={style.contentRightTopThirdText}
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 1, delay: 0.4}}
                                >
                                    {activeProject.text}
                                </motion.p>
                            ) : (
                                <>
                                    <div className={style.contentRightTop}>
                                        <motion.p
                                            className={style.contentRightTopFirstText}
                                            initial={{opacity: 0, x: 100}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 1}}
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
                                        <button className={style.bottomButton}>Посчитать ипотеку</button>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainWindow;
