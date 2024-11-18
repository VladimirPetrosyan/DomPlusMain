import { FC } from "react";
import Card from "../Cards/Card";
import realizedCardData from "./realizedCardData";
import style from "../project.module.css";

const RealizedProjects: FC<{ onProjectSelect: (projectId: number) => void }> = ({ onProjectSelect }) => {
    return (
        <div className={style.main}>
            <div className={style.projects}>
                {realizedCardData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.mainImage as string}
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

export default RealizedProjects;