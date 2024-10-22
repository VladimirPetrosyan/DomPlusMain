import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import style from "./styles.module.css";

type CardProps = {
    topText: string;
    bottomText: string;
};

const OurProjectCard: FC<CardProps> = ({ topText, bottomText }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <motion.div
            className={style.oneProject}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
        >
            <p className={style.imageTopText}>{topText}</p>
            <p className={style.imageBottomText}>{bottomText}</p>
        </motion.div>
    );
};

export default OurProjectCard;
