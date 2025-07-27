// Fil: InstructorModal.jsx (Slutgiltig och korrekt version)

import React from 'react';
import { useTranslation } from "react-i18next";
import ModalComponent from "./ModalComponent";
import '../css/instructorModal.css';

export default function InstructorModal({ isOpen, onClose, instructor }) {
    const { t: main_t } = useTranslation("instructorsTranslation");
    const { t: help_t } = useTranslation("helpInstructorsTranslation");

    if (!isOpen || !instructor) return null;

    const isHelpInstructor = instructor.type === 'help';
    const t = isHelpInstructor ? help_t : main_t;
    const prefix = isHelpInstructor ? 'help' : 'instructor';
    const key = (field) => `${prefix}_${instructor.id}_${field}`;

    const certificates = t(key('certificates'), { returnObjects: true }) || [];
    const levels = t(key('levels'), { returnObjects: true }) || [];
    const favoriteTeaching = t(key('favoriteTeaching'), { returnObjects: true }) || [];

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={onClose}
            className="instructor-modal" // Korrekt: stylas bara med klassnamn
        >
            <div className="instructor-modal-content">
                <h2 className="modal-title">{t(key('name'))}</h2>

                <div className="modal-scrollable-content">
                    <div className="modal-description">
                        {(t(key('description'), { returnObjects: true }) || []).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {Array.isArray(favoriteTeaching) && favoriteTeaching.length > 0 && favoriteTeaching[0] && (
                        <div className="modal-section">
                            <p className="modal-highlight">🧡 <strong>{main_t('modalFavoriteTeachingLabel')}</strong></p>
                            <ul>{favoriteTeaching.map((item, index) => <li key={index}>{item}</li>)}</ul>
                        </div>
                    )}

                    {Array.isArray(levels) && levels.length > 0 && (
                        <div className="modal-section">
                            <p className="modal-highlight">🎯 <strong>{main_t('modalTeachingLevelsLabel')}</strong></p>
                            <ul>{levels.map((level, index) => <li key={index}>{level}</li>)}</ul>
                        </div>
                    )}

                    {Array.isArray(certificates) && certificates.length > 0 && (
                        <div className="modal-section">
                            <p className="modal-highlight">📜 <strong>{main_t('modalCertificatesLabel')}</strong></p>
                            <ul>{certificates.map((cert, index) => <li key={index}>{cert}</li>)}</ul>
                        </div>
                    )}
                </div>

                <div className="social-links">
                    {instructor.socials?.instagram && (
                        <a href={instructor.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
                    )}
                    {instructor.socials?.facebook && (
                        <a href={instructor.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
                    )}
                </div>
            </div>
        </ModalComponent>
    );
}