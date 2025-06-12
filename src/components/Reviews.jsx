import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import googleIcon from '../img/Icons/Google-Review-Logo.png';

import '../css/reviews.css'; // Skapa denna sen

const reviews = [
    {
        id: 1,
        name: "Sara M",
        image: require("../img/Review1.jpg"),
        text: "Jag älskar energin och gemenskapen här. Lärarna är fantastiska!",
    },
    {
        id: 2,
        name: "Ali K",
        image: require("../img/Review2.jpg"),
        text: "Fuego Dance School har hjälpt mig utvecklas både tekniskt och personligt.",
    },
    {
        id: 3,
        name: "Elin P",
        image: require("../img/Review3.jpg"),
        text: "Det bästa med kursen var hur roligt vi hade varje gång!",
    },
    // Lägg till fler elever upp till 10 st
];

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
                    <p>⭐ 4.8 av 5 på Google</p>
                    <a href="https://g.page/YOUR-GOOGLE-LINK" target="_blank" rel="noreferrer">Se recensioner</a>
                </div>
               
            </div>
        </section>
    );
}
