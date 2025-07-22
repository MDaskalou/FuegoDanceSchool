import React, { useEffect, useState } from 'react';
import Card from './UI/Card/Card';
import LinkButton from './UI/Button/LinkButton';
import BgLeft from '../img/Pricesimg1.png';
import BgCenter from '../img/Pricesimg2.png';
import BgRight from '../img/Pricesimg3.png';
import '../css/prices.css';
import SectionTitle from "./UI/SectionTitle";
import { useTranslation } from 'react-i18next';

const mobileImages = [BgLeft, BgCenter, BgRight];

export default function Prices() {
    const { t } = useTranslation("pricesTranslation");
    const [mobileBg, setMobileBg] = useState(0);

    useEffect(() => {
        mobileImages.forEach((img) => {
            const preloadImg = new Image();
            preloadImg.src = img;
        });

        const interval = setInterval(() => {
            setMobileBg((prev) => (prev + 1) % mobileImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="prices" className="prices-section">
            <div className="price-bg-wrapper" aria-hidden="true">
                {mobileImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        className={`price-bg ${index === mobileBg ? 'visible' : ''}`}
                    />
                ))}
            </div>


            <div className="price-overlay section-inner">
                <div className="prices-header">
                    <SectionTitle color="white">{t("pricesTitle")}</SectionTitle>
                    <p className="prices-note fade-in">{t("pricesNote")}</p>
                </div>

                <div className="prices-card-wrapper">
                    {/* Kurspriser */}
                    <Card title={t("coursesCardTitle")} className="card-price">
                        <ul>
                            <li>{t("course1Price")}</li>
                            <li className="favorite-option">{t("course2Price")}</li>
                            <li>{t("course3Price")}</li>
                            <li>{t("course4Price")}</li>
                            <li>{t("course5Price")}</li>
                        </ul>
                    </Card>

                    {/* Rabatter */}
                    <Card title={t("discountsCardTitle")} className="card-price">
                        <ul>
                            <li>{t("studentDiscount")}</li>
                            <li>{t("coupleDiscount")}</li>
                        </ul>
                    </Card>
                </div>

                <div className="prices-cta">
                    <LinkButton
                        href="https://app.coursely.se/activities/FuegoDance"
                        className="btn btn-small"
                        target="_blank"
                    >
                        {t("bookNowButton")}
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
