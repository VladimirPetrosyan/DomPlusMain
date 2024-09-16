import HeaderBottom from "../HeaderBottom/HeaderBottom.tsx";
import style from "./styles.module.css";
import ProjectAsistance from "../ProjectAsistence/ProjectAsistance.tsx";
import OurProject from "../OurProject/OurProject.tsx";
import Feedback from "../Feedback/Feedback.tsx";
import Footer from "../Footer/Footer.tsx";
import Maps from "../Map/Map.tsx";
import Header from "../Header/Header.tsx";

const Main = () => {
    return (
        <div className={style.main}>
            <Header/>
            <HeaderBottom/>
            <ProjectAsistance/>
            <OurProject/>
            <Feedback/>
            <Maps/>
            <Footer/>
        </div>
    )
}
export default Main;
