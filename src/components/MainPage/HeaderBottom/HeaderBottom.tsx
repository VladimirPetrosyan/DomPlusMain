import style from "./styles.module.css";
import galochka from "../../../assets/Vector.svg";
// import etap from "../../../assets/Vector 2.png";
import dom from "../../../assets/image.png";
import map from "../../../assets/Map.png";
import tg from "../../../assets/Tg.png";
import Vk from "../../../assets/Vk.svg";
import Vb from "../../../assets/Viber.png";
import inst from "../../../assets/Inst.png";
const HeaderBottom = () => {
    return(
        <div className={style.headerBottom}>
            <div className={style.diplayLeft}>
                <div className={style.displayLeftTop}>
                    <p className={style.leed}>
                        Лидер
                    </p>
                    <p className={style.leedText}>
                        В строительстве домов и продаж квартир
                    </p>
                </div>
                {/*<div className={style.etap}>*/}
                {/*    <img className={style.line} src={etap}/>*/}
                {/*</div>*/}

                <div className={style.displayLeftBottom}>
                    <div className={style.displayLeftBottomFirst}>
                        <div>
                            <img src={galochka}/>
                            <p>Надежность и профессионализм</p>
                        </div>
                        <div>
                            <img src={galochka}/>
                            <p>Индивидуальный подход к каждому проекту</p>
                        </div>
                    </div>
                    <div className={style.displayLeftBottomSecond}>
                        <div>
                            <img src={galochka}/>
                            <p>Гарантия до 25 лет</p>
                        </div>
                        <div>
                            <img src={galochka}/>
                            <p>Тут можно чота еще придумать я не придумал</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.displayRight}>
                <div className={style.contact}>
                    <p className={style.Number}>+7 (903) 400-03-61</p>
                    <div className={style.location}>
                        <img src={map}/>
                        <p className={style.address}>
                            Шолохова 11б, Ростов-на-Дону
                        </p>
                    </div>
                    <div className={style.subscribe}>
                        <img src={tg}/>
                        <img src={Vk}/>
                        <img src={inst}/>
                        <img src={Vb}/>
                    </div>
                </div>
                <div className={style.aboutProject}>
                    <p className={style.ourProject}>
                        Наши проекты
                    </p>
                    <img className={style.dom} src={dom}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;
