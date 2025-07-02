import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/FAQ.css";
import faqData from "../Data/faqModalData"; // ✅ om du har flyttat ut frågorna



function FAQ({ visible, onClose }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate(); // ✅ Flyttad hit – direkt i början av funktionen

    if (!visible) return null;

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleClose = () => {
        onClose();
    };

    const goToFullFAQ = () => {
        handleClose();
        navigate("/FAQpage");
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
                <div className="faq-more-button">
                    <p>Hittade du inte svaret du sökte?</p>
                    <button onClick={goToFullFAQ}>Till fullständig FAQ-sida</button>
                </div>
            </div>
        </div>
    );
}
export default FAQ;
