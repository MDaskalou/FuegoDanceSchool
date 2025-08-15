// src/components/HeroReel.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import '../css/heroReel.css';
import heroReelData from '../Data/heroReelData';
import Button from './UI/Button/Button';
import FAQ from './FAQ';

export default function HeroReel() {
    const [showFAQ, setShowFAQ] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation('heroReelsTranslation');

    const videoRefs = useRef({});
    const swiperRef = useRef(null);

    const getRefs = (id) => {
        if (!videoRefs.current[id]) {
            videoRefs.current[id] = { bg: null, fg: null, wrap: null, driftTimer: null };
        }
        return videoRefs.current[id];
    };

    const setOverlayEdges = (id) => {
        const { fg, wrap } = getRefs(id);
        if (!fg || !wrap) return;

        const w = wrap.getBoundingClientRect().width;
        const fgw = fg.getBoundingClientRect().width;
        if (!w || !fgw) return;

        // procentuellt avstånd från varje kant till framvideons kant
        const edgePct = Math.max(0, Math.min(50, ((w - fgw) / 2 / w) * 100));
        wrap.style.setProperty('--fgEdge', `${edgePct}%`);
    };

    const startSlideVideos = (index) => {
        const slide = heroReelData[index];
        if (!slide) return;
        const { bg, fg, wrap } = getRefs(slide.id);
        if (!bg || !fg) return;

        try { bg.currentTime = 0; fg.currentTime = 0; } catch {}
        if (fg.readyState < 2) fg.load();
        if (bg.readyState < 2) bg.load();

        const playBoth = () => {
            try {
                fg.currentTime = bg.currentTime || 0;
                const p1 = bg.play?.(); if (p1?.catch) p1.catch(()=>{});
                const p2 = fg.play?.(); if (p2?.catch) p2.catch(()=>{});
                // räkna ut overlay-kanter när video fått layout
                requestAnimationFrame(() => setOverlayEdges(slide.id));
            } catch {}
        };

        if (bg.readyState >= 2) playBoth(); else bg.oncanplay = () => { bg.oncanplay = null; playBoth(); };

        clearInterval(getRefs(slide.id).driftTimer);
        videoRefs.current[slide.id].driftTimer = setInterval(() => {
            if (!bg.paused && !fg.paused) {
                const drift = Math.abs((bg.currentTime||0) - (fg.currentTime||0));
                if (drift > 0.15) { try { fg.currentTime = bg.currentTime; } catch {} }
            }
        }, 2000);

        // uppdatera gradient när fönstret ändras
        const onResize = () => setOverlayEdges(slide.id);
        window.addEventListener('resize', onResize, { passive: true });
        // spara bort för städning
        getRefs(slide.id).offResize = onResize;
    };

    useEffect(() => {
        return () => {
            Object.values(videoRefs.current).forEach(({ driftTimer, offResize }) => {
                if (driftTimer) clearInterval(driftTimer);
                if (offResize) window.removeEventListener('resize', offResize);
            });
        };
    }, []);

    const handleInit = (swiper) => {
        swiperRef.current = swiper;
        startSlideVideos(swiper.realIndex || 0);
    };

    const handleSlideChange = (swiper) => {
        startSlideVideos(swiper.realIndex || 0);
    };

    return (
        <div id="heroreel" className="hero-reel-container">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                effect="fade"
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                navigation
                onInit={handleInit}
                onSlideChange={handleSlideChange}
            >
                {heroReelData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="slide-content"
                            ref={(el) => { getRefs(slide.id).wrap = el; }}
                        >
                            <video
                                className="hero-video-bg"
                                src={slide.videoSrc}
                                muted
                                loop
                                playsInline
                                preload="auto"
                                ref={(el) => { getRefs(slide.id).bg = el; }}
                            />
                            <video
                                className="hero-video-fg"
                                src={slide.videoSrc}
                                muted
                                loop
                                playsInline
                                preload="auto"
                                ref={(el) => { getRefs(slide.id).fg = el; }}
                            />

                            {/* gradienten använder --fgEdge */}
                            <div className="slide-overlay" />

                            <div className="slide-text-content">
                                <h1 className="slide-title">{t('title')}</h1>
                                <p className="hero-quote">{t('quote')}</p>
                                <p className="slide-subtitle">{t('subtitle')}</p>

                                <div className="hero-buttons-mobile">
                                    <Button onClick={() => window.open('https://app.coursely.se/activities/FuegoDance')}>
                                        {t('coursesButton')}
                                    </Button>
                                    <div className="hero-secondary-actions">
                                        <a href="/open-house-signup" onClick={(e) => { e.preventDefault(); navigate('/open-house-signup'); }}>
                                            {t('openHouseButton')}
                                        </a>
                                        <span>|</span>
                                        <a href="#" onClick={(e) => { e.preventDefault(); setShowFAQ(true); }}>
                                            {t('faqButton')}
                                        </a>
                                    </div>
                                </div>

                                <div className="hero-buttons-desktop">
                                    <a href="/open-house-signup" className="hero-secondary-action" onClick={(e) => { e.preventDefault(); navigate('/open-house-signup'); }}>
                                        {t('openHouseButton')}
                                    </a>
                                    <Button onClick={() => window.open('https://app.coursely.se/activities/FuegoDance')}>
                                        {t('coursesButton')}
                                    </Button>
                                    <a href="#" className="hero-secondary-action" onClick={(e) => { e.preventDefault(); setShowFAQ(true); }}>
                                        {t('faqButton')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="scroll-indicator"><div className="arrow" /></div>
            <FAQ visible={showFAQ} onClose={() => setShowFAQ(false)} />
        </div>
    );
}
