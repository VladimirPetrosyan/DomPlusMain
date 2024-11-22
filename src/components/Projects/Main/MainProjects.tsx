import { useState, useRef } from 'react';
import Header from "../../MainPage/Header/Header";
import Footer from "../../MainPage/Footer/Footer";
import MainWindow from "../MainWindow/MainWindow";
import Projects from "../Projects/Projects";
import RealizedProjects from "../Projects/RealizedProjects/RealizedProjects";
import Credit from "../Credit/Credit";
import style from "./styles.module.css";
import { motion } from "framer-motion";

const MainProjects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(() => {
        // Читаем сохраненный выбор из localStorage
        const savedProjectId = localStorage.getItem("selectedProjectId");
        return savedProjectId ? parseInt(savedProjectId, 10) : null;
    });

    const [view, setView] = useState<"projects" | "realized">(() => {
        // Читаем сохраненный выбор вкладки из localStorage
        const savedView = localStorage.getItem("view");
        return savedView === "realized" ? "realized" : "projects";
    });

    const mainWindowRef = useRef<HTMLDivElement>(null); // Создаем ref для MainWindow

    const handleProjectSelect = (projectId: number) => {
        setSelectedProjectId(projectId);
        localStorage.setItem("selectedProjectId", projectId.toString()); // Сохраняем выбранный ID в localStorage

        // Скроллим к MainWindow, если есть ref
        if (mainWindowRef.current) {
            mainWindowRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleViewChange = (newView: "projects" | "realized") => {
        setView(newView);
        localStorage.setItem("view", newView); // Сохраняем выбор вкладки в localStorage
    };

    const transitionVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.5 } }
    };

    return (
        <div>
            <Header />
            <div>
                <MainWindow ref={mainWindowRef} selectedProjectId={selectedProjectId} isRealized={view === "realized"} />
                <div className={style.tabContainer}>
                    <button
                        className={`${style.tabButton} ${view === "projects" ? style.activeTab : ""}`}
                        onClick={() => handleViewChange("projects")}
                    >
                        Проекты
                    </button>
                    <button
                        className={`${style.tabButton} ${view === "realized" ? style.activeTab : ""}`}
                        onClick={() => handleViewChange("realized")}
                    >
                        Реализованные проекты
                    </button>
                </div>
            </div>
            {view === "projects" ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={transitionVariants}
                >
                    <Projects onProjectSelect={handleProjectSelect} />
                    <Credit selectedProjectId={selectedProjectId} />
                </motion.div>
            ) : (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={transitionVariants}
                >
                    <RealizedProjects onProjectSelect={handleProjectSelect} />
                </motion.div>
            )}
            <Footer />
        </div>
    );
};

export default MainProjects;
