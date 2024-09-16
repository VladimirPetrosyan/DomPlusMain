import style from "./styles.module.css";
import { ChangeEvent } from 'react';
function updateSlider(event: ChangeEvent<HTMLInputElement>) {
    const polzunok = event.target;  // получаем сам элемент ползунка
    const value = parseFloat(polzunok.value);  // значение ползунка
    const min = parseFloat(polzunok.min);      // минимальное значение
    const max = parseFloat(polzunok.max);      // максимальное значение
    const percentage = ((value - min) / (max - min)) * 100;  // процент заполнения

    // обновление фона ползунка
    polzunok.style.background = `linear-gradient(to right, #FFD700 ${percentage}%, #ccc ${percentage}%)`;
}
const Credit = () =>{
    return(
        <div className={style.main}>
            <div className={style.topContent}>
                <p className={style.topText}>РАССЧИТАТЬ ИПОТЕКУ</p>
            </div>
            <div className={style.window}>
                <div className={style.middleContent}>
                    <div className={style.leftContent}>
                        <div className={style.firstContent}>
                            <div className={style.sum}>
                                <p className={style.firstP}>
                                    Сумма ипотеки
                                </p>
                                <p className={style.firstP}>
                                    30 000 000 ₽
                                </p>
                            </div>
                            <div className={style.line}>
                                <input className={style.polzunok} min="30 000000" max="100000000"  onChange={updateSlider} type={"range"}/>
                            </div>
                            <div className={style.sumBottom}>
                                <p className={style.secondP}>
                                    500 000 ₽
                                </p>
                                <p className={style.secondP}>
                                    100 000 000 ₽
                                </p>
                            </div>
                        </div>
                        <div className={style.secondContent}>
                            <div className={style.sum}>
                                <p className={style.firstP}>
                                    Срок ипотеки
                                </p>
                                <p className={style.firstP}>
                                    14 лет
                                </p>
                            </div>
                            <div className={style.line}>
                                <input className={style.polzunok} min="300000" max="100000000"  onChange={updateSlider} type={"range"}/>
                            </div>
                            <div className={style.sumBottom}>
                                <p className={style.secondP}>
                                    5 лет
                                </p>
                                <p className={style.secondP}>
                                    30 лет
                                </p>
                            </div>
                        </div>
                        <div className={style.thirdContent}>
                            <div className={style.sum}>
                                <p className={style.firstP}>
                                    Процентная ставка
                                </p>
                                <p className={style.firstP}>
                                    8 %
                                </p>
                            </div>
                            <div className={style.line}>
                                <input className={style.polzunok} min="500000" max="100000000" onChange={updateSlider} type={"range"}/>
                            </div>
                            <div className={style.sumBottom}>
                                <p className={style.secondP}>
                                    0.1 %
                                </p>
                                <p className={style.secondP}>
                                    30 %
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightContent}>
                        <div className={style.payment}>
                            <p className={style.paymentText}>
                                Ежемесячный платеж
                            </p>
                            <p className={style.paymentText}>
                                200 000 ₽
                            </p>
                        </div>
                        <div className={style.help}>
                            <p className={style.helpText}>
                                Получить консультацию
                            </p>
                            <p className={style.helpText}>
                                +7 (903) 400-03-61
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.bottomContent}>
                <p className={style.bottomText}>
                    “ Конечный расчёт основан на средней процентной ставке. Точная процентная ставка и сумма ипотечного кредита будут определены при заключении договора.
                    Банк оставляет за собой право отказать в предоставлении ипотеки без указания причин.
                </p>
            </div>
        </div>
    )
}
export default Credit;
