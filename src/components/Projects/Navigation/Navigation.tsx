import style from "./styles.module.css";
import { Link, useLocation } from 'react-router-dom';
import arrow from "../../../assets/Arrow.png";
import rectangle from "../../../assets/Rectangle.png";

const Navigation = () => {
    // Используем useLocation внутри компонента
    const location = useLocation();

    // Определяем, где находится компонент
    const isProjectsPage = location.pathname === '/projects';
    const isServicesPage = location.pathname === '/services';

    return (
        <div className={style.main}>
            <div className={style.topContent}>
                <p className={style.navigate}>
                    <Link className={style.address} to={'/'}> Главная</Link>
                    <img src={arrow} alt="arrow" />
                    {isProjectsPage ? (
                        <Link className={style.address} to={'/projects'}>Проекты</Link>
                    ) : isServicesPage ? (
                        <Link className={style.address} to={'/services'}>Услуги</Link>
                    ) : null}
                </p>
                <p className={style.pageName}>
                    {isProjectsPage ? 'Проекты' : isServicesPage ? 'Услуги' : ''}
                </p>
                <div className={style.imgRectangle}>
                    <img className={style.rectangle} src={rectangle} alt="rectangle" />
                    <p className={style.imgText}>
                        {isProjectsPage
                            ? '"От фундамента до крыши – профессиональный подход к каждому проекту!"'
                            : isServicesPage
                                ? '"Полный спектр строительных услуг для вашего идеального проекта"'
                                : ''}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
