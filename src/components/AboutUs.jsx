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
                <div className="about-layout-wrapper">
                    <div className="about-text-container">
                        <SectionTitle>{t("aboutTitle")}</SectionTitle>
                        <p className="about-description">{t("aboutText")}</p>
                        <div className="about-cta">
                            <Button onClick={() => navigate('/instructors')}>
                                {t("meetInstructorsButton")}
                            </Button>
                        </div>
                    </div>

                    <div className="about-image-wrapper">
                        <div className="scroller-wrapper">
                            <div className="scroller-inner">
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

        </>
    );
}

export default About;