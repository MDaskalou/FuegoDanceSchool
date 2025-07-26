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
                        {t('aboutText', { returnObjects: true }).map((paragraph, index) => {
                            // Om paragrafen slutar med ':', styla den som en underrubrik
                            if (paragraph.endsWith(':')) {
                                return <p key={index} className="about-subheading">{paragraph}</p>;
                            }
                            // Om paragrafen är en listpunkt (identifierad genom att den följer en rubrik)
                            // Detta är en förenklad logik. Förutsätter att listpunkter inte slutar på ':'.
                            const previousParagraph = t('aboutText', { returnObjects: true })[index - 1] || '';
                            if (previousParagraph.endsWith(':') || paragraph.startsWith('•')) {
                                // Vi tar bort eventuellt • som kan finnas kvar och trimmar
                                const text = paragraph.replace('•', '').trim();
                                return <p key={index} className="about-list-item">{text}</p>;
                            }
                            // Annars, rendera som en vanlig paragraf
                            return <p key={index}>{paragraph}</p>;
                        })}
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
