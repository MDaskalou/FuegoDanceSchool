// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importera hooken
import "../css/FAQpage.css";
import { faqPageData, categories } from '../Data/faqPageData'; // 2. Importera både data och kategorier
import SectionTitle from "./UI/SectionTitle";

function FAQPage() {
    const { t } = useTranslation('faqPageTranslation'); // 3. Använd 'faq' namespace
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="faq-page-container">
            <SectionTitle color="white">{t('pageTitle')}</SectionTitle>

            {/* 4. Mappa över den importerade kategori-arrayen */}
            {categories.map((categoryKey) => (
                <div key={categoryKey} className="faq-category-block">
                    {/* 5. Hämta kategorititeln från JSON */}
                    <h2 className="faq-category-title">{t(`category_${categoryKey}`)}</h2>

                    {/* 6. Filtrera frågorna baserat på kategori-nyckeln */}
                    {faqPageData
                        .filter((faq) => faq.category === categoryKey)
                        .map((item) => {
                            const uniqueId = item.id; // Använd det stabila ID:t
                            return (
                                <div key={uniqueId} className="faq-page-item">
                                    <div
                                        className={`faq-page-question ${activeIndex === uniqueId ? "active" : ""}`}
                                        onClick={() => toggleAnswer(uniqueId)}
                                    >
                                        {/* 7. Hämta fråga från JSON */}
                                        {t(`faq_${item.id}_question`)}
                                    </div>
                                    <div className={`faq-page-answer ${activeIndex === uniqueId ? "show" : ""}`}>
                                        {/* 8. Hämta svar från JSON */}
                                        {t(`faq_${item.id}_answer`)}
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