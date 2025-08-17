import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../css/aboutus.css';
import SectionTitle from './UI/SectionTitle';
import Button from './UI/Button/Button';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import aboutUsImages from '../Data/aboutusData';

function About() {
    const { t } = useTranslation("aboutusTranslation");
    const navigate = useNavigate();
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slides = aboutUsImages.map(({ src, width, height, alt }) => ({
        src,
        width,
        height,
        alt,
    }));

    const imagesToShow = isMobile ? aboutUsImages : [...aboutUsImages, ...aboutUsImages, ...aboutUsImages];

    return (
        <section id="about-us" className="about-section">
            <div className="about-layout-wrapper">
                <div className="about-text-container">
                    <SectionTitle color="white">{t("aboutTitle")}</SectionTitle>
                    <div className="about-description">
                        {(() => {
                            const raw = t("aboutText", { returnObjects: true });

                            const sections = [];
                            let current = { title: null, items: [], mode: "text" }; // första: ren text

                            raw.forEach((p) => {
                                if (p.endsWith(":")) {
                                    // ny rubrik -> spara föregående sektion
                                    if (current.items.length) sections.push(current);
                                    current = { title: p.replace(/:$/, ""), items: [], mode: "bullets" };
                                } else {
                                    current.items.push(p.replace(/^•\s*/, "").trim());
                                }
                            });
                            if (current.items.length) sections.push(current);

                            return (
                                <>
                                    {/* Sektion 1: Intro (utan titel i kortet) */}
                                    {sections[0] && sections[0].mode === "text" && (
                                        <div className="about-card">
                                            {sections[0].items.map((p, i) => (
                                                <p key={`intro-${i}`}>{p}</p>
                                            ))}
                                        </div>
                                    )}

                                    {/* Resterande sektioner: rubrik + bullets i ett kort */}
                                    {sections.slice(1).map((sec, idx) => (
                                        <div key={`sec-${idx}`}>
                                            <p className="about-subheading">{sec.title}:</p>
                                            <div className="about-card">
                                                <ul className="about-list">
                                                    {sec.items.map((item, i) => (
                                                        <li key={`li-${idx}-${i}`}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            );
                        })()}
                    </div>

                    <div className="about-cta">
                        <Button onClick={() => navigate('/instructors')}>
                            {t("meetInstructorsButton")}
                        </Button>
                    </div>
                </div>

                <div className="about-image-wrapper">
                    <div className="scroller-wrapper">
                        <div className="scroller-inner">
                            {imagesToShow.map((photo, index) => (
                                <div
                                    key={`photo-${index}-${photo.src}`}
                                    className="photo-item"
                                    onClick={() => setLightboxIndex(index % aboutUsImages.length)}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                slides={slides}
            />
        </section>
    );
}

export default About;
