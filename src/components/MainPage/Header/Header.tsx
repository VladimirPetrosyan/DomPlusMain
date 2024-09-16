import logo from "../../../assets/Иконка@2x.svg";
import style from "./styles.module.css";
import {Link} from "react-router-dom";
const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src={logo}/>
            </div>

            <div className={style.controlPanel}>
                <p>
                    <Link to={"/"}>Главная</Link>
                </p>
                <p>
                    <Link to={"/services"}>Услуги</Link>
                </p>
                <p>
                    <Link to={"/projects"}> Проекты</Link>
                </p>
                <p>
                    Собрать свой дом
                </p>
                <p>
                    Расчет стоимости
                </p>
                <p>
                    О нас
                </p>
            </div>

            <div className={style.bid}>
                <button>Оставить заявку</button>
            </div>

        </div>
    )
}
export default Header;
