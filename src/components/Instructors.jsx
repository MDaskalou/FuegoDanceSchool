// src/components/Instructors.jsx
import "../css/instructors.css";
import React, { useState } from 'react';
import Instructors from "./Instructors";
import instructors from '../Data/instructorData';
import { helpInstructors } from "../Data/helpinstruktorData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import InstructorModal from "./InstructorModal";

export default function InstructorSection() {
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    const openModal = (instructor) => setSelectedInstructor(instructor);
    const closeModal = () => setSelectedInstructor(null);

    const renderSwiperCards = (list, title) => (
        <>
            <h2 className="instructor-title">{title}</h2>
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
                {list.map((i, index) => (
                    <SwiperSlide key={index}>
                        <div className="instructor-card">
                            <img src={i.image} alt={i.name} className="instructor-img" />
                            <h2>{i.name}</h2>
                            <h4>{i.title}</h4>
                            <div className="social-icons">
                                {i.socials.instagram && (
                                    <a href={i.socials.instagram} target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                )}
                                {i.socials.facebook && (
                                    <a href={i.socials.facebook} target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                )}
                            </div>
                            <button
                                className="more-info-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openModal(i);
                                }}
                            >
                                Mer info
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );

    return (
        <section className="instructor-section">
            {renderSwiperCards(instructors, "Instruktörer")}
            {renderSwiperCards(helpInstructors, "Hjälpinstruktörer")}

            <InstructorModal
                isOpen={!!selectedInstructor}
                onClose={closeModal}
                instructor={selectedInstructor}
            />

        </section>
    );
}
