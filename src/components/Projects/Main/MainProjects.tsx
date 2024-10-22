import Header from "../../MainPage/Header/Header.tsx";
// import style from "./styles.module.css";
import Footer from "../../MainPage/Footer/Footer.tsx";
import MainWindow from "../MainWindow/MainWindow.tsx";
import Projects from "../Projects/Projects.tsx";
import Credit from "../Credit/Credit.tsx";
import { useState } from 'react';
const MainProjects = () =>{
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    const handleProjectSelect = (projectId: number) => {
        setSelectedProjectId(projectId);
    };
    return(
        <div>
            <Header/>
            <MainWindow selectedProjectId={selectedProjectId} />
            <Projects onProjectSelect={handleProjectSelect} />
            <Credit/>
            <Footer/>
        </div>
    )
}
export default MainProjects;
