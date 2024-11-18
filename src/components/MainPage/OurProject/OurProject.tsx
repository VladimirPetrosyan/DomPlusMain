import { FC } from "react";
import style from "./styles.module.css";
import Card from "./OurProjectCard";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import ourProjectCardData from "./ourProjectCardData";
import {Link} from "react-router-dom"; // Импортируем данные карточек

const OurProject: FC = () => {
    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
    const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true });

    return (
        <div className={style.main}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 50 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className={style.mainName}
            >
                <p className={style.ourProjects}>Наши Проекты</p>
            </motion.div>
            <div className={style.projects}>
                {ourProjectCardData.map((card) => (
                    <Card
                        key={card.id}
                        bottomText={card.bottomText}
                    />
                ))}
            </div>
            <motion.div
                ref={buttonRef}
                className={style.contentBottom}
                initial={{ opacity: 0, y: 50 }}
                animate={buttonInView ? { opacity: 0.8, y: 0 } : {}}
                transition={{ duration: 1.2 }}
            >
                <button className={style.more}><Link to={"/projects"}>Больше</Link></button>
            </motion.div>
        </div>
    );
};

export default OurProject;