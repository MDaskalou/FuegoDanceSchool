import "../css/schedule.css";
import scheduleImg from "../img/Schedule/Schema.png";
import SectionTitle from "./UI/SectionTitle";
import { useTranslation } from "react-i18next";


function Schedule() {
    const { t } = useTranslation("scheduleTranslation");


    return (
        <section  id="schedule">
            <SectionTitle color="white">{t("scheduleTitle")}</SectionTitle>
            <h2 className="schedule-description">{t("scheduleDescription")}</h2>

            <img
                src={scheduleImg}
                alt="Fuego Dance School schema vecka 17 till 24"
                className="schedule-image"
            />


        </section>
    );


}
export default Schedule;