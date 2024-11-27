import { FC, useState } from "react";
import { createPortal } from "react-dom";
import style from "./styles.module.css";
import banks from "../../../assets/banks.jpg";
import Form from "../../../widgets/Form/Form"; // Подключаем компонент Form

interface CreditProps {
    selectedProjectId: number | null; // ID выбранного проекта (если есть)
}

const Credit: FC<CreditProps> = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={style.mortgageContainer}>
            <div className={style.mortgageImage}>
                <img src={banks} alt="Mortgage Programs" />
            </div>
            <div className={style.mortgageText}>
                <h2>Доступные ипотечные программы для ИЖС</h2>
                <ul>
                    <li>Семейная ипотека с использованием эскроу 6%</li>
                    <li>Сельская ипотека 2.75%</li>
                    <li>IT-ипотека 6%</li>
                    <li>Военная ипотека (рассчитывается индивидуально)</li>
                </ul>
                <button onClick={togglePopup} className={style.buttonApply}>
                    Оставить заявку
                </button>
            </div>
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

export default Credit;