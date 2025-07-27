import React from 'react';
import { useTranslation } from "react-i18next";
import { helpInstructorsData } from '../Data/helpinstruktorData';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Importera Pagination-modulen
import { Navigation, Pagination } from 'swiper/modules';

// 2. Importera CSS för både navigation och pagination
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/instructors.css';

export default function HelpInstructors({ openModal }) {
    const { t } = useTranslation("helpInstructorsTranslation");

    return (
        <section  className="instructor-section">
            <h2 className="instructor-title">{t("assistantInstructorsTitle")}</h2>
            <Swiper
                // 3. Lägg till Pagination i modullistan och konfigurera den
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
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