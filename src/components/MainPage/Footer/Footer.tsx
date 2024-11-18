import style from "./styles.module.css";
import tg from "../../../assets/Tg.png";
import Vk from "../../../assets/Vk.svg";
import Vb from "../../../assets/Viber.png";
import inst from "../../../assets/Inst.png";
const Footer = () =>{
    return(
        <div className={style.main}>
            <div className={style.firstRow}>
                <p className={style.topText}>
                    ИП КИБАЛЬНИКОВА ВИКТОРИЯ АРТЕМОВНА
                </p>
                <p className={style.middleText}>
                    ИНН 236007648639
                </p>
                <div className={style.bottomContent}>
                    <img src={tg}/>
                    <img src={Vk}/>
                    <img src={Vb}/>
                    <img src={inst}/>
                </div>
            </div>
            <div className={style.secondRow}>
                <p className={style.contact}>
                    КОНТАКТЫ
                </p>
                <p className={style.contactNumber}>
                    {("+7 (903) 400-03-61")}
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
                    dom.pluse.expert1@yandex.ru
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
                    Шолохова 11б, Ростов-на-Дону
                </p>
            </div>
        </div>
    )
}
export default Footer;
