// src/components/About.jsx
import React, { useState } from 'react';
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

    const slides = aboutUsImages.map(({ src, width, height, alt }) => ({
        src,
        width,
        height,
        alt,
    }));

    return (
        <>
            <section id="about-us" className="about-section">
                <div className="about-text-container">
                    <SectionTitle>{t("aboutTitle")}</SectionTitle>
                    <p className="about-description">{t("aboutText")}</p>
                    <div className="about-cta">
                        <Button onClick={() => navigate('/instructors')}>
                            {t("meetInstructorsButton")}
                        </Button>
                    </div>
                </div>

                {/* NYTT: En omslutande div för den nya animationen */}
                <div className="scroller-wrapper">
                    <div className="scroller-inner">
                        {/* TRICKET: Vi renderar listan två gånger för en sömlös loop */}
                        {aboutUsImages.map((photo, index) => (
                            <div
                                key={`first-${index}-${photo.src}`}
                                className="photo-item"
                                onClick={() => setLightboxIndex(index)}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                                />
                            </div>
                        ))}
                        {/* Här kommer den andra, identiska uppsättningen bilder */}
                        {aboutUsImages.map((photo, index) => (
                            <div
                                key={`second-${index}-${photo.src}`}
                                className="photo-item"
                                onClick={() => setLightboxIndex(index)}
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
            </section>

            <Lightbox
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                slides={slides}
            />
        </>
    );
}

export default About;