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

const serviceMapping = {
    geo: "Поиск земельных участков",
    leftRec: "Геодезия участка",
    mej: "Межевальные услуги",
    geolog: "Геология",
    homeProject: "Проект дома",
    landshaft: "Ландшафтный проект",
    projectRemont: "Проект ремонта",
    Ipoteka: "Ипотечное сопровождение",
    UrUs: "Юридические услуги",
    Group19: "Подключение коммуникаций",
    Group20: "Строительство коммерч. помещений",
    Group21: "Любые строительные работы",
};
type ServiceKeys = keyof typeof serviceMapping;

const Window = ({ toggleService }) => {
    const handleImageClick = (key: ServiceKeys) => {
        if (serviceMapping[key]) {
            toggleService(serviceMapping[key]);
        }
    };

    return (
        <div>
            <div className={style.main}>
                <div className={style.firstContainer}>
                    <div className={style.firstContainerLeft}>
                        <img
                            className={style.leftRec}
                            src={leftRec}
                            alt="Поиск земельных участков"
                            onClick={() => handleImageClick("leftRec")}
                        />
                    </div>
                    <div className={style.firstContainerRight}>
                        <div className={style.adaptive}>
                            <img
                                className={style.rightRec}
                                src={geo}
                                alt="Геодезия участка"
                                onClick={() => handleImageClick("geo")}
                            />
                        </div>
                        <img
                            className={style.rightRec2}
                            src={mej}
                            alt="Межевальные услуги"
                            onClick={() => handleImageClick("mej")}
                        />
                    </div>
                </div>
                <div className={style.secondContainer}>
                    <div className={style.secondLeftContainer}>
                        <img
                            className={style.imgCont}
                            src={geolog}
                            alt="Геология"
                            onClick={() => handleImageClick("geolog")}
                        />
                        <img
                            className={style.imgCont}
                            src={homeProject}
                            alt="Проект дома"
                            onClick={() => handleImageClick("homeProject")}
                        />
                    </div>
                    <div className={style.secondRightContainer}>
                        <img
                            className={style.imgCont}
                            src={UrUs}
                            alt="Юридические услуги"
                            onClick={() => handleImageClick("UrUs")}
                        />
                        <img
                            className={style.imgCont}
                            src={Ipoteka}
                            alt="Ипотека"
                            onClick={() => handleImageClick("Ipoteka")}
                        />
                    </div>
                </div>
                <div className={style.thirdContainer}>
                    <div className={style.thirdLeftContainer}>
                        <img
                            className={style.imgCont}
                            src={projectRemont}
                            alt="Проект ремонта"
                            onClick={() => handleImageClick("projectRemont")}
                        />
                        <img
                            className={style.imgCont}
                            src={Group19}
                            alt="Подключение коммуникаций"
                            onClick={() => handleImageClick("Group19")}
                        />
                        <img
                            className={style.imgCont}
                            src={Group21}
                            alt="Любые строительные работы кроме дорожных"
                            onClick={() => handleImageClick("Group21")}
                        />
                    </div>
                    <div className={style.thirdRightContainer}>
                        <img
                            className={style.imgCont}
                            src={landshaft}
                            alt="Ландшафтный проект"
                            onClick={() => handleImageClick("landshaft")}
                        />
                        <img
                            className={style.imgCont}
                            src={Group20}
                            alt="Строительство нежилых коммерческих помещений"
                            onClick={() => handleImageClick("Group20")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Window;
