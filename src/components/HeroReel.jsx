// src/components/HeroReel.jsx
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Importera CSS för effekten


import '../css/heroReel.css';
import heroReelData from '../Data/heroReelData';

// src/components/HeroReel.jsx

// ... importer ...

export default function HeroReel() {
    return (
        <div className="hero-reel-container">
            <Swiper
                // Dina Swiper-inställningar för Coverflow är desamma
                modules={[Autoplay, EffectCoverflow, Navigation]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                navigation={true}
            >
                {heroReelData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            {/* BARA EN video nu, med ett nytt klassnamn */}
                            <video
                                className="hero-video"
                                src={slide.videoSrc}
                                autoPlay muted loop playsInline
                            ></video>

                            <div className="slide-overlay"></div>
                            <h1 className="slide-title">{slide.title}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

