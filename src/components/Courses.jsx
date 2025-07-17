import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courses.css";
import SectionTitle from "./UI/SectionTitle";
import { useTranslation } from "react-i18next";
import FuegoLogo from "../img/FuegoLogoimg.png"; // Assuming you have a logo image


function Courses() {
    const { t } = useTranslation("coursesTranslation");

    const courses = [
        { id: 1, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/c1d98c14-b59a-49c5-b142-4d9e3bcb24c7" },
        { id: 2, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/82c07f97-2f8f-464d-90f2-2bdff41ceaca" },
        { id: 3, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/d6b72b97-ae4e-49ee-9341-f29ee5426be6" },
        { id: 4, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/3ae37bf7-fcba-42de-9778-2ac4eac90ee2" },
        { id: 5, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/084d24d0-bae3-4147-aa85-aebc9c7e5af3" },
        { id: 6, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/78df274b-dce7-4379-aad5-30bc8caed991" },
        { id: 7, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/047792c6-6ccb-4f3b-b3d6-e4c2124e20c7" },
        { id: 8, image: FuegoLogo, bookingLink: "https://dinbokningssida.se/niva5" },
        { id: 9, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/79e846fb-badc-490f-a730-68265f1be8c5" },
        { id: 10, image: FuegoLogo, bookingLink: "https://app.coursely.se/activity/79e846fb-badc-490f-a730-68265f1be8c5" }
    ];




    return (
        <section className="courses-section" id ="courses">
            <div className="courses-container">
                <SectionTitle color="white">{t("ourCoursesTitle")}</SectionTitle>

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
                                    <img src={course.image} alt={t(`course_${course.id}_title`)} />
                                </div>
                                <div className="course-content">
                                    <h3 className="course-title">{t(`course_${course.id}_title`)}</h3>
                                    <p className="course-description">{t(`course_${course.id}_description`)}</p>
                                    <div className="course-details">
                                        <p><strong>{t('timeLabel')}</strong> {t(`course_${course.id}_times`)}</p>
                                        <p><strong>{t('requirementsLabel')}</strong> {t(`course_${course.id}_requirements`)}</p>
                                        <p><strong>{t('instructorsLabel')}</strong> {t(`course_${course.id}_instructors`)}</p>

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
 