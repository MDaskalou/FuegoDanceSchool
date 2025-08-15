// src/components/EventModal.jsx
import React from "react";
import ModalComponent from "./ModalComponent";
import "../css/eventModal.css";
import { useTranslation } from "react-i18next";

export default function EventModal({ isOpen, onClose, event }) {
    const { t } = useTranslation("eventTranslation");
    if (!isOpen || !event) return null;

    // Helpers: hämta som array/sträng oavsett källa (string eller array i i18n)
    const tRaw = (key, opts = {}) => t(key, { returnObjects: true, ...opts });

    const normalizeArray = (val) => {
        if (Array.isArray(val)) return val;
        if (typeof val === "string") {
            // Om sträng kan innehålla radbrytningar -> sprid ut
            return val.split(/\r?\n/);
        }
        return [];
    };

    const tArray = (key) => normalizeArray(tRaw(key, { defaultValue: "" }));

    const tString = (key) => {
        const v = tRaw(key, { defaultValue: "" });
        if (Array.isArray(v)) return v.join(" ");
        if (typeof v === "string") return v;
        return "";
    };

    // Hjälpfunktion: visa inte "event_xxx_key" om översättning saknas
    const clean = (s) =>
        typeof s === "string" && s.startsWith("event_") ? "" : s;

    const base = `event_${event.id}`;

    const title = clean(tString(`${base}_title`));
    const date = clean(tString(`${base}_date`));
    const time = clean(tString(`${base}_time`));
    const location = clean(tString(`${base}_location`));
    const levelText = clean(tString(`${base}_level`));
    const bringText = clean(tString(`${base}_bring`));
    const descriptionLines = tArray(`${base}_description`);

    const levelLabel = t("eventLevelLabel", { defaultValue: "Nivå:" });
    const bringLabel = t("eventBringLabel", { defaultValue: "Ta med:" });
    const readMoreAndBookLabel = t("readMoreAndBookButton", {
        defaultValue: "Läs mer & boka",
    });

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} className="event-modal">
            <div className="modal-body">
                <div className="modal-left">
                    <img src={event.image} alt={title || "Event image"} className="modal-image" />
                </div>

                <div className="modal-info">
                    {title && <h2 className="modal-title">{title}</h2>}

                    <ul className="event-quick-info">
                        {date && (
                            <li>
                                <span>📅</span> {date}
                            </li>
                        )}
                        {time && (
                            <li>
                                <span>⏰</span> {time}
                            </li>
                        )}
                        {location && (
                            <li>
                                <span>📍</span> {location}
                            </li>
                        )}
                        {levelText && (
                            <li>
                                <span>📈</span> {levelLabel} {levelText}
                            </li>
                        )}
                        {bringText && (
                            <li>
                                <span>🥿</span> {bringLabel} {bringText}
                            </li>
                        )}
                    </ul>

                    {/* Beskrivning: hantera både array och string (med \n) */}
                    <div className="modal-description">
                        {descriptionLines.length === 0 ? (
                            <p />
                        ) : (
                            descriptionLines.map((line, i) =>
                                line === "" ? <br key={i} /> : <p key={i}>{line}</p>
                            )
                        )}
                    </div>

                    {event.link && (
                        <a
                            href={event.link}
                            className="btn btn-small"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {readMoreAndBookLabel}
                        </a>
                    )}
                </div>
            </div>
        </ModalComponent>
    );
}
