import Header from "../../MainPage/Header/Header.tsx";
import Navigation from "../../Projects/Navigation/Navigation.tsx";
import ConstructorSection from "../ConstructorSections/ConstructorSection.tsx";
import Footer from "../../MainPage/Footer/Footer.tsx";



const ConstructorPage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div>
                <ConstructorSection />
            </div>
            <Footer />
        </div>
    );
};

export default ConstructorPage;