import React, { useState, useEffect } from 'react';
import eventData from '../Data/eventData';
import '../css/events.css';
import EventModal from './EventModal';


export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        console.log("Loaded events:", eventData);
    }, []);

    const openModal = (event) => {
        console.log("Opening modal for event:", event.title);
        setSelectedEvent(event);
    };

    const closeModal = () => {
        console.log("Closing modal");
        setSelectedEvent(null);
    };

    return (
        <section id="events" className="events-section">
            <h2 className="main-title">Kommande Event</h2>
            <div className="events-grid">
                {eventData.length === 0 && (
                    <p style={{ color: "white" }}>Inga event tillgängliga just nu.</p>
                )}
                {eventData.map((event) => (
                    <div className="card-event" key={event.id}>
                        <img src={event.image} alt={event.title} />
                        <div className="event-meta">{event.date} – {event.time}</div>
                        <h3>{event.title}</h3>
                        <p className="event-description">
                            {event.description.length > 120
                                ? `${event.description.slice(0, 120)}...`
                                : event.description}
                        </p>
                        <button className="btn" onClick={() => openModal(event)}>Läs mer</button>
                    </div>
                ))}
            </div>

            <EventModal isOpen={!!selectedEvent} event={selectedEvent} onClose={closeModal} />
        </section>
    );
}
