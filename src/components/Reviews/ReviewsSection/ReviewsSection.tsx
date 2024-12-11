import React from 'react';
import style from "./styles.module.css";
import StarFilled from "./StarFilled.svg";
import StarEmpty from "./StarEmpty.svg";

type Review = {
    author: string;
    rating: number;
    text: string;
    date: string;
    avatarUrl: string;
};

interface ReviewsSectionProps {
    reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
    return (
        <div className={style.main}>
            <div className={style.reviewsContainer}>
                {reviews.map((review, index) => (
                    <div key={index} className={style.reviewCard}>
                        <div className={style.reviewHeader}>
                            <img src={review.avatarUrl} alt={review.author} className={style.avatar} />
                            <p className={style.author}>{review.author}</p>
                            <div>
                                <div className={style.rating}>
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={i < review.rating ? StarFilled : StarEmpty}
                                            alt="star"
                                            className={style.star}
                                        />
                                    ))}
                                </div>
                                <p className={style.date}>{review.date}</p>
                            </div>
                        </div>
                        <p className={style.reviewText}>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;