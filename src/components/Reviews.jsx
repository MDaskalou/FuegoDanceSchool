import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import reviews from '../Data/studentreviewData';

import googleIcon from '../img/Icons/Google-Review-Logo.png';
import trustpilotIcon from '../img/Icons/trustpiloticon.png';
import '../css/reviews.css';

export default function Reviews() {
    return (
        <section id="reviews" className="reviews-section">
            <h2 className="reviews-title">Vad våra elever säger</h2>
            <p className="reviews-subtitle">
                Här är några röster från våra dansare – samt våra betyg online!
            </p>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
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
                                <img src={review.image} alt={review.name} className="review-img" />
                            </div>
                            <h3 className="review-name">{review.name}</h3>
                            <p className="review-text">“{review.text}”</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="review-sources">
                <div className="review-source">
                    <img src={googleIcon} alt="Google" className="source-logo" />
                    <p>⭐ 4.9 av 5 på Google</p>
                    <a href="https://tinyurl.nu/googlereview" target="_blank" rel="noreferrer">Se recensioner</a>
                </div>

                <div className="review-source">
                    <img src={trustpilotIcon} alt="Trustpilot" className="source-logo" />
                    <p>⭐ 4.5 av 5 på Trustpilot</p>
                    <a href="https://se.trustpilot.com/review/fuegodanceschool.com" target="_blank" rel="noreferrer">Se recensioner</a>
                </div>
            </div>
        </section>
    );
}
