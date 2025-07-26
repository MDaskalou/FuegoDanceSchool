// src/components/InstructorsSection.jsx
import React from 'react';
import { useTranslation } from "react-i18next";
import instructorsData from '../Data/instructorsData'; // Notera korrekt sökväg!
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/instructors.css';
import SectionTitle from "./UI/SectionTitle"; // Importera din SectionTitle-komponent

export default function Instructors({ openModal }) {
    const { t } = useTranslation("instructorsTranslation");

    // Ingen mer lokal data här, vi använder den importerade direkt!

    return (
        <section className="instructor-section">
            <SectionTitle color="white">{t("mainInstructorsTitle")}</SectionTitle>
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
                {instructorsData.map((instructor) => (
                    <SwiperSlide key={instructor.id}>
                        <div className="instructor-card">
                            <img src={instructor.image} alt={t(`instructor_${instructor.id}_name`)} className="instructor-img" />

                            {/* All text hämtas från JSON via 'id' */}
                            <h2>{t(`instructor_${instructor.id}_name`)}</h2>
                            <h4>{t(`instructor_${instructor.id}_title`)}</h4>

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
                                onClick={() => openModal(instructor)} // Använder openModal här
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