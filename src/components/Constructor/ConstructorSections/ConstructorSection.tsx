import { useState } from "react";
import { motion } from "framer-motion";
import style from "./styles.module.css";
import grass1 from "../../../assets/constructor/grass1.png";
import grass2 from "../../../assets/constructor/grass2.png";
import foundation from "../../../assets/constructor/main.png";

import animation1_1 from "../../../assets/constructor/lentochniy/animation1.png";
import animation1_2 from "../../../assets/constructor/lentochniy/animation2.png";
import animation1_3 from "../../../assets/constructor/lentochniy/animation3.png";
import animation1_4 from "../../../assets/constructor/lentochniy/animation4.png";

import animation2_1 from "../../../assets/constructor/svainiy/animation1.png";
import animation2_2 from "../../../assets/constructor/svainiy/animation2.png";
import animation2_3 from "../../../assets/constructor/svainiy/animation3.png";
import animation2_4 from "../../../assets/constructor/svainiy/animation4.png";

import animation3_1 from "../../../assets/constructor/plitochniy/animation1.png";
import animation3_2 from "../../../assets/constructor/plitochniy/animation2.png";
import animation3_3 from "../../../assets/constructor/plitochniy/animation3.png";
import animation3_4 from "../../../assets/constructor/plitochniy/animation4.png";

// Анимации для стен
import wallGazoblock1 from "../../../assets/constructor/gazoblock/animation1.png";
import wallGazoblock2 from "../../../assets/constructor/gazoblock/animation2.png";
import wallGazoblock3 from "../../../assets/constructor/gazoblock/animation3.png";
import wallGazoblock4 from "../../../assets/constructor/gazoblock/animation4.png";
import wallGazoblock5 from "../../../assets/constructor/gazoblock/animation5.png";
import wallGazoblock6 from "../../../assets/constructor/gazoblock/animation6.png";
import wallGazoblock7 from "../../../assets/constructor/gazoblock/animation7.png";
import wallGazoblock8 from "../../../assets/constructor/gazoblock/animation8.png";
import wallGazoblock9 from "../../../assets/constructor/gazoblock/animation9.png";
import wallGazoblock10_0 from "../../../assets/constructor/gazoblock/animation10_0.png";
import wallGazoblock10_1 from "../../../assets/constructor/gazoblock/animation10_1.png";
import wallGazoblock10_2 from "../../../assets/constructor/gazoblock/animation10_2.png";
import wallGazoblock10_3 from "../../../assets/constructor/gazoblock/animation10_3.png";
import wallGazoblock10_4 from "../../../assets/constructor/gazoblock/animation10_4.png";
import wallGazoblock11_1 from "../../../assets/constructor/gazoblock/animation11_1.png";
import wallGazoblock11_2 from "../../../assets/constructor/gazoblock/animation11_2.png";
import wallGazoblock11_3 from "../../../assets/constructor/gazoblock/animation11_3.png";
import wallGazoblock11_4 from "../../../assets/constructor/gazoblock/animation11_4.png";
import wallGazoblock12_1 from "../../../assets/constructor/gazoblock/animation12_1.png";
import wallGazoblock12_2 from "../../../assets/constructor/gazoblock/animation12_2.png";
import wallGazoblock13_1 from "../../../assets/constructor/gazoblock/animation13_1.png";
import wallGazoblock13_2 from "../../../assets/constructor/gazoblock/animation13_2.png";
import wallGazoblock14 from "../../../assets/constructor/gazoblock/animation14.png";

import wallKirpich1 from "../../../assets/constructor/brick/animation1.png";
import wallKirpich2 from "../../../assets/constructor/brick/animation2.png";
import wallKirpich3 from "../../../assets/constructor/brick/animation3.png";
import wallKirpich4 from "../../../assets/constructor/brick/animation4.png";
import wallKirpich5 from "../../../assets/constructor/brick/animation5.png";
import wallKirpich6 from "../../../assets/constructor/brick/animation6.png";
import wallKirpich7 from "../../../assets/constructor/brick/animation7.png";
import wallKirpich8 from "../../../assets/constructor/brick/animation8.png";
import wallKirpich9 from "../../../assets/constructor/brick/animation9.png";
import wallKirpich10_0 from "../../../assets/constructor/brick/animation10_0.png";
import wallKirpich10_1 from "../../../assets/constructor/brick/animation10_1.png";
import wallKirpich10_2 from "../../../assets/constructor/brick/animation10_2.png";
import wallKirpich10_3 from "../../../assets/constructor/brick/animation10_3.png";
import wallKirpich10_4 from "../../../assets/constructor/brick/animation10_4.png";
import wallKirpich11_1 from "../../../assets/constructor/brick/animation11_1.png";
import wallKirpich11_2 from "../../../assets/constructor/brick/animation11_2.png";
import wallKirpich11_3 from "../../../assets/constructor/brick/animation11_3.png";
import wallKirpich11_4 from "../../../assets/constructor/brick/animation11_4.png";
import wallKirpich12_1 from "../../../assets/constructor/brick/animation12_1.png";
import wallKirpich12_2 from "../../../assets/constructor/brick/animation12_2.png";
import wallKirpich13_1 from "../../../assets/constructor/brick/animation13_1.png";
import wallKirpich13_2 from "../../../assets/constructor/brick/animation13_2.png";
import wallKirpich14 from "../../../assets/constructor/brick/animation14.png";

import exteriorFinish1 from "../../../assets/constructor/exterior_vnesh/animation1.png";
import exteriorFinish2 from "../../../assets/constructor/exterior_vnesh/animation2.png";
import exteriorFinish3 from "../../../assets/constructor/exterior_vnesh/animation3.png";
import exteriorFinish4 from "../../../assets/constructor/exterior_vnesh/animation4.png";
import exteriorFinish5 from "../../../assets/constructor/exterior_vnesh/animation5.png";
import exteriorFinish6 from "../../../assets/constructor/exterior_vnesh/animation6.png";
import exteriorFinish7 from "../../../assets/constructor/exterior_vnesh/animation7.png";
import exteriorFinish8 from "../../../assets/constructor/exterior_vnesh/animation8.png";
import exteriorFinish9 from "../../../assets/constructor/exterior_vnesh/animation9.png";
import exteriorFinish10 from "../../../assets/constructor/exterior_vnesh/animation10.png";
import exteriorFinish11 from "../../../assets/constructor/exterior_vnesh/animation11.png";
import exteriorFinish12 from "../../../assets/constructor/exterior_vnesh/animation12.png";
import exteriorFinish13 from "../../../assets/constructor/exterior_vnesh/animation13.png";

import interiorFinish1 from "../../../assets/constructor/interior_vnutr/animation1.png";
import interiorFinish2 from "../../../assets/constructor/interior_vnutr/animation2.png";
import interiorFinish3 from "../../../assets/constructor/interior_vnutr/animation3.png";
import interiorFinish4 from "../../../assets/constructor/interior_vnutr/animation4.png";
import interiorFinish5 from "../../../assets/constructor/interior_vnutr/animation5.png";
import interiorFinish6 from "../../../assets/constructor/interior_vnutr/animation6.png";
import interiorFinish7 from "../../../assets/constructor/interior_vnutr/animation7.png";
import interiorFinish8 from "../../../assets/constructor/interior_vnutr/animation8.png";
import interiorFinish9 from "../../../assets/constructor/interior_vnutr/animation9.png";
import interiorFinish10 from "../../../assets/constructor/interior_vnutr/animation10.png";
import interiorFinish11 from "../../../assets/constructor/interior_vnutr/animation11.png";
import interiorFinish12 from "../../../assets/constructor/interior_vnutr/animation12.png";
import interiorFinish13 from "../../../assets/constructor/interior_vnutr/animation13.png";
import interiorFinish14 from "../../../assets/constructor/interior_vnutr/animation14.png";
import interiorFinish15 from "../../../assets/constructor/interior_vnutr/animation15.png";
import interiorFinish16 from "../../../assets/constructor/interior_vnutr/animation16.png";
import interiorFinish17 from "../../../assets/constructor/interior_vnutr/animation17.png";
import interiorFinish18 from "../../../assets/constructor/interior_vnutr/animation18.png";
import interiorFinish19 from "../../../assets/constructor/interior_vnutr/animation19.png";
import interiorFinish20 from "../../../assets/constructor/interior_vnutr/animation20.png";
import interiorFinish21 from "../../../assets/constructor/interior_vnutr/animation21.png";
import interiorFinish22 from "../../../assets/constructor/interior_vnutr/animation22.png";
import interiorFinish23 from "../../../assets/constructor/interior_vnutr/animation23.png";
import interiorFinish24 from "../../../assets/constructor/interior_vnutr/animation24.png";
import interiorFinish25 from "../../../assets/constructor/interior_vnutr/animation25.png";
import interiorFinish26 from "../../../assets/constructor/interior_vnutr/animation26.png";
import interiorFinish27 from "../../../assets/constructor/interior_vnutr/animation27.png";

import roofDvukhskatnaya from "../../../assets/constructor/roof/2.png";
import roofChetyrekhskatnaya from "../../../assets/constructor/roof/4.png";

import additionalAnimation1 from "../../../assets/constructor/additional/animation1.png";
import additionalAnimation2 from "../../../assets/constructor/additional/animation2.png";
import additionalAnimation3 from "../../../assets/constructor/additional/animation3.png";
import additionalAnimation4 from "../../../assets/constructor/additional/animation4.png";
import additionalAnimation5 from "../../../assets/constructor/additional/animation5.png";
import additionalAnimation6 from "../../../assets/constructor/additional/animation6.png";
import additionalAnimation7 from "../../../assets/constructor/additional/animation7.png";
import additionalAnimation8 from "../../../assets/constructor/additional/animation8.png";
import additionalAnimation9 from "../../../assets/constructor/additional/animation8.png";


const groupAnimationDelay = (index: number, animationKey: string, groups: Record<string, string[]>): number => {
    // Находим группу, к которой принадлежит текущий ключ
    for (const groupKey in groups) {
        if (groups[groupKey].includes(animationKey)) {
            return parseInt(groupKey) * 0.3; // Устанавливаем одинаковую задержку для всей группы
        }
    }
    return index * 0.3; // Если анимация не в группе, используем стандартную задержку
};

const groups: Record<string, string[]> = {
    "10": ["wallKirpich10_0", "wallKirpich10_1", "wallKirpich10_2", "wallKirpich10_3", "wallKirpich10_4"],
    "11": ["wallGazoblock11_1", "wallGazoblock11_2", "wallGazoblock11_3", "wallGazoblock11_4"],
    "12": ["wallGazoblock12_1", "wallGazoblock12_2"],
    "13": ["wallGazoblock12_1", "wallGazoblock13_2"],
};

const ConstructorSection = () => {
    const [step, setStep] = useState<"foundation" | "walls" | "exterior" | "interior" | "roof">("foundation");
    const [selectedFoundation, setSelectedFoundation] = useState<"lentochniy" | "svainiy" | "plitochniy" | null>(null);
    const [selectedWalls, setSelectedWalls] = useState<"gazoblock" | "kirpich" | null>(null);
    const [selectedExterior, setSelectedExterior] = useState<"yes" | "no" | null>(null);
    const [selectedInterior, setSelectedInterior] = useState<"yes" | "no" | null>(null);
    const [selectedRoof, setSelectedRoof] = useState<"dvukhskatnaya" | "chetyrekhskatnaya" | null>(null);

    
    const [animationsCompleted, setAnimationsCompleted] = useState({
        foundation: false,
        walls: false,
        exterior: false,
        interior: false,
        roof: false
    });
    const [animationsActive, setAnimationsActive] = useState(true);

    const animationCoordinates = {
        lentochniy: [{ x: 0, y: 5 }, { x: 0, y: 4 }, { x: -160, y: 82 }, { x: 137, y: 75 }, { x: 0, y: 4 }, { x: 0, y: 4 }],
        svainiy: [{ x: 0, y: 5 }, { x: 0, y: 4 }, { x: -138, y: 82 }, { x: 137, y: 75 }, { x: 0, y: 4 }, { x: 0, y: 4 }],
        plitochniy: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: -138, y: 82 }, { x: 137, y: 75 }, { x: 0, y: 0 }, { x: 0, y: 0 }]
    };

    const wallCoordinates = {
        kirpich: [
            { x: 0, y: -2 }, { x: 0, y: -2}, { x: 0, y: -3 }, { x: 0, y: -2 },
            { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 },
            { x: 0, y: -2 }, { x: -1, y: -2 }, { x: -2, y: 1 }, { x: 0, y: 1 },
            { x: 0, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 1 },
            { x: 0, y: 2}, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 1 },
            { x: 0, y: 2 }, { x: 0, y: 1 }
        ],
        gazoblock: [
            { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 },
            { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 },
            { x: 0, y: -2 }, { x: -1, y: -2 }, { x: -2, y: 1 }, { x: 0, y: 1 },
            { x: 0, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 1 },
            { x: 0, y: 2}, { x: 0, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 1 },
            { x: 0, y: 2 }, { x: 0, y: 1 }
        ]
    };

    const exteriorCoordinates = {
        yes: [
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 },
            { x: 0, y: 1 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 },
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -2, y: 0 }, { x: -2, y: 0 },
            { x: 0, y: 0 }, { x: 0, y: 0 }
        ]
    };

    const interiorCoordinates = {
        yes: [
            { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, 
            { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, 
            { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: -2 }, { x: 0, y: 0 },  
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, 
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, 
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, 
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, 
        ]
    };

    const roofCoordinates = {
        dvukhskatnaya: [
            { x: 0, y: 0 }
        ],
        chetyrekhskatnaya: [
            { x: 0, y: 0 }
        ]
    };

    const additionalCoordinates = [
        { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, 
        { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 },
        { x: 0, y: 0 }
    ];

    

    const animations = {
        lentochniy: [animation1_1, animation1_2, grass1, grass2, animation1_3, animation1_4],
        svainiy: [animation2_1, animation2_2, grass1, grass2, animation2_3, animation2_4],
        plitochniy: [animation3_1, animation3_2, grass1, grass2, animation3_3, animation3_4]
    };

    const wallAnimations = {
        gazoblock: [wallGazoblock1, wallGazoblock2, wallGazoblock3, wallGazoblock4, wallGazoblock5, wallGazoblock6, wallGazoblock7, wallGazoblock8, wallGazoblock9, wallGazoblock10_0, wallGazoblock10_1, wallGazoblock10_2, wallGazoblock10_3, wallGazoblock10_4, wallGazoblock11_1, wallGazoblock11_2, wallGazoblock11_3, wallGazoblock11_4, wallGazoblock12_1, wallGazoblock12_2, wallGazoblock13_1, wallGazoblock13_2, wallGazoblock14],
        kirpich: [wallKirpich1, wallKirpich2, wallKirpich3, wallKirpich4, wallKirpich5, wallKirpich6, wallKirpich7, wallKirpich8, wallKirpich9, wallKirpich10_0, wallKirpich10_1, wallKirpich10_2, wallKirpich10_3, wallKirpich10_4, wallKirpich11_1, wallKirpich11_2, wallKirpich11_3, wallKirpich11_4, wallKirpich12_1, wallKirpich12_2, wallKirpich13_1, wallKirpich13_2, wallKirpich14 ]
    };

    const exteriorAnimations = {
        yes: [exteriorFinish1, exteriorFinish2, exteriorFinish3, exteriorFinish4, exteriorFinish5, exteriorFinish6, exteriorFinish7, exteriorFinish8, exteriorFinish9, exteriorFinish10, exteriorFinish11, exteriorFinish12, exteriorFinish13]
    };

    const interiorAnimations = {
        yes: [interiorFinish1, interiorFinish2, interiorFinish3, interiorFinish4, interiorFinish5, interiorFinish6, interiorFinish7, interiorFinish8, interiorFinish9, interiorFinish10, interiorFinish11, interiorFinish12, interiorFinish13, interiorFinish14, interiorFinish15, interiorFinish16, interiorFinish17, interiorFinish18, interiorFinish19, interiorFinish20, interiorFinish21, interiorFinish22, interiorFinish23, interiorFinish24, interiorFinish25, interiorFinish26, interiorFinish27]
    }

    const roofAnimations = {
        dvukhskatnaya: [roofDvukhskatnaya],
        chetyrekhskatnaya: [roofChetyrekhskatnaya]
    };

    const additionalAnimations = [
        additionalAnimation1,
        additionalAnimation2,
        additionalAnimation3,
        additionalAnimation4,
        additionalAnimation5,
        additionalAnimation6,
        additionalAnimation7,
        additionalAnimation8,
        additionalAnimation9,
    ];
    

    const zIndexValuesForWalls = [8, 5, 5, 10, 6, 7, 10, 9, 13, 22, 23, 21, 21, 23, 18, 18, 18, 22, 18, 18, 22, 23, 20];
    const zIndexValuesForExterior = [23, 25, 24, 23, 24, 22, 22, 1, 1, 1, 1, 1, 1];
    const zIndexValuesForInterior = [4, 4, 5, 4, 8, 7, 8, 4, 4, 10, 0, 0, 18, 18, 18, 18, 18, 18, 18, 20, 21, 18, 22, 21, 24, 18, 22];
    const zIndexValuesForRoof = [25, 26];
    const zIndexValuesForAdditional = [10, 10, 26, 8, 10, 10, 10, 22]; 

    const handleOptionSelect = (option: "lentochniy" | "svainiy" | "plitochniy") => {
        if (selectedFoundation !== option) {
            // Сбрасываем выбранный фундамент временно, чтобы перерендерить элементы
            setAnimationsActive(false); // Деактивируем текущие анимации
            setSelectedFoundation(null); // Сбрасываем состояние фундамента
            setTimeout(() => {
                setSelectedFoundation(option); // Устанавливаем выбранный фундамент
                setAnimationsActive(true); // Активируем анимации
            }, 150); // Задержка перед активацией анимаций (можно настроить)
        }
    };

    const handleWallSelect = (option: "gazoblock" | "kirpich") => {
        setSelectedWalls(option);
        setAnimationsActive(false);
        setTimeout(() => setAnimationsActive(true), 100);
    };

    const handleExteriorSelect = (option: "yes" | "no") => {
        setSelectedExterior(option);
        if (option === "yes") {
            setAnimationsActive(false);
            setTimeout(() => setAnimationsActive(true), 100);
        }
    };

    const handleInteriorSelect = (option: "yes" | "no") => {
        setSelectedInterior(option);
        if (option === "yes") {
            setAnimationsActive(false);
            setTimeout(() => setAnimationsActive(true), 100);
        }
    };

    const handleRoofSelect = (option: "dvukhskatnaya" | "chetyrekhskatnaya") => {
        renderWallAnimations();
        setSelectedRoof(option);
        setAnimationsActive(false);
        setTimeout(() => setAnimationsActive(true), 100);
    };
    
    const handleNext = () => {
        if (step === "foundation" && selectedFoundation) {
            setAnimationsCompleted({ ...animationsCompleted, foundation: true });
            setStep("walls");
        } else if (step === "walls" && selectedWalls) {
            setAnimationsCompleted({ ...animationsCompleted, walls: true });
            setStep("exterior");
        } else if (step === "exterior" && selectedExterior) {
            setAnimationsCompleted({ ...animationsCompleted, exterior: true });
            setStep("interior");
        } else if (step === "interior" && selectedInterior) {
            setAnimationsCompleted({ ...animationsCompleted, interior: true });
            setStep("roof"); // Переход на новый этап
        }
    };


    const handleBack = () => {
        if (step === "roof") {
            setStep("interior");
            setSelectedRoof(null); // Сбрасываем выбранную крышу
            setAnimationsCompleted({ ...animationsCompleted, roof: false });
        } else if (step === "interior") {
            setStep("exterior");
            setSelectedInterior(null); // Сбрасываем выбранную внутреннюю отделку
            setAnimationsCompleted({ ...animationsCompleted, interior: false });
        } else if (step === "exterior") {
            setStep("walls");
            setSelectedExterior(null); // Сбрасываем выбранную внешнюю отделку
            setAnimationsCompleted({ ...animationsCompleted, exterior: false });
        } else if (step === "walls") {
            setStep("foundation");
            setSelectedWalls(null); // Сбрасываем выбранные стены
            setAnimationsCompleted({ ...animationsCompleted, walls: false });
        }
    };




    const renderFoundationAnimations = () => {
        if (selectedFoundation && step === "foundation" && animationsActive) {
            // Выполняем анимацию только на этапе выбора фундамента, если анимации активны
            return animations[selectedFoundation]?.map((animation: string, index: number) => {
                // Проверяем, является ли элемент травой
                const isGrass = animation === grass1 || animation === grass2;
    
                // Если это трава, отображаем через motion.img, но без анимации
                if (isGrass) {
                    return (
                        <motion.img
                            key={`static-grass-${index}`}
                            src={animation}
                            className={style.animatedElement}
                            initial={{ x: animationCoordinates[selectedFoundation][index].x, y: animationCoordinates[selectedFoundation][index].y, opacity: 1 }}
                            animate={{ x: animationCoordinates[selectedFoundation][index].x, y: animationCoordinates[selectedFoundation][index].y, opacity: 1 }}
                            transition={{ duration: 0 }} // Убираем анимацию
                            alt={`Трава элемент ${index}`}
                        />
                    );
                }
    
                // Для остальных элементов выполняем анимацию
                return (
                    <motion.img
                        key={`${selectedFoundation}-${index}`}
                        src={animation}
                        className={style.animatedElement}
                        initial={
                            index === 0 || index === 2 || index === 3
                                ? { x: animationCoordinates[selectedFoundation][index].x, y: animationCoordinates[selectedFoundation][index].y, opacity: 0 }
                                : { y: -100, opacity: 0 } // Начальные координаты для остальных
                        }
                        animate={{
                            x: animationCoordinates[selectedFoundation][index].x,
                            y: animationCoordinates[selectedFoundation][index].y,
                            opacity: 1,
                            transition: { delay: index === 2 ? 0.5 : index === 3 ? 0.7 : index * 0.5, duration: 0.5 }
                        }}
                        exit={{ opacity: 0, y: 100 }} // Анимация исчезновения
                    />
                );
            });
        } else if (selectedFoundation) {
            // Мгновенное отображение на всех остальных этапах с использованием motion.img
            return animations[selectedFoundation]?.map((animation: string, index: number) => {
                const isGrass = animation === grass1 || animation === grass2;
    
                // Если это трава, отображаем через motion.img, но без анимации
                if (isGrass) {
                    return (
                        <motion.img
                            key={`static-grass-${index}`}
                            src={animation}
                            className={style.animatedElement}
                            animate={{
                                x: animationCoordinates[selectedFoundation][index].x,
                                y: animationCoordinates[selectedFoundation][index].y,
                                opacity: 1, // Полная непрозрачность
                            }}
                            transition={{ duration: 0 }} // Убираем анимацию
                            alt={`Трава элемент ${index}`}
                        />
                    );
                }
    
                // Остальные элементы отображаются мгновенно с motion.img
                return (
                    <motion.img
                        key={`${selectedFoundation}-static-${index}`}
                        src={animation}
                        className={style.animatedElement}
                        animate={{
                            x: animationCoordinates[selectedFoundation][index].x,
                            y: animationCoordinates[selectedFoundation][index].y,
                            opacity: 1, // Полная непрозрачность
                        }}
                        alt={`Фундамент элемент ${index}`}
                    />
                );
            });
        }
        return null;
    };


    const renderWallAnimations = () => {
        if (!selectedWalls) return null;

        // Копируем массив анимаций и zIndex для стен
        const filteredAnimations = [...wallAnimations[selectedWalls]];
        const adjustedZIndex = [...zIndexValuesForWalls];

        // Обнуляем zIndex для элементов, если выбрана двухскатная крыша
        if (selectedRoof === "dvukhskatnaya") {
            const elementsToRemove = [
                wallGazoblock10_1, wallGazoblock10_3, wallGazoblock11_2,
                wallGazoblock11_3, wallGazoblock11_4, wallGazoblock12_2, wallGazoblock13_2
            ];
            filteredAnimations.forEach((animation, index) => {
                if (elementsToRemove.includes(animation)) {
                    adjustedZIndex[index] = 0; // Устанавливаем zIndex в 0 для скрытия элемента
                }
            });
        }

        // Проверяем, если анимации активны и текущий этап - выбор стен
        if (animationsActive && step === "walls") {
            return filteredAnimations.map((animation: string, index: number) => {
                const coordinates = wallCoordinates[selectedWalls]?.[index] || { x: 0, y: 0 };
                const animationKey = `wall${selectedWalls}${index}`;
                const groupKey = Object.keys(groups).find((key) =>
                    groups[key].includes(animationKey)
                );

                const delay = groupKey ? groupAnimationDelay(index, animationKey, groups) : index * 0.3;

                return (
                    <motion.img
                        key={`wall-${index}`}
                        src={animation}
                        className={style.animatedElement}
                        initial={{
                            x: coordinates.x,
                            y: -200,
                            opacity: 0
                        }}
                        animate={{
                            x: coordinates.x,
                            y: coordinates.y,
                            opacity: 1,
                            transition: { delay, duration: 0.4 }
                        }}
                        exit={{ opacity: 0, y: 100 }}
                        style={{ zIndex: adjustedZIndex[index] }} // Применяем измененный zIndex
                        alt={`Стена элемент ${index}`}
                    />
                );
            });
        } else if (step !== "walls") {
            // Мгновенное отображение стен на всех остальных этапах
            return filteredAnimations.map((animation: string, index: number) => {
                const coordinates = wallCoordinates[selectedWalls]?.[index] || { x: 0, y: 0 };
                return (
                    <motion.img
                        key={`wall-static-${index}`}
                        src={animation}
                        className={style.animatedElement}
                        animate={{
                            x: coordinates.x,
                            y: coordinates.y,
                            opacity: 1
                        }}
                        transition={{ duration: 0 }}
                        style={{ zIndex: adjustedZIndex[index] }} // Применяем измененный zIndex
                        alt={`Стена элемент ${index}`}
                    />
                );
            });
        }

        return null;
    };

    const renderExteriorAnimations = () => {
        if (selectedExterior !== "yes") return null;

        // Копируем массив анимаций для внешней отделки
        const filteredAnimations = [...exteriorAnimations.yes];
        const adjustedZIndex = [...zIndexValuesForExterior];

        // Фильтруем элементы и устанавливаем zIndex в 0, если выбрана двухскатная крыша
        if (selectedRoof === "dvukhskatnaya") {
            const elementsToRemove = [
                exteriorFinish5, exteriorFinish8, exteriorFinish9,
                exteriorFinish11, exteriorFinish2, exteriorFinish3
            ];
            filteredAnimations.forEach((animation, index) => {
                if (elementsToRemove.includes(animation)) {
                    adjustedZIndex[index] = 0; // Устанавливаем zIndex в 0
                }
            });
        }

        return filteredAnimations.map((animation: string, index: number) => (
            <motion.img
                key={`exterior-${index}`}
                src={animation}
                className={style.animatedElement}
                initial={{ x: exteriorCoordinates.yes[index].x, y: exteriorCoordinates.yes[index].y, opacity: 0 }}
                animate={{
                    x: exteriorCoordinates.yes[index].x,
                    y: exteriorCoordinates.yes[index].y,
                    opacity: 1,
                    transition: { duration: 0.5 } // Устанавливаем одинаковую продолжительность для всех элементов
                }}
                exit={{ opacity: 0, y: 100 }} // Убираем элементы при переходе назад
                style={{ zIndex: adjustedZIndex[index] }}
                alt={`Внешняя отделка элемент ${index}`}
            />
        ));
    };


    const renderInteriorAnimations = () => {
        if (selectedInterior !== "yes") return null;

        // Копируем массив анимаций для внутренней отделки
        const filteredAnimations = [...interiorAnimations.yes];
        const adjustedZIndex = [...zIndexValuesForInterior];

        // Фильтруем элементы и устанавливаем zIndex в 0, если выбрана двухскатная крыша
        if (selectedRoof === "dvukhskatnaya") {
            const elementsToRemove = [
                interiorFinish14, interiorFinish15,
                interiorFinish17, interiorFinish18, interiorFinish27
            ];
            filteredAnimations.forEach((animation, index) => {
                if (elementsToRemove.includes(animation)) {
                    adjustedZIndex[index] = 0; // Устанавливаем zIndex в 0
                }
            });
        }

        return filteredAnimations.map((animation: string, index: number) => (
            <motion.img
                key={`interior-${index}`}
                src={animation}
                className={style.animatedElement}
                initial={{ x: interiorCoordinates.yes[index].x, y: interiorCoordinates.yes[index].y, opacity: 0 }}
                animate={{
                    x: interiorCoordinates.yes[index].x,
                    y: interiorCoordinates.yes[index].y,
                    opacity: 1,
                    transition: { duration: 0.5 }
                }}
                exit={{ opacity: 0, y: 100 }}
                style={{ zIndex: adjustedZIndex[index] }}
                alt={`Внутренняя отделка элемент ${index}`}
            />
        ));
    };

    const renderAdditionalAnimations = () => {
        return additionalAnimations.map((animation: string, index: number) => (
            <motion.img
                key={`additional-${index}`}
                src={animation}
                className={style.animatedElement}
                initial={{ opacity: 0, scale: 0.8, x: additionalCoordinates[index].x, y: additionalCoordinates[index].y }}
                animate={{ opacity: 1, scale: 1, transition: { delay: index * 0.2, duration: 0.5 }, x: additionalCoordinates[index].x, y: additionalCoordinates[index].y }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{ zIndex: zIndexValuesForAdditional[index] }}
                alt={`Дополнительная анимация ${index}`}
            />
        ));
    };

    const renderRoofAnimations = () => {
        if (selectedRoof && animationsActive && step === "roof") {
            // Отображение дополнительных анимаций перед крышей
            return (
                <>
                    {renderAdditionalAnimations()}
                    {roofAnimations[selectedRoof]?.map((animation, index) => {
                        const coordinates = roofCoordinates[selectedRoof]?.[index] || { x: 0, y: 0 };
    
                        return (
                            <motion.img
                                key={`roof-${index}`}
                                src={animation}
                                className={style.animatedElement}
                                initial={{
                                    x: coordinates.x,
                                    y: -200, // Начальная позиция для предотвращения "мелькания"
                                    opacity: 0 // Начальная прозрачность
                                }}
                                animate={{
                                    x: coordinates.x,
                                    y: coordinates.y,
                                    opacity: 1,
                                    transition: { duration: 0.5 }
                                }}
                                exit={{ opacity: 0, y: 100 }}
                                style={{ zIndex: zIndexValuesForRoof[index] }}
                                alt={`Крыша элемент ${index}`}
                            />
                        );
                    })}
                </>
            );
        } else if (selectedRoof && step !== "roof") {
            return roofAnimations[selectedRoof]?.map((animation, index) => {
                const coordinates = roofCoordinates[selectedRoof]?.[index] || { x: 0, y: 0 };
    
                return (
                    <motion.img
                        key={`roof-static-${index}`}
                        src={animation}
                        className={style.animatedElement}
                        animate={{
                            x: coordinates.x,
                            y: coordinates.y,
                            opacity: 1
                        }}
                        transition={{ duration: 0 }}
                        style={{ zIndex: zIndexValuesForRoof[index] }}
                        alt={`Крыша элемент ${index}`}
                    />
                );
            });
        }
        return null;
    };


    return (
        <div className={style.constructorContainer}>
            <div className={style.imageContainer}>
                <div className={style.orangeCircle}></div>
    
                {/* Отображение анимаций для всех этапов с учетом их завершения */}
                {step === "foundation" ? (
                    <>
                        <img src={foundation} className={style.foundation} alt="Фундамент" />
                        {renderFoundationAnimations()}
                    </>
                ) : animationsCompleted.foundation && renderFoundationAnimations()}
    
                {step === "walls" ? renderWallAnimations() : animationsCompleted.walls && renderWallAnimations()}
    
                {step === "exterior" ? renderExteriorAnimations() : animationsCompleted.exterior && renderExteriorAnimations()}
    
                {step === "interior" ? renderInteriorAnimations() : animationsCompleted.interior && renderInteriorAnimations()}
    
                {/* Добавляем отображение анимаций крыши */}
                {step === "roof" ? renderRoofAnimations() : animationsCompleted.roof && renderRoofAnimations()}
            </div>
    
            <div className={style.optionsContainer}>
                {/* Отображение опций для выбора этапов */}
                {step === "foundation" && (
                    <>
                        <h2 style={{ marginBottom: '20px' }}>Выберите фундамент</h2>
                        <p onClick={() => handleOptionSelect("lentochniy")} className={`${style.option} ${selectedFoundation === "lentochniy" ? style.selected : ""}`}>Ленточный</p>
                        <p onClick={() => handleOptionSelect("svainiy")} className={`${style.option} ${selectedFoundation === "svainiy" ? style.selected : ""}`}>Свайный</p>
                        <p onClick={() => handleOptionSelect("plitochniy")} className={`${style.option} ${selectedFoundation === "plitochniy" ? style.selected : ""}`}>Плиточный</p>
                    </>
                )}
    
                {step === "walls" && (
                    <>
                        <h2 style={{ marginBottom: '20px' }}>Выберите стены</h2>
                        <p onClick={() => handleWallSelect("gazoblock")} className={`${style.option} ${selectedWalls === "gazoblock" ? style.selected : ""}`}>Газоблок</p>
                        <p onClick={() => handleWallSelect("kirpich")} className={`${style.option} ${selectedWalls === "kirpich" ? style.selected : ""}`}>Кирпич</p>
                    </>
                )}
    
                {step === "exterior" && (
                    <>
                        <h2 style={{ marginBottom: '20px' }}>Внешняя отделка</h2>
                        <p onClick={() => handleExteriorSelect("yes")} className={`${style.option} ${selectedExterior === "yes" ? style.selected : ""}`}>Есть</p>
                        <p onClick={() => handleExteriorSelect("no")} className={`${style.option} ${selectedExterior === "no" ? style.selected : ""}`}>Нет</p>
                    </>
                )}
    
                {step === "interior" && (
                    <>
                        <h2 style={{ marginBottom: '20px' }}>Внутренняя отделка</h2>
                        <p onClick={() => handleInteriorSelect("yes")} className={`${style.option} ${selectedInterior === "yes" ? style.selected : ""}`}>Есть</p>
                        <p onClick={() => handleInteriorSelect("no")} className={`${style.option} ${selectedInterior === "no" ? style.selected : ""}`}>Нет</p>
                    </>
                )}
    
                {/* Добавляем этап выбора крыши */}
                {step === "roof" && (
                    <>
                        <h2 style={{ marginBottom: '20px' }}>Выберите крышу</h2>
                        <p onClick={() => handleRoofSelect("dvukhskatnaya")} className={`${style.option} ${selectedRoof === "dvukhskatnaya" ? style.selected : ""}`}>Двухскатная</p>
                        <p onClick={() => handleRoofSelect("chetyrekhskatnaya")} className={`${style.option} ${selectedRoof === "chetyrekhskatnaya" ? style.selected : ""}`}>Четырехскатная</p>
                    </>
                )}
    
                {/* Навигационные кнопки */}
                <div className={style.navigationButtons}>
                    {step !== "foundation" && (
                        <p className={style.backButton} onClick={handleBack}>Назад</p>
                    )}
                    {step !== "roof" && (
                        <p className={style.nextButton} onClick={handleNext}>Далее</p>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default ConstructorSection;
