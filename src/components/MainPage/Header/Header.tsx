import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/Иконка@2x.svg";
import style from "./styles.module.css";
import Form from "../../../widgets/Form/Form.tsx"; // Импортируем компонент Form

const Header = () => {
    const [isFormVisible, setIsFormVisible] = useState(false); // Состояние для отображения формы
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    // Функция для открытия/закрытия формы
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className={style.controlPanel}>
                    <p className={isActive("/") ? style.activeLink : ""}>
                        <Link to={"/"}>Главная</Link>
                    </p>
                    <p className={isActive("/services") ? style.activeLink : ""}>
                        <Link to={"/services"}>Услуги</Link>
                    </p>
                    <p className={isActive("/projects") ? style.activeLink : ""}>
                        <Link to={"/projects"}>Проекты</Link>
                    </p>
                    <p className={isActive("/constructor") ? style.activeLink : ""}>
                        <Link to={"/constructor"}>Собрать свой дом</Link>
                    </p>
                    <p className={isActive("/reviews") ? style.activeLink : ""}>
                        <Link to={"/reviews"}>Отзывы</Link>
                    </p>
                </div>

                <div className={style.bid} onClick={toggleForm}>
                    <span>Оставить заявку</span>
                </div>
            </div>

            {/* Вызов компонента Form */}
            {isFormVisible && (
                <div >
                    <Form onClose={toggleForm} />
                </div>
            )}
        </div>
    );
};

export default Header;
