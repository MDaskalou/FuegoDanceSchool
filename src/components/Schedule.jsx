import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/schedule.css";
import scheduleImg from "../img/Schedule/Schedule1.png";
import { scheduleData } from "../Data/scheduleData";

const ScheduleSwiper = () => {
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="schedule">
            <h2 style={{ textAlign: "center", margin: "1.5rem 0" }}>Schema – Vecka 17–24</h2>

            <img
                src={scheduleImg}
                alt="Fuego Dance School schema vecka 17 till 24"
                className="schedule-image"
            />

            {showHint && (
                <p className="swipe-hint mobile-only">⬅️ Swipe för att se nästa dag ➡️</p>
            )}


        </section>
    );
};

export default ScheduleSwiper;
