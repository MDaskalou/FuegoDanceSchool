// src/components/EventModal.jsx
import React from "react";
import ModalComponent from "./ModalComponent";
import "../css/eventModal.css";
import events from "../Data/eventData"; // ✅ rätt sätt


export default function EventModal({ isOpen, onClose, event }) {
    if (!isOpen || !event) return null;

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} className="event-modal">
            <div className="modal-body">

                <div className="modal-left">
                    <img src={event.image} alt={event.title} className="modal-image" />
                </div>

                <div className="modal-info">
                    <h2 className="modal-title">{event.title}</h2>

                    <ul className="event-quick-info">
                        <li><span>📅</span> {event.date}</li>
                        <li><span>⏰</span> {event.time}</li>
                        <li><span>📍</span> {event.location}</li>
                        {event.level && <li><span>📈</span> Nivå: {event.level}</li>}
                        {event.bring && <li><span>🥿</span> Ta med: {event.bring}</li>}
                    </ul>

                    <p className="modal-description">
                        {event.shortDescription || event.description}
                    </p>

                    <a
                        href={event.link}
                        className="btn btn-small"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Läs mer & boka
                    </a>
                </div>
            </div>
        </ModalComponent>


    );
}
