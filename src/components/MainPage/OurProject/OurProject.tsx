import style from "./styles.module.css";
const OurProject = () =>{
    return(
        <div className={style.main}>
            <div className={style.mainName}>
                <p className={style.ourProjects}>Наши Проекты</p>
            </div>
            <div className={style.projects}>
                <div className={style.oneProject}>
                    <p className={style.imageTopText}>82,6М^2</p>
                    <p className={style.imageBottomText}>14 150 ₽/мес</p>
                </div>
                <div className={style.oneProject}>
                    <p className={style.imageTopText}>82,6М^2</p>
                    <p className={style.imageBottomText}>14 150 ₽/мес</p>
                </div>
                <div className={style.oneProject}>
                    <p className={style.imageTopText}>82,6М^2</p>
                    <p className={style.imageBottomText}>14 150 ₽/мес</p>
                </div>
                <div className={style.oneProject}>
                    <p className={style.imageTopText}>82,6М^2</p>
                    <p className={style.imageBottomText}>14 150 ₽/мес</p>
                </div>
            </div>
            <div className={style.contentBottom}>
                <button className={style.more}>Больше</button>
            </div>
        </div>
    )
}
export default OurProject;
