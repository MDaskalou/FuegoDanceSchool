// src/components/HeroReel.jsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "../css/heroReel.css";
import heroReelData from "../Data/heroReelData";
import Button from "./UI/Button/Button";
import FAQ from "./FAQ";

/* --- helper: wait until a <video> can play without calling .load() --- */
function waitUntilReady(video, signal) {
    if (!video) return Promise.resolve();
    if (video.readyState >= 2) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const onReady = () => cleanup(resolve);
        const onAbort = () =>
            cleanup(() => reject(new DOMException("aborted", "AbortError")));
        const cleanup = (fn) => {
            video.removeEventListener("loadeddata", onReady);
            video.removeEventListener("canplay", onReady);
            signal?.removeEventListener?.("abort", onAbort);
            fn();
        };
        video.addEventListener("loadeddata", onReady, { once: true });
        video.addEventListener("canplay", onReady, { once: true });
        if (signal) signal.addEventListener("abort", onAbort, { once: true });
    });
}

export default function HeroReel() {
    const [showFAQ, setShowFAQ] = useState(false);
    const { t } = useTranslation("heroReelsTranslation");

    const videoRefs = useRef({});
    const swiperRef = useRef(null);

    const getRefs = (id) => {
        if (!videoRefs.current[id]) {
            videoRefs.current[id] = {
                bg: null,
                fg: null,
                wrap: null,
                driftTimer: null,
                offResize: null,
                controller: null,
            };
        }
        return videoRefs.current[id];
    };

    const setOverlayEdges = useCallback((id) => {
        const { fg, wrap } = getRefs(id);
        if (!fg || !wrap) return;
        const w = wrap.getBoundingClientRect().width;
        const fgw = fg.getBoundingClientRect().width;
        if (!w || !fgw) return;
        const edgePct = Math.max(0, Math.min(50, ((w - fgw) / 2 / w) * 100));
        wrap.style.setProperty("--fgEdge", `${edgePct}%`);
    }, []);

    const pauseAllExcept = useCallback((keepId) => {
        Object.entries(videoRefs.current).forEach(([id, r]) => {
            if (id === String(keepId)) return;
            try { r.bg?.pause?.(); } catch {}
            try { r.fg?.pause?.(); } catch {}
        });
    }, []);

    const startSlideVideos = useCallback(
        async (index) => {
            const slide = heroReelData[index];
            if (!slide) return;

            const refs = getRefs(slide.id);
            const { bg, fg } = refs;
            if (!bg || !fg) return;

            pauseAllExcept(slide.id);
            refs.controller?.abort?.();
            const controller = new AbortController();
            refs.controller = controller;

            try { bg.pause(); fg.pause(); } catch {}
            try { bg.currentTime = 0; fg.currentTime = 0; } catch {}

            try {
                await Promise.all([
                    waitUntilReady(bg, controller.signal),
                    waitUntilReady(fg, controller.signal),
                ]);
            } catch {
                return;
            }

            try { fg.currentTime = bg.currentTime || 0; } catch {}
            const p1 = bg.play?.();
            const p2 = fg.play?.();
            p1?.catch?.(() => {});
            p2?.catch?.(() => {});

            requestAnimationFrame(() => setOverlayEdges(slide.id));

            clearInterval(refs.driftTimer);
            refs.driftTimer = setInterval(() => {
                if (!bg.paused && !fg.paused) {
                    const drift = Math.abs((bg.currentTime || 0) - (fg.currentTime || 0));
                    if (drift > 0.2) {
                        try { fg.currentTime = bg.currentTime; } catch {}
                    }
                }
            }, 2000);

            if (refs.offResize) window.removeEventListener("resize", refs.offResize);
            const onResize = () => setOverlayEdges(slide.id);
            window.addEventListener("resize", onResize, { passive: true });
            refs.offResize = onResize;
        },
        [pauseAllExcept, setOverlayEdges]
    );

    // cleanup on unmount
    useEffect(() => {
        const refsSnapshot = videoRefs.current;
        return () => {
            Object.values(refsSnapshot).forEach(
                ({ driftTimer, offResize, controller }) => {
                    if (driftTimer) clearInterval(driftTimer);
                    if (offResize) window.removeEventListener("resize", offResize);
                    controller?.abort?.();
                }
            );
        };
    }, []);

    // fade-in content once visible
    useEffect(() => {
        const root = document.querySelector(".hero-reel-container");
        if (!root) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    root.classList.add("ready");
                    io.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        io.observe(root);
        return () => io.disconnect();
    }, []);

    // pause videos when tab hidden / resume when visible
    useEffect(() => {
        const onVis = () => {
            if (document.hidden) {
                Object.values(videoRefs.current).forEach(({ bg, fg }) => {
                    try { bg?.pause?.(); } catch {}
                    try { fg?.pause?.(); } catch {}
                });
                return;
            }
            const idx = swiperRef.current?.realIndex ?? 0;
            startSlideVideos(idx);
        };

        document.addEventListener("visibilitychange", onVis, { passive: true });
        return () => document.removeEventListener("visibilitychange", onVis);
    }, [startSlideVideos]);

    const handleInit = useCallback((swiper) => {
        swiperRef.current = swiper;
        // markera initial aktiva slide för CSS (duplicate-active hanteras av Swiper)
        startSlideVideos(swiper.realIndex || 0);
    }, [startSlideVideos]);

    const handleSlideChange = useCallback((swiper) => {
        startSlideVideos(swiper.realIndex || 0);
    }, [startSlideVideos]);

    return (
        <div id="heroreel" className="hero-reel-container">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                effect="fade"
                fadeEffect={{ crossFade: true }}
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

                            {/* vignette overlay (uses --fgEdge) */}
                            <div className="slide-overlay" />

                            {/* TEXT & KNAPPAR */}
                            <div className="slide-text-content">
                                <h1 className="slide-title reveal">{t("title")}</h1>
                                <p className="hero-quote reveal">{t("quote")}</p>
                                <p className="slide-subtitle reveal">{t("subtitle")}</p>

                                <div className="hero-buttons reveal">
                                    <Button
                                        onClick={() =>
                                            window.open(
                                                "https://app.coursely.se/activities/FuegoDance",
                                                "_blank"
                                            )
                                        }
                                    >
                                        {t("coursesButton")}
                                    </Button>

                                    <div className="hero-secondary-actions">
                                        <Link to="/open-house-signup" className="hero-secondary-action">
                                            {t("openHouseButton")}
                                        </Link>

                                        <span aria-hidden="true">|</span>

                                        <button
                                            type="button"
                                            className="hero-secondary-action hero-linklike"
                                            onClick={() => setShowFAQ(true)}
                                            aria-haspopup="dialog"
                                            aria-controls="faq-modal"
                                        >
                                            {t("faqButton")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <a href="#next-section" className="scroll-indicator" aria-label="Scrolla ner">
                <div className="arrow" />
            </a>
            <FAQ visible={showFAQ} onClose={() => setShowFAQ(false)} />
        </div>
    );
}
