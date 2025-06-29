// src/components/EventModal.jsx
import React from "react";
import ModalComponent from "./ModalComponent";
import "../css/eventModal.css";

export default function EventModal({ isOpen, onClose, event }) {
    if (!isOpen || !event) return null;

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} className="event-modal">
            <div className="modal-body">
                <img src={event.image} alt={event.title} className="modal-image" />
                <h2 className="modal-title">{event.title}</h2>

                <div className="event-info">
                    <p><strong>Datum:</strong> {event.date}</p>
                    <p><strong>Tid:</strong> {event.time}</p>
                    <p><strong>Plats:</strong> {event.location}</p>
                </div>

                <p className="modal-description">{event.description}</p>

                <a
                    href={event.link}
                    className="btn btn-small"
                    target="_blank"
                    rel="noreferrer"
                >
                    Läs mer & boka
                </a>
            </div>
        </ModalComponent>
    );
}
