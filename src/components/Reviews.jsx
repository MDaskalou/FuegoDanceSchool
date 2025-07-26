import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import googleIcon from '../img/Icons/Google-Review-Logo.png';
import trustpilotIcon from '../img/Icons/trustpiloticon.png';
import '../css/reviews.css';
import SectionTitle from './UI/SectionTitle';

import {useTranslation} from "react-i18next";

export default function Reviews() {

    const {t} = useTranslation("reviewsTranslation");

    const reviews = [
        {
            id: 1,
            image: require("../img/Students/LisaB.jpeg")
        },
        {
            id: 2,
            image: require("../img/Students/AmandaW.jpeg")
        },
        {
            id: 3,
            image: require("../img/Students/AlessandroU.jpg")
        },
        {
            id: 4,
            image: require("../img/Students/ElvirD.jpeg")
        },
        {
            id: 5,
            image: require("../img/Students/MyR.jpeg")
        },
        {
            id: 6,
            image: require("../img/Students/RicardoR.jpg")
        }
    ];



    return (
        <section id="reviews" className="reviews-section">
            <SectionTitle color="white">{t("reviewsTitle", { ns: 'reviewsTranslation' })}</SectionTitle>
            <p className="reviews-subtitle">{t("reviewsSubtitle")}</p>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >

                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="review-card">
                            <div className="review-img-wrapper">
                                <img src={review.image} alt={t(`review_${review.id}_name`, { ns: 'reviewsTranslation' })} className="review-img" />
                            </div>
                            {/* Använd t() för namn och text */}
                            <h3 className="review-name">{t(`review_${review.id}_name`, { ns: 'reviewsTranslation' })}</h3>
                            <p className="review-text">
                                “{t(`review_${review.id}_text`, { ns: 'reviewsTranslation' }).split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < t(`review_${review.id}_text`, { ns: 'reviewsTranslation' }).split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}”
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="review-sources">
                <div className="review-source">
                    <img src={googleIcon} alt="Google" className="source-logo" />
                    <p>{t("googleRating", { ns: 'reviewsTranslation' })}</p>
                    <a href="https://tinyurl.nu/googlereview" target="_blank" rel="noreferrer">
                        {t("seeReviewsButton", { ns: 'reviewsTranslation' })}
                    </a>
                </div>

                <div className="review-source">
                    <img src={trustpilotIcon} alt="Trustpilot" className="source-logo" />
                    <p>{t("trustpilotRating", { ns: 'reviewsTranslation' })}</p>
                    <a href="https://se.trustpilot.com/review/fuegodanceschool.com" target="_blank" rel="noreferrer">
                        {t("seeReviewsButton", { ns: 'reviewsTranslation' })}
                    </a>
                </div>
            </div>
        </section>
    );
}
