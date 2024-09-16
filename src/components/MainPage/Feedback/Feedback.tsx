import style from "./styles.module.css";
import imageLogo from "../../../assets/imageLogo.png";
import quotes from "../../../assets/quotes.png";
import quotesEnd from "../../../assets/quotesEnd.png";
const Feedback = () =>{
    return(
        <div className={style.main}>
            <div className={style.contentTop}>
                <p className={style.quoteTop}>
                    Мы не станем расхваливать себя, ведь..
                </p>
                <p className={style.quoteBottom}>
                    НАШИ <p className={style.client}>КЛИЕНТЫ</p> ГОВОРЯТ ЗА НАС
                </p>
            </div>
            <div className={style.contentMiddle}>
                <div className={style.feedback}>
                    <div className={style.firstFeedbackName}>
                        <p className={style.name}>
                            Крабов салат
                        </p>
                        <p className={style.product}>
                            Дом какой-то там
                        </p>
                        <img className={style.imageLogo} src={imageLogo}/>
                        <img className={style.quotes} src={quotes}/>
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Купил дом через эту компанию — всё сделали на высшем уровне! Быстро, качественно и без лишних проблем. Очень доволен результатом.
                        </p>
                        <img className={style.quotesEnd} src={quotesEnd}/>
                    </div>
                </div>
                <div className={style.feedbackSecond}>
                    <div className={style.firstFeedbackName}>
                        <p className={style.name}>
                            Крабов салат
                        </p>
                        <p className={style.product}>
                            Дом какой-то там
                        </p>
                        <img className={style.imageLogo} src={imageLogo}/>

                        <img className={style.quotes} src={quotes}/>
                    </div>
                    <div className={style.firstFeedbackText}>
                        <p className={style.feedbackTextMain}>
                            Купил дом через эту компанию — всё сделали на высшем уровне! Быстро, качественно и без лишних проблем. Очень доволен результатом.
                        </p>
                        <img className={style.quotesEnd} src={quotesEnd}/>
                    </div>
                </div>
            </div>
            <div className={style.contentBottom}>
                <button className={style.more}>Больше</button>
            </div>
        </div>
    )
}
export default Feedback;
