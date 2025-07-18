// src/components/HeroReel.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import '../css/heroReel.css'; // Notera korrekt filnamn
import heroReelData from '../Data/heroReelData';
import Button from './UI/Button/Button';
import FAQ from './FAQ';

export default function HeroReel() {
    const [showFAQ, setShowFAQ] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation('heroReelsTranslation');

    return (
        <div className="hero-reel-container">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade"
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                navigation={true}
            >
                {heroReelData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            <video className="hero-video-bg" src={slide.videoSrc} autoPlay muted loop playsInline></video>
                            <video className="hero-video-fg" src={slide.videoSrc} autoPlay muted loop playsInline></video>
                            <div className="slide-overlay"></div>

                            {/* FIX: Hela detta block har flyttats IN i varje SwiperSlide */}
                            <div className="slide-text-content">
                                <h1 className="slide-title">{t('title')}</h1>
                                <p className="hero-quote">{t('quote')}</p>
                                <p className="slide-subtitle">{t('subtitle')}</p>

                                {/* --- LAYOUT FÖR MOBIL --- */}
                                <div className="hero-buttons-mobile">
                                    <Button onClick={() => console.log("Navigera till kurser!")}>
                                        {t('coursesButton')}
                                    </Button>
                                    <div className="hero-secondary-actions">
                                        <a href="/open-house-signup" onClick={(e) => { e.preventDefault(); navigate("/open-house-signup"); }}>
                                            {t('openHouseButton')}
                                        </a>
                                        <span>|</span>
                                        <a href="FAQ.jsx" onClick={(e) => { e.preventDefault(); setShowFAQ(true); }}>
                                            {t('faqButton')}
                                        </a>
                                    </div>
                                </div>

                                {/* --- LAYOUT FÖR DESKTOP --- */}
                                <div className="hero-buttons-desktop">
                                    <a href="/open-house-signup" className="hero-secondary-action" onClick={(e) => { e.preventDefault(); navigate("/open-house-signup"); }}>
                                        {t('openHouseButton')}
                                    </a>
                                    <Button onClick={() => console.log("Navigera till kurser!")}>
                                        {t('coursesButton')}
                                    </Button>
                                    <a href="FAQ.jsx" className="hero-secondary-action" onClick={(e) => { e.preventDefault(); setShowFAQ(true); }}>
                                        {t('faqButton')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Textblocket har flyttats härifrån */}

            <div className="scroll-indicator">
                <div className="arrow"></div>
            </div>

            <FAQ visible={showFAQ} onClose={() => setShowFAQ(false)} />
        </div>
    );
}