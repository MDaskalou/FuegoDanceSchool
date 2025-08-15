import React, { useState, useEffect } from 'react';
import eventData from '../Data/eventData';
import '../css/events.css';
import EventModal from './EventModal';
import { useTranslation } from 'react-i18next';
import SectionTitle from './UI/SectionTitle';

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { t } = useTranslation('eventtranslation');

    useEffect(() => {
        console.log('Loaded events (non-localized data):', eventData);
    }, []);

    const openModal = (event) => {
        console.log('Opening modal for event ID:', event.id);
        setSelectedEvent(event);
    };

    const closeModal = () => {
        console.log('Closing modal');
        setSelectedEvent(null);
    };

    /** Helpers:
     *  - tArray(key): returnerar alltid en array (om sträng -> [sträng], om undefined -> [])
     *  - tString(key): om array -> join(' '), annars strängen eller ''
     */
    const tArray = (key) => {
        const v = t(key, { returnObjects: true });
        if (Array.isArray(v)) return v;
        if (typeof v === 'string') return [v];
        return [];
    };

    const tString = (key) => {
        const v = t(key, { returnObjects: true });
        if (Array.isArray(v)) return v.join(' ');
        if (typeof v === 'string') return v;
        return '';
    };

    return (
        <section id="events" className="events-section">
            <SectionTitle color="white">{t('eventsMainTitle')}</SectionTitle>

            <div className="events-grid">
                {eventData.length === 0 && (
                    <p style={{ color: 'white' }}>{t('noEventsAvailable')}</p>
                )}

                {eventData.map((event) => {
                    // Keys enligt ditt schema, t.ex. event_1_title, event_1_shortDescription, etc.
                    const baseKey = `event_${event.id}`;
                    const title = tString(`${baseKey}_title`);
                    const date = tString(`${baseKey}_date`);
                    const time = tString(`${baseKey}_time`);
                    const shortLines = tArray(`${baseKey}_shortDescription`); // alltid array
                    const shortFirst = shortLines[0] || ''; // första raden som kort teaser

                    const teaser =
                        shortFirst.length > 120 ? `${shortFirst.slice(0, 120)}...` : shortFirst;

                    return (
                        <div className="card-event" key={event.id}>
                            <img src={event.image} alt={title} />
                            <div className="event-meta">
                                {date} – {time}
                            </div>
                            <h3>{title}</h3>

                            <p className="event-description">{teaser}</p>

                            <button className="btn" onClick={() => openModal(event)}>
                                {t('readMoreButton')}
                            </button>
                        </div>
                    );
                })}
            </div>

            <EventModal
                isOpen={!!selectedEvent}
                event={selectedEvent}
                onClose={closeModal}
            />
        </section>
    );
}
