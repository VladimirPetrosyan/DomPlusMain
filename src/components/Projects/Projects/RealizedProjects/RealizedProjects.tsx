import { FC, useState } from "react";
import Card from "../Cards/Card";
import realizedCardData from "./realizedCardData";
import style from "../project.module.css";
import Form from "../../../../widgets/Form/Form.tsx"; // Импортируем компонент Form
import { createPortal } from "react-dom";

const RealizedProjects: FC<{ onProjectSelect: (projectId: number) => void }> = ({ onProjectSelect }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Состояние для управления формой

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen); // Открыть/закрыть форму
    };

    return (
        <div className={style.main}>
            <div className={style.projects}>
                {realizedCardData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.mainImage as string}
                        text={card.text}
                        onClick={() => onProjectSelect(card.id)}
                    />
                ))}
            </div>
            <div className={style.buttonContainer}>
                <button className={style.submitButton} onClick={togglePopup}>
                    Заказать индивидуальный проект
                </button>
            </div>

            {/* Форма заявки */}
            {isPopupOpen &&
                createPortal(
                    <Form
                        onClose={togglePopup}
                        formType="default" // Указываем тип формы (default)
                        project={null} // Параметр project не нужен для формы кредита
                    />,
                    document.body
            )}
        </div>
    );
};

export default RealizedProjects;
