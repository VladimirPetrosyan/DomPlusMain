import { useState } from "react";
import Header from "../../MainPage/Header/Header.tsx";
import Navigation from "../../Projects/Navigation/Navigation.tsx";
import Window from "../Window/Window.tsx";
import ServicesSelection from "../ServicesSelection/ServicesSelection.tsx";
import style from "./styles.module.css";
import Footer from "../../MainPage/Footer/Footer.tsx";

const Services = () => {
    // Состояние для хранения выбранных услуг
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // Функция для переключения состояния услуги
    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((selected) => selected !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    // Функция для обработки отправки данных
    const handleFormSubmit = (services: string[]) => {
        console.log("Отправленные услуги: ", services);
        // Здесь можно добавить логику отправки данных на сервер
    };

    return (
        <div className={style.main}>
            <Header />
            <Navigation />
            {/* Передаем selectedServices и toggleService в ServicesSelection */}
            <Window toggleService={toggleService} />
            <div className={style.serv}>
                <ServicesSelection
                    selectedServices={selectedServices}
                    toggleService={toggleService}
                    onSubmit={handleFormSubmit}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Services;