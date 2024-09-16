import Header from "../../MainPage/Header/Header.tsx";
// import style from "./styles.module.css";
import Footer from "../../MainPage/Footer/Footer.tsx";
import MainWindow from "../MainWindow/MainWindow.tsx";
import Projects from "../Projects/Projects.tsx";
import Credit from "../Credit/Credit.tsx";
const mainProjects = () =>{
    return(
        <div>
            <Header/>
            <MainWindow/>
            <Projects/>
            <Credit/>
            <Footer/>
        </div>
    )
}
export default mainProjects;
