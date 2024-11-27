import { useState, useEffect } from "react";
import style from "./styles.module.css";
import Form from "../../../widgets/Form/Form.tsx"; // Импортируем компонент Form

const services = [
    "Поиск земельных участков",
    "Геодезия участка",
    "Геология",
    "Межевальные услуги",
    "Юридические услуги",
    "Проект ремонта",
    "Ландшафтный проект",
    "Проект дома",
    "Подключение коммуникаций",
    "Ипотечное сопровождение",
    "Строительство коммерч. помещений",
    "Любые строительные работы",
];

interface ServicesSelectionProps {
    selectedServices: string[];
    toggleService: (service: string) => void;
}

const ServicesSelection: React.FC<ServicesSelectionProps> = ({ selectedServices, toggleService }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Обновление строки с услугами при изменении выбранных услуг
    useEffect(() => {
    }, [selectedServices]);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    return (
        <div className={style.main}>
            <p className={style.topText}>ВЫБРАТЬ УСЛУГИ</p>
            <div className={style.selectedContainer}>
                <div className={style.servicesContainer}>
                    {services.map((service) => (
                        <button
                            key={service}
                            className={`${style.serviceButton} ${
                                selectedServices.includes(service) ? style.selected : ""
                            }`}
                            onClick={() => toggleService(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>
                <div className={style.requestSection}>
                    <div className={style.contentRight}>
                        <div>
                            <p className={style.firstText}>Оставьте заявку</p>
                            <p className={style.secondText}>чтобы специалист связался с вами и дал конечный результат</p>
                        </div>
                    </div>
                    <button className={style.submitButton} onClick={togglePopup}>
                        Оставить заявку
                    </button>
                </div>
            </div>
            <div className={style.selectionSummary}>
                <p className={style.bottomText}>“ Выбор пунктов услуг будет включен в заявку</p>
            </div>

            {isPopupOpen && (
                <Form
                    onClose={togglePopup}
                    formType="services" // Новый тип формы
                    project={selectedServices.join(", ")} // Передаем выбранные услуги
                />
            )}
        </div>
    );
};

export default ServicesSelection;