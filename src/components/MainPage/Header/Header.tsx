import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/Иконка@2x.svg";
import style from "./styles.module.css";
import Form from "../../../widgets/Form/Form.tsx";
import tg from "../../../assets/Tg.png";
import vk from "../../../assets/Vk.svg";
import inst from "../../../assets/Inst.png";
import map from "../../../assets/Map.png";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const closeMenuOnOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsMenuVisible(false);
        }
    };

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <header className={style.header}>
                <div className={style.logo}>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <nav className={style.controlPanel}>
                    <p className={isActive("/") ? style.activeLink : ""}>
                        <Link to="/">Главная</Link>
                    </p>
                    <p className={isActive("/services") ? style.activeLink : ""}>
                        <Link to="/services">Услуги</Link>
                    </p>
                    <p className={isActive("/projects") ? style.activeLink : ""}>
                        <Link to="/projects">Проекты</Link>
                    </p>
                    <p className={isActive("/constructor") ? style.activeLink : ""}>
                        <Link to="/constructor">Собрать свой дом</Link>
                    </p>
                    <p className={isActive("/reviews") ? style.activeLink : ""}>
                        <Link to="/reviews">Отзывы</Link>
                    </p>
                </nav>

                <div className={style.bid} onClick={toggleForm}>
                    <span>Оставить заявку</span>
                </div>

                <div
                    className={`${style.burgerIcon} ${isMenuVisible ? style.open : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            {isMenuVisible && (
                <div className={style.menuOverlay} onClick={closeMenuOnOutsideClick}>
                    <motion.div
                        className={style.burgerMenu}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // Оставить попап открытым при клике на него
                    >
                        <div className={style.closeButton} onClick={toggleMenu}>
                            ✕
                        </div>

                        <div className={style.contactInfo}>
                            <p className={style.phone}>+7 (903) 400-03-61</p>
                            <div className={style.address}>
                                <img src={map} alt="Location" />
                                <p>Шолохова 11б, Ростов-на-Дону</p>
                            </div>
                            <div className={style.socialLinks}>
                                <a href="https://t.me/dom_plus_rnd" target="_blank" rel="noopener noreferrer">
                                    <img src={tg} alt="Telegram" />
                                </a>
                                <a href="https://vk.com/dompluse" target="_blank" rel="noopener noreferrer">
                                    <img src={vk} alt="ВКонтакте" />
                                </a>
                                <a href="https://instagram.com/dom_plus_rnd/" target="_blank" rel="noopener noreferrer">
                                    <img src={inst} alt="Instagram" />
                                </a>
                            </div>
                        </div>

                        <nav className={style.navLinks}>
                            <p>
                                <Link to="/" onClick={toggleMenu}>Главная</Link>
                            </p>
                            <hr />
                            <p>
                                <Link to="/services" onClick={toggleMenu}>Услуги</Link>
                            </p>
                            <hr />
                            <p>
                                <Link to="/projects" onClick={toggleMenu}>Проекты</Link>
                            </p>
                            <hr />
                            <p>
                                <Link to="/constructor" onClick={toggleMenu}>Собрать свой дом</Link>
                            </p>
                            <hr />
                            <p>
                                <Link to="/reviews" onClick={toggleMenu}>Отзывы</Link>
                            </p>
                        </nav>

                        <div className={style.bidMenu} onClick={toggleForm}>
                            <span>Оставить заявку</span>
                        </div>
                    </motion.div>
                </div>
            )}

            {isFormVisible && (
                <div className={style.formOverlay} onClick={toggleForm}>
                    <div className={style.formContainer} onClick={(e) => e.stopPropagation()}>
                        <Form onClose={toggleForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
