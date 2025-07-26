import React, { useState, useEffect } from 'react';
import eventData from '../Data/eventData';
import '../css/events.css';
import EventModal from './EventModal';
import {useTranslation} from 'react-i18next';
import SectionTitle from './UI/SectionTitle';



export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { t } = useTranslation("eventtranslation");


    useEffect(() => {
        console.log("Loaded events (non-localized data):", eventData);
    }, []);

    const openModal = (event) => {
        console.log("Opening modal for event ID:", event.id);
        setSelectedEvent(event);
    };

    const closeModal = () => {
        console.log("Closing modal");
        setSelectedEvent(null);
    };

    return (
        <section id="events" className="events-section">
            <SectionTitle color="white">{t("eventsMainTitle")}</SectionTitle>
            <div className="events-grid">
                {eventData.length === 0 && (
                    <p style={{ color: "white" }}>{t("noEventsAvailable")}</p>
                )}
                {eventData.map((event) => (
                    <div className="card-event" key={event.id}>
                        <img src={event.image} alt={t(`event_${event.id}_title`)} />
                        <div className="event-meta">{t(`event_${event.id}_date`)} – {t(`event_${event.id}_time`)}
                        </div>
                        <h3>{t(`event_${event.id}_title`)}</h3>
                        <p className="event-description">
                            {t(`event_${event.id}_shortDescription`).length > 120
                                ? `${t(`event_${event.id}_shortDescription`).slice(0, 120)}...`
                                : t(`event_${event.id}_shortDescription`)}
                        </p>
                        <button className="btn" onClick={() => openModal(event)}>
                            {t("readMoreButton")}
                        </button>
                    </div>
                ))}
            </div>

            <EventModal isOpen={!!selectedEvent} event={selectedEvent} onClose={closeModal} />
        </section>
    );
}
