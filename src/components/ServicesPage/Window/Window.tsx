import geo from "../../../assets/Geo1.svg";
import leftRec from "../../../assets/leftRectangle.svg";
import mej from "../../../assets/Mej.svg";
import style from "./styles.module.css";
import geolog from "../../../assets/geolog.svg";
import homeProject from "../../../assets/homeProject.svg";
import landshaft from "../../../assets/landshaft.svg";
import projectRemont from "../../../assets/projectRemont.svg";
import Ipoteka from "../../../assets/Ipoteka.svg";
import UrUs from "../../../assets/UrUs.svg";
import Group19 from "../../../assets/Group 19.svg";
import Group20 from "../../../assets/Group 20.svg";
import Group21 from "../../../assets/Group 21.svg";
const Window = () =>{
    return(
        <div>
            <div className={style.main}>
                <div className={style.firstContainer}>
                    <div className={style.firstContainerLeft}>
                        <img className={style.leftRec} src={leftRec}/>
                    </div>
                    <div className={style.firstContainerRight}>
                        <div className={style.adaptive}>
                            <img className={style.rightRec} src={geo}/>
                        </div>
                        <img className={style.rightRec2} src={mej}/>
                    </div>
                </div>
                <div className={style.secondContainer}>
                    <div className={style.secondLeftContainer}>
                        <img className={style.imgCont} src={geolog}/>
                        <img className={style.imgCont} src={homeProject}/>
                    </div>
                    <div className={style.secondRightContainer}>
                        <img className={style.imgCont} src={UrUs}/>
                        <img className={style.imgCont} src={Ipoteka}/>
                    </div>
                </div>
                <div className={style.thirdContainer}>
                    <div className={style.thirdLeftContainer}>
                        <img className={style.imgCont} src={projectRemont}/>
                        <img className={style.imgCont} src={Group19}/>
                        <img className={style.imgCont} src={Group21}/>
                    </div>
                    <div className={style.thirdRightContainer}>
                        <img className={style.imgCont} src={landshaft}/>
                        <img className={style.imgCont} src={Group20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Window;
