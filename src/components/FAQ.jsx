import { useState } from 'react';
import "../css/FAQ.css";

const faqData = [
    {
        question: "Jag har aldrig dansat förut – passar era kurser mig?",
        answer: "Absolut! Våra nybörjarkurser är utformade för dig som aldrig tagit ett danssteg tidigare. Vi guidar dig steg för steg."
    },
    {
        question: "Behöver jag komma med en partner?",
        answer: "Nej! Du kan komma själv – vi roterar partners i klassen så att alla får dansa med alla."
    },
    {
        question: "Vad är Bachata Sensual?",
        answer: "Bachata Sensual är en modern stil av bachata med mjuka, flytande rörelser och starkt fokus på kontakt och musikalitet."
    },
    {
        question: "Vad ska jag ha på mig?",
        answer: "Bekväma kläder du kan röra dig fritt i. Sneakers eller dansskor med glid fungerar bra – inget krav på speciella skor."
    },
    {
        question: "Hur lång är varje kurs?",
        answer: "Våra kurser är 8 veckor långa med 1 lektion i veckan som är 1,5 timma långa."
    },
    {
        question: "Hur anmäler jag mig?",
        answer: "Via knappen på hemsidan! Fyll i formuläret så skickar vi bekräftelse inom 24 timmar."
    },
    {
        question: "Har ni drop-in kurser?",
        answer: "Nej tyvärr. Vi har endast kurser som är 8 veckor långa. Du kan dock alltid prova på första lektionen gratis"
    },
    {
        question: "Jag är är student – får jag rabatt?",
        answer: "Ja! Vi erbjuder 15% rabatt på alla kurser för studenter. Glöm inte att ta med studentlegitimation."
    },
    {
        question: "Jag kan bara komma varannan vecka – kan jag ändå anmäla mig?",
        answer: "Ja! Om man kan bara komma varannan vecka får man 35% rabatt på kursavgiften."
    }
];

function FAQ({ visible, onClose }) {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!visible) return null;

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleClose = () => {
        console.log("Modal stängs nu");
        onClose();
    };

    return (
        <div className="faq-overlay" onClick={handleClose}>
            <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
                <button className="faq-close" onClick={handleClose}>×</button>
                <h2 className="faq-title">Vanliga frågor</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className={`faq-question ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleAnswer(index)}
                            >
                                {item.question}
                            </div>
                            <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
