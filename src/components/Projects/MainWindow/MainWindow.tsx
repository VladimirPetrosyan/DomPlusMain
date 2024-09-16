import style from "./styles.module.css";

import imageMain from "../../../assets/imageMain.png";
import littleHouse from "../../../assets/littleHouse.png";
import littleHouse2 from "../../../assets/littleHouse2.png";
import plan1 from "../../../assets/plan1.png";
import plan2 from "../../../assets/plan2.png";
import plan3 from "../../../assets/plan3.png";
import plan4 from "../../../assets/plan4.png";
import galochka from "../../../assets/galochka.png";
import Navigation from "../Navigation/Navigation.tsx";


const MainWindow = () => {
    return(
        <div className={style.main}>
            <Navigation/>
            <div className={style.middleContent}>
                <div className={style.contentLeft}>
                    <div className={style.contentOne}>
                        <img className={style.amg} src={imageMain}/>
                        <div className={style.slider}>
                            <img src={littleHouse}/>
                            <img src={littleHouse2}/>
                            <img src={plan1}/>
                            <img src={plan2}/>
                            <img src={plan3}/>
                            <img src={plan4}/>
                        </div>
                        <div className={style.contentRight}>
                            <div className={style.contentRightTop} >
                                <div>
                                    <p className={style.contentRightTopFirstText}>Двухэтажный дом
                                    </p>
                                    <p className={style.contentRightTopSecondText}>
                                        с просторными жилыми комнатами
                                    </p>
                                </div>
                                <div>
                                    <p className={style.contentRightTopThirdText}>
                                        366,66 м2
                                    </p>
                                    <p className={style.contentRightTopFourthlyText}>14 150 000 ₽
                                    </p>
                                </div>
                            </div >
                            <div className={style.contentRightMiddle}>
                                <div className={style.contentRightManager}>
                                    <img src={galochka}/>
                                    <p className={style.contentMiddleText}>3 спальни и кабинет</p>
                                </div>
                                <div className={style.contentRightManager}>
                                    <img src={galochka}/>
                                    <p className={style.contentMiddleText}>Просторная кухня и гостиная</p>
                                </div>
                                <div className={style.contentRightManager}>
                                    <img src={galochka}/>
                                    <p className={style.contentMiddleText}>Отделка в стиле минимализм</p>
                                </div>
                                <div className={style.contentRightManager}>
                                    <img src={galochka}/>
                                    <p className={style.contentMiddleText}>Панорамные окна</p>
                                </div>
                            </div>
                            <div className={style.contentRightBottom}>
                                <button className={style.bottomButton}>Посчитать ипотеку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainWindow;
