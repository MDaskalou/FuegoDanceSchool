// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import "../css/FAQpage.css";
import faqPageData from '../Data/faqPageData';
import SectionTitle from "./UI/SectionTitle";

function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    // Extrahera unika kategorier
    const categories = [...new Set(faqPageData.map(faq => faq.category))];

    const toggleAnswer = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="faq-page-container">
            <SectionTitle color="white">Vanliga frågor</SectionTitle>
            {categories.map((category) => (
                <div key={category} className="faq-category-block">
                    <h2 className="faq-category-title">{category}</h2>
                    {faqPageData
                        .filter((faq) => faq.category === category)
                        .map((item, index) => {
                            const uniqueId = `${category}-${index}`;
                            return (
                                <div key={uniqueId} className="faq-page-item">
                                    <div
                                        className={`faq-page-question ${activeIndex === uniqueId ? "active" : ""}`}
                                        onClick={() => toggleAnswer(uniqueId)}
                                    >
                                        {item.question}
                                    </div>
                                    <div className={`faq-page-answer ${activeIndex === uniqueId ? "show" : ""}`}>
                                        {item.answer}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            ))}
        </div>
    );
}

export default FAQPage;
