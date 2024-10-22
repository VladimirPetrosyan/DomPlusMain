import { FC } from "react";
import Card from "./Cards/Card";
import cardData from "./Cards/cardData";
import style from "./project.module.css";

const Projects: FC<{ onProjectSelect: (projectId: number) => void }> = ({ onProjectSelect }) => {
    return (
        <div className={style.main}>
            <div className={style.projects}>
                {cardData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.mainImage}
                        text={card.text}
                        onClick={() => onProjectSelect(card.id)}
                    />
                ))}
            </div>
            <div className={style.buttonContainer}>
                <button className={style.submitButton}>
                    Заказать индивидуальный проект
                </button>
            </div>
        </div>
    );
};

export default Projects;