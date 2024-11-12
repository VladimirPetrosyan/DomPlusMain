import Header from "../../MainPage/Header/Header.tsx";
import Navigation from "../../Projects/Navigation/Navigation.tsx";
import ConstructorSection from "../ConstructorSections/ConstructorSection.tsx";
import style from "./styles.module.css";
import Footer from "../../MainPage/Footer/Footer.tsx";

const ConstructorPage = () => {
    return (
        <div className={style.main}>
            <Header />
            <Navigation />
            <div>
                <ConstructorSection/>
            </div>
            <Footer />
        </div>
    );
};

export default ConstructorPage;