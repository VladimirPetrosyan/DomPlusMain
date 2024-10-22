import Header from "../../MainPage/Header/Header.tsx";
import Navigation from "../../Projects/Navigation/Navigation.tsx";
import ReviewsSection from "../ReviewsSection/ReviewsSection.tsx";
import style from "./styles.module.css";
import Footer from "../../MainPage/Footer/Footer.tsx";
import reviewsData from "../../../../reviewsData.json";

const ReviewsPage = () => {
    return (
        <div className={style.main}>
            <Header />
            <Navigation />
            <div className={style.reviews}>
                <ReviewsSection reviews={reviewsData} />
            </div>
            <Footer />
        </div>
    );
};

export default ReviewsPage;