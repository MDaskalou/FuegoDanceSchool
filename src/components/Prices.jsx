import React, { useEffect, useState } from 'react';
import Card from './UI/Card/Card';
import LinkButton from './UI/Button/LinkButton';
import BgLeft from '../img/Pricesimg1.png';
import BgCenter from '../img/Pricesimg2.png';
import BgRight from '../img/Pricesimg3.png';
import '../css/prices.css';

export default function Prices() {
    const mobileImages = [BgLeft, BgCenter, BgRight];
    const [mobileBg, setMobileBg] = useState(0);

    useEffect(() => {
        // Förladda alla bakgrundsbilder
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
            {/* Bakgrundsbilder */}


            <div className="price-bg-wrapper" aria-hidden="true">
                <img
                    src={mobileImages[mobileBg]}
                    alt=""
                    className="price-bg mobile visible"
                />

            </div>



            <div className="price-overlay">
                <div className="prices-header">
                    <h2 className="prices-title">Priser & Rabatter</h2>
                    <p className="prices-note">Första gången är alltid gratis – kom och prova!</p>
                 </div>

                <div className="prices-card-wrapper">
                    <Card title="Kurser" className="card-price">
                         <ul>
                            <li>1 kurs: 1600 kr</li>
                            <li>2 kurser: 2600 kr</li>
                            <li>3 kurser: 3600 kr</li>
                            <li>4 kurser: 4600 kr</li>
                            <li>5 kurser: 5600 kr</li>
                        </ul>
                    </Card>

                    <Card title="Rabatter" className="card-price">
                        <ul>
                            <li>Studentrabatt: 10%</li>
                            <li>Parrabatt: 15% per person</li>
                            <li>Gruppbokning? Kontakta oss!</li>
                         </ul>
                    </Card>
                </div>

                <div className="prices-cta">
                    <LinkButton
                        href="https://dinbokningssida.se"
                        className="btn btn-small"
                        target="_blank"
                        >
                        Boka nu
                    </LinkButton>
                </div>
                
            </div>
        </section>
    );
}
