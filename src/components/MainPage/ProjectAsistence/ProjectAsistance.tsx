import style from "./styles.module.css";
import Group from "../../../assets/Group.png";
import geo from "../../../assets/geo.png";
import Ur from "../../../assets/Ur.png";
import imageDom from "../../../assets/imageDom.png";
const ProjectAsistance = () =>{
    return(
        <div className={style.main}>
            <div className={style.headerText}>
                <p className={style.topText}>
                    От идеи до воплощения —
                </p>
                <p className={style.bottomText}>
                    каждый шаг под контролем
                </p>
            </div>
            <div className={style.window}>
                <div className={style.leftContent}>
                    <div className={style.helpText}>
                        <p className={style.helpTextTop}>
                            Мы поможем вам
                        </p>
                        <p className={style.helpTextBottom}>
                            найти идеальный земельный участок
                        </p>
                    </div>
                    <div className={style.helpIco}>
                        <div className={style.globalIco}>
                            <img src={geo}/>
                            <p className={style.icoText}>
                                Расположение
                            </p>
                        </div>
                        <div className={style.globalIco}>
                            <img src={Group}/>
                            <p className={style.icoText}>
                                Инфраструктура
                            </p>
                        </div>
                        <div className={style.globalIco}>
                            <img src={Ur}/>
                            <p className={style.icoText}>
                                Юридическая чистота
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.rightContent}>
                    <img className={style.imageDom} src={imageDom}/>
                </div>
            </div>
            <div className={style.bottomContent}>
                <div className={style.slider}>
                    <button className={style.sliderArrow}>
                        {`<`}
                    </button>
                    <div className={style.sliderFirstContent}>
                        <p className={style.sliderContentText}>1</p>
                    </div>
                    <div className={style.sliderSecondContent}>
                        <p className={style.sliderContentTextSecond}>2</p>
                    </div>
                    <div className={style.sliderThirdContent}>
                        <p className={style.sliderContentTextThird}>3</p>
                    </div>
                    <button className={style.sliderArrow}>{`>`}</button>
                </div>
                <p className={style.quote}>“ Учитываем <b>каждый</b> ваш запрос</p>
            </div>
        </div>
    )
}
export default ProjectAsistance;
