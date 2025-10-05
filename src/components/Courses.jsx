import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courses.css";
import SectionTitle from "./UI/SectionTitle";
import { useTranslation } from "react-i18next";
import FuegoLogo from "../img/FuegoLogoimg.png";

function Courses() {
    const { t } = useTranslation("coursesTranslation");

    // Steg 1: Hämta den översatta datan från JSON-filen
    // Detta ger oss en array med objekt som innehåller title, description, requirements etc.
    const translatedCourses = t('courses', { returnObjects: true });

    // Steg 2: Definiera den statiska datan som inte finns i JSON (bilder, länkar)
    const staticCourseData = [
        { id: 1, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/6c4214f7-b06e-48e4-8209-d15df18e4aa5" },
        { id: 2, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/8e6b6d42-0cba-43d3-bddc-19bc563d01f8" },
        { id: 3, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/6a191d7f-1c52-406b-8847-bb74fb062565" },
        { id: 4, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/1f048e02-e1df-4a73-906b-730b5d337b34" },
        { id: 5, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/d17ca7b7-61f8-4e44-a712-821aabc380d6" },
        { id: 6, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/78a7bab8-47bd-49e6-84bb-ef291a9e4b8a" },
        { id: 7, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/9a72708d-8d74-4edc-bce7-37a19a99854b" },
        { id: 8, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/d2676cd6-7923-4ea0-be51-b48aa2022c6a" },
        { id: 9, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/79e846fb-badc-490f-a730-68265f1be8c5" },
        { id: 10, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/79e846fb-badc-490f-a730-68265f1be8c5" }
    ];

    // Steg 3: Kombinera de två listorna till en komplett lista att rendera
    const courses = translatedCourses.map(tCourse => {
        const staticData = staticCourseData.find(sCourse => sCourse.id === tCourse.id) || {};
        return {
            ...tCourse,       // Innehåller id, title, description, requirements (som array), etc.
            ...staticData,    // Lägger till image och bookingLink
        };
    });

    return (
        <section className="courses-section" id="courses">
            <div className="courses-container">
                <SectionTitle color="white">{t("ourCoursesTitle")}</SectionTitle>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30} // Lite mer utrymme mellan korten
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                >
                    {/* Steg 4: Mappa över den nya, kompletta listan */}
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
                                        <p><strong>{t('timeLabel')}</strong> {course.times}</p>
                                        <div>
                                            <strong>{t('requirementsLabel')}</strong>
                                            {/* Rendera kraven som en punktlista */}
                                            <ul>
                                                {course.requirements.map((req, index) => (
                                                    <li key={index}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p><strong>{t('instructorsLabel')}</strong> {course.instructors}</p>
                                    </div>
                                    <a
                                        href={course.bookingLink}
                                        className="booking-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t('bookNowBtn')}
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