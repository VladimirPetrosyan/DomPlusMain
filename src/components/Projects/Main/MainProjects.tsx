import Header from "../../MainPage/Header/Header";
import Footer from "../../MainPage/Footer/Footer";
import MainWindow from "../MainWindow/MainWindow";
import Projects from "../Projects/Projects";
import RealizedProjects from "../Projects/RealizedProjects/RealizedProjects";
import Credit from "../Credit/Credit";
import { useState } from 'react';
import style from "./styles.module.css";
import { motion } from "framer-motion";

const MainProjects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [view, setView] = useState<"projects" | "realized">("projects");

    const handleProjectSelect = (projectId: number) => {
        setSelectedProjectId(projectId);
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
                <MainWindow selectedProjectId={selectedProjectId} />
                <div className={style.tabContainer}>
                    <button
                        className={`${style.tabButton} ${view === "projects" ? style.activeTab : ""}`}
                        onClick={() => setView("projects")}
                    >
                        Проекты
                    </button>
                    <button
                        className={`${style.tabButton} ${view === "realized" ? style.activeTab : ""}`}
                        onClick={() => setView("realized")}
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
                    <Credit />
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