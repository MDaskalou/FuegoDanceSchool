// src/components/Courses.jsx
import { useState } from "react";
import "../css/courses.css";
import Button from './UI/Button/Button';
import LinkButton from "./UI/Button/LinkButton";
import Card from './UI/Card/Card';
import Section from './UI/Section/Section';

const courseData = [
    {
        title: "Nivå 1",
        image: require("../img/FuegoLogoimg.png"),
        description: "För dig som är helt ny till bachata. Vi går igenom grundläggande steg, takt och enkla turer.",
        times: "Onsdagar kl 18:00 – 19:30",
        requirements: "Inga förkunskaper krävs",
        bookingLink: "https://dinbokningssida.se/niva1"
    },
    {
        title: "Nivå 2",
        image: "https://via.placeholder.com/300x180",
        description: "Vi bygger vidare på grunderna med mer variation, musikalitet och partnering.",
        times: "Måndag kl 18:00 – 19:30 eller Onsdag kl 19:40 – 21:10",
        requirements: "Du bör ha gått nivå 1 eller motsvarande",
        bookingLink: "https://dinbokningssida.se/niva2"
    },
    {
        title: "Nivå 3 Teknik",
        image: "https://via.placeholder.com/300x180",
        description: "Teknikkurs med fokus på kroppskontroll, styrning och kontakt.",
        times: "Tisdagar kl 18:00 – 19:30",
        requirements: "Minst 2 terminer erfarenhet",
        bookingLink: "https://dinbokningssida.se/niva3"
    },
    {
        title: "Nivå 3 ",
        image: "https://via.placeholder.com/300x180",
        description: "Teknikkurs med fokus på kroppskontroll, styrning och kontakt.",
        times: "Tisdagar kl 19:40 – 21:10",
        requirements: "Minst 2 terminer erfarenhet",
        bookingLink: "https://dinbokningssida.se/niva3"
    },
    {
        title: "Nivå 4",
        image: "https://via.placeholder.com/300x180",
        description: "Avancerad nivå med flytande rörelser, footwork och kombinationer.",
        times: "Torsdagar kl 19:40 – 21:10",
        requirements: "Du har dansat minst 1 år regelbundet",
        bookingLink: "https://dinbokningssida.se/niva4"
    },
    {
        title: "Nivå 4 Teknik",
        image: "https://via.placeholder.com/300x180",
        description: "Fördjupning i teknik, isoleringar och musikalitet.",
        times: "Torsdagar kl 18:00 – 19:30",
        requirements: "Nivå 4 eller motsvarande erfarenhet",
        bookingLink: "https://dinbokningssida.se/niva4teknik"
    },
    {
        title: "Nivå 5",
        image: "https://via.placeholder.com/300x180",
        description: "Vår mest avancerade kurs för dig som vill finslipa stil och performance.",
        times: "Söndagar kl 12:00 – 14:00",
        requirements: "Inbjudan krävs",
        bookingLink: "https://dinbokningssida.se/niva5"
    }
];

function Courses() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="courses" className="courses-section">
            <h2 className="courses-title">Våra Kurser</h2>
            <div className="course-cards">
                {courseData.map((course, index) => (
                    <Card image={course.image} title={course.title}>
                        
                        <button onClick={() => toggleOpen(index)} className="btn-secondary-outline">
                            {openIndex === index ? "Stäng" : "Läs mer"}
                        </button>
                        
                        {openIndex === index && (
                            <div className="course-info">
                                <p>{course.description}</p>
                                <p><strong>Tid:</strong> {course.times}</p>
                                <p><strong>Krav:</strong> {course.requirements}</p>
                                <LinkButton href={course.bookingLink} className="btn btn-small" target="_blank" >
                                    Anmäl dig
                                </LinkButton>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </Section>
    );
}

export default Courses;
