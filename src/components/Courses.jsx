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
        { id: 1, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/c1d98c14-b59a-49c5-b142-4d9e3bcb24c7" },
        { id: 2, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/82c07f97-2f8f-464d-90f2-2bdff41ceaca" },
        { id: 3, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/d6b72b97-ae4e-49ee-9341-f29ee5426be6" },
        { id: 4, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/3ae37bf7-fcba-42de-9778-2ac4eac90ee2" },
        { id: 5, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/084d24d0-bae3-4147-aa85-aebc9c7e5af3" },
        { id: 6, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/78df274b-dce7-4379-aad5-30bc8caed991" },
        { id: 7, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/047792c6-6ccb-4f3b-b3d6-e4c2124e20c7" },
        { id: 8, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/02fe6e70-afa7-47cc-a3d4-ba97bb7cc344" },
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