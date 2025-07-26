// Fil: src/components/ThemedFAQ.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/ThemedFAQ.css';
import { faqPageData, categories } from '../Data/faqPageData'; // Använder din befintliga data
import { FaPlus, FaChevronDown } from 'react-icons/fa';
import SectionTitle from "./UI/SectionTitle";

function ThemedFAQ() {
    const { t } = useTranslation('faqPageTranslation');

    // State för att hålla reda på öppen KATEGORI
    const [activeCategory, setActiveCategory] = useState(null);
    // State för att hålla reda på öppen FRÅGA
    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleCategoryToggle = (categoryKey) => {
        setActiveCategory(activeCategory === categoryKey ? null : categoryKey);
        // Återställ öppen fråga när man byter kategori
        setActiveQuestion(null);
    };

    const handleQuestionToggle = (questionId) => {
        setActiveQuestion(activeQuestion === questionId ? null : questionId);
    };

    return (
        <section id="faq-page" className="themed-faq-section">
        <div className="themed-faq-container">
            <SectionTitle color="white">{t('pageTitle')}</SectionTitle>

            {/* Nivå 1: Mappa över kategorierna och skapa KATEGORI-kort */}
            {categories.map((categoryKey) => {
                const isCategoryActive = activeCategory === categoryKey;

                return (
                    <div key={categoryKey} className={`category-card ${isCategoryActive ? 'open' : ''}`}>
                        <div className="category-header" onClick={() => handleCategoryToggle(categoryKey)}>
                            <h3>{t(`category_${categoryKey}`)}</h3>
                            <FaChevronDown className="category-icon" />
                        </div>

                        {/* Nivå 2: Behållare för FRÅGE-korten som fälls ut */}
                        <div className="question-list-container">
                            <div className="question-list-inner">
                                {faqPageData
                                    .filter((faq) => faq.category === categoryKey)
                                    .map((item) => {
                                        const isQuestionActive = activeQuestion === item.id;
                                        return (
                                            <div key={item.id} className={`question-card ${isQuestionActive ? 'active' : ''}`}>
                                                <div className="question-header" onClick={() => handleQuestionToggle(item.id)}>
                                                    {t(`faq_${item.id}_question`)}
                                                    <FaPlus className="question-icon" />
                                                </div>
                                                <div className="question-answer">
                                                    {(() => {
                                                        const answer = t(`faq_${item.id}_answer`, { returnObjects: true });

                                                        // Kontrollera om svaret är en array. Om inte, anta att det är en sträng och splitta den.
                                                        const paragraphs = Array.isArray(answer) ? answer : String(answer).split('\n');

                                                        return paragraphs.map((paragraph, index) => (
                                                            // Filtrera bort tomma rader som kan skapas av .split()
                                                            paragraph.trim() && <p key={index}>{paragraph}</p>
                                                        ));
                                                    })()}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        </section>
    );
}

export default ThemedFAQ;