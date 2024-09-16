import Header from "../../MainPage/Header/Header.tsx";
import Navigation from "../../Projects/Navigation/Navigation.tsx";
import Window from "../Window/Window.tsx";
import ServicesSelection from "../ServicesSelection/ServicesSelection.tsx";
import style from "./styles.module.css"
import Footer from "../../MainPage/Footer/Footer.tsx";
const Services = () =>{
    return(
        <div className={style.main}>
            <Header/>
            <Navigation/>
            <Window/>
            <div className={style.serv}>
                <ServicesSelection/>
            </div>
            <Footer/>
        </div>
    )
}
export default Services;
