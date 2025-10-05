// Fil: Schedule.js (KORREKT VERSION)

import "../css/schedule.css"; // Denna import är korrekt och viktig!
import scheduleImg from "../img/Schedule/WinterCourse2025.png";
import SectionTitle from "./UI/SectionTitle";
import { useTranslation } from "react-i18next";
import React from "react";

function Schedule() {
    const { t } = useTranslation("scheduleTranslation");

    return (
        // ÄNDRINGEN ÄR HÄR: Från <section id=".."> till <div className="..">
        <div className="schedule-section">
            <SectionTitle color="white">{t("scheduleTitle")}</SectionTitle>
            <h2 className="schedule-description">{t("scheduleDescription")}</h2>

            <img
                src={scheduleImg}
                alt="Fuego Dance School schema vecka 17 till 24"
                className="schedule-image"
            />
            <div className="schedule-cta">
                <a
                    href="https://app.coursely.se/activities/FuegoDance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-now-button"
                >
                    Boka nu
                </a>
            </div>
        </div>
    );
}

export default Schedule;