import { useState } from "react";
import style from "./styles.module.css";

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

const ServicesSelection = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(
                selectedServices.filter((selected) => selected !== service)
            );
        } else {
            setSelectedServices([...selectedServices, service]);
        }
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
                        <div className={style.textRequest}>
                            <p className={style.firstText}>Оставьте заявку</p>
                            <p className={style.secondText}>чтобы специалист связался с вами и дал конечный результат</p>
                        </div>
                    </div>
                    <button className={style.submitButton}>Оставить заявку</button>
                </div>
            </div>
            <div className={style.selectionSummary}>
                <p className={style.bottomText}>“ Выбор пунктов услуг будет включен в заявку</p>
            </div>
        </div>
    );
};

export default ServicesSelection;
