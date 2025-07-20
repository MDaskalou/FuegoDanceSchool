// src/components/HelpInstructorsSection.jsx
import React from 'react';
import { useTranslation } from "react-i18next";
// Importera den nya, rena datan
import { helpInstructorsData } from '../Data/helpinstruktorData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/instructors.css'; // Använd samma CSS-fil för styling

export default function HelpInstructors({ openModal }) {
    // Byt till rätt namespace för översättningar
    const { t } = useTranslation("helpInstructorsTranslation");

    return (
        <section  className="instructor-section">
            <h2 className="instructor-title">{t("assistantInstructorsTitle")}</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {helpInstructorsData.map((instructor) => (
                    <SwiperSlide key={instructor.id}>
                        <div className="instructor-card">
                            <img src={instructor.image} alt={t(`help_${instructor.id}_name`)} className="instructor-img" />
                            <h2>{t(`help_${instructor.id}_name`)}</h2>
                            {/* Använder roll som titel för hjälpinstruktörer */}
                            <h4>{t(`help_${instructor.id}_role`)}</h4>
                            <div className="social-icons">
                                {instructor.socials?.instagram && (
                                    <a href={instructor.socials.instagram} target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                )}
                                {instructor.socials?.facebook && (
                                    <a href={instructor.socials.facebook} target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                )}
                            </div>
                            <button
                                className="more-info-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // Skicka med flaggan 'help' så modalen vet vilken typ det är
                                    openModal({ ...instructor, type: 'help' });
                                }}
                            >
                                {t("moreInfoButton")}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}