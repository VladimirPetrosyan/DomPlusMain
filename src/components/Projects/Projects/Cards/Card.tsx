import {FC} from "react";
import {motion} from "framer-motion";
import {useInView} from 'react-intersection-observer';
import style from "../styles.module.css";

type CardProps = {
    image: string,
    text: string,
    onClick: () => void,
    key?: number
};

const Card: FC<CardProps> = ({image, text, onClick, key}) => {
    const {ref, inView} = useInView({triggerOnce: true});

    return (
        <motion.div
            ref={ref}
            className={style.oneProject}
            onClick={onClick}
            initial={{opacity: 0, y: 50}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8}}
        >
            <img className={style.projectImage} src={image} alt={text}/>
            <div className={style.overlay}></div>
            <div className={style.textContainer}>
                <p className={style.imageBottomText}>{text}</p>
            </div>
        </motion.div>
    );
};

export default Card;