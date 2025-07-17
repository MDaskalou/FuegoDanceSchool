// src/components/EventModal.jsx
import React from "react";
import ModalComponent from "./ModalComponent";
import "../css/eventModal.css";
import { useTranslation } from "react-i18next"; // <-- NY: Importera useTranslation här

export default function EventModal({ isOpen, onClose, event }) { // <-- TA BORT: t från propsen


    const { t } = useTranslation("eventTranslation");

    if (!isOpen || !event) return null;

    // <-- NY: Anropa useTranslation internt i EventModal

    // Hämta de översatta strängarna
    const title = t(`event_${event.id}_title`, { ns: 'eventTranslation' });
    const date = t(`event_${event.id}_date`, { ns: 'eventTranslation' });
    const time = t(`event_${event.id}_time`, { ns: 'eventTranslation' });
    const location = t(`event_${event.id}_location`, { ns: 'eventTranslation' });
    const level = t(`event_${event.id}_level`, { ns: 'eventTranslation' });
    const bring = t(`event_${event.id}_bring`, { ns: 'eventTranslation' });
    const fullDescription = t(`event_${event.id}_description`, { ns: 'eventTranslation' });

    const levelLabel = t('eventLevelLabel', { ns: 'eventTranslation', defaultValue: 'Nivå:' });
    const bringLabel = t('eventBringLabel', { ns: 'eventTranslation', defaultValue: 'Ta med:' });
    const readMoreAndBookLabel = t('readMoreAndBookButton', { ns: 'eventTranslation', defaultValue: 'Läs mer & boka' });

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} className="event-modal">
            <div className="modal-body">

                <div className="modal-left">
                    <img src={event.image} alt={title} className="modal-image" />
                </div>

                <div className="modal-info">
                    <h2 className="modal-title">{title}</h2>

                    <ul className="event-quick-info">
                        <li><span>📅</span> {date}</li>
                        <li><span>⏰</span> {time}</li>
                        <li><span>📍</span> {location}</li>
                        {event.level && <li><span>📈</span> {levelLabel} {level}</li>}
                        {event.bring && <li><span>🥿</span> {bringLabel} {bring}</li>}
                    </ul>

                    <p className="modal-description">
                        {fullDescription.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>

                    <a
                        href={event.link}
                        className="btn btn-small"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {readMoreAndBookLabel}
                    </a>
                </div>
            </div>
        </ModalComponent>
    );
}