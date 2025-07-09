import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courses.css";
import FuegoLogo from "../img/FuegoLogoimg.png";
import SectionTitle from "./UI/SectionTitle";
import courses from "../Data/coursesData";



function Courses() {
    return (
        <section className="courses-section" id ="courses">
            <div className="courses-container">
                <SectionTitle color="white">Våra Kurser</SectionTitle>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {courses.map(course => (
                        <SwiperSlide key={course.id}>
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={course.image} alt={course.title} />
                                </div>
                                <div className="course-content">
                                    <h3 className="course-title">{course.title}</h3>
                                    <p className="course-description">{course.description}</p>
                                    <div className="course-details">
                                        <p><strong>Tid:</strong> {course.times}</p>
                                        <p><strong>Krav:</strong> {course.requirements}</p>
                                    </div>
                                    <a
                                        href={course.bookingLink}
                                        className="booking-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Anmäl dig
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Courses;
 