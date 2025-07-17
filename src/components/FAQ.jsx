// src/components/FAQ.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Importera hooken
import "../css/FAQ.css";
import faqModalIds from "../Data/faqModalData"; // 2. Importera listan med ID:n

function FAQ({ visible, onClose }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const { t } = useTranslation('faqPageTranslation'); // 3. Använd vårt befintliga 'faq' namespace

    if (!visible) return null;

    const toggleAnswer = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
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
                <h2 className="faq-title">{t('modalTitle')}</h2>
                <div className="faq-list">
                    {/* 4. Mappa över listan med ID:n */}
                    {faqModalIds.map((id) => (
                        <div key={id} className="faq-item">
                            <div
                                className={`faq-question ${activeIndex === id ? "active" : ""}`}
                                onClick={() => toggleAnswer(id)}
                            >
                                {/* 5. Hämta text med ID */}
                                {t(`faq_${id}_question`)}
                            </div>
                            <div className={`faq-answer ${activeIndex === id ? "show" : ""}`}>
                                {t(`faq_${id}_answer`)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq-more-button">
                    <p>{t('modalMoreInfoText')}</p>
                    <button onClick={goToFullFAQ}>{t('modalButtonText')}</button>
                </div>
            </div>
        </div>
    );
}
export default FAQ;