import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации
import style from "./styles.module.css";

type CardProps = {
    bottomText: string;
};

const OurProjectCard: FC<CardProps> = ({ bottomText }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/projects");
    };

    return (
        <motion.div
            className={style.oneProject}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            onClick={handleCardClick}
            style={{ cursor: "pointer" }} 
        >
            <p className={style.imageBottomText}>{bottomText}</p>
        </motion.div>
    );
};

export default OurProjectCard;