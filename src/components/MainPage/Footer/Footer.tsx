import style from "./styles.module.css";
import tg from "../../../assets/Tg.png";
import Vk from "../../../assets/Vk.svg";
import inst from "../../../assets/Inst.png";
const Footer = () =>{
    return(
        <div className={style.main}>
            <div className={style.firstRow}>
                <p className={style.topText}>
                    ИП ВАРДАНЯН АВИК ВАЛЕРИЕВИЧ
                </p>
                <p className={style.middleText}>
                    ИНН 690891216631
                </p>
                <div className={style.bottomContent}>
                    <a href="https://t.me/dom_plus_rnd" target="_blank" rel="noopener noreferrer">
                        <img src={tg} alt="Telegram" />
                    </a>
                    <a href="https://vk.com/dompluse" target="_blank" rel="noopener noreferrer">
                        <img src={Vk} alt="ВКонтакте" />
                    </a>
                    <a href="https://instagram.com/dom_plus_rnd/" target="_blank" rel="noopener noreferrer">
                        <img src={inst} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className={style.secondRow}>
                <p className={style.contact}>
                    КОНТАКТЫ
                </p>
                <p className={style.contactNumber}>
                    {("+7 (904) 007-94-38")}
                </p>
                <p className={style.contactNumber}>
                    {("+7 (909) 428-88-58")}
                </p>
                <p className={style.secondRowText}>
                    Консультации и расчет
                </p>
            </div>
            <div className={style.secondRow}>
                <p className={style.contact}>
                ЭЛЕКТРОННАЯ ПОЧТА
                </p>
                <p className={style.secondRowText}>
                    dompluse.rnd@yandex.ru
                </p>
                <p className={style.secondRowText}>
                    Напишите нам
                </p>
            </div>
            <div className={style.secondRow}>
                <p className={style.contact}>
                    АДРЕС:
                </p>
                <p className={style.secondRowText}>
                    14-я линия 50, Ростов-на-Дону
                </p>
            </div>
        </div>
    )
}
export default Footer;
