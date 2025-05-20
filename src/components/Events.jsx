// src/components/Events.jsx
import "../css/events.css";

const events = [
    {
        title: "Sensual Weekend Intensive",
        date: "15–16 juni 2025",
        time: "12:00–18:00",
        location: "Fuego Studio, Göteborg",
        description: "En helg full av teknik, flow och kontaktövningar för nivå 2 och uppåt.",
        image: require("../img/1.png"),
        link: "https://example.com/anmalan-weekend"
    },
    {
        title: "Bachata Beach Party",
        date: "29 juni 2025",
        time: "16:00–22:00",
        location: "Aspholmen, Göteborg",
        description: "Utomhusdans, DJ och social dans vid stranden!",
        image: require("../img/2.png"),
        link: "https://example.com/anmalan-beach"
    },
    {
        title: "Warsaw Bachata Festival",
        date: "5–7 juli 2025",
        time: "Heldagar",
        location: "Warszawa, Polen",
        description: "Vi åker tillsammans! En fantastisk resa med workshops och socials i världsklass.",
        image: require("../img/3.png"),
        link: "https://example.com/anmalan-warsaw"
    }
];

function Events() {
    return (
        <section id="events" className="events-section">
            <h2 className="events-title">Kommande Event</h2>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div key={index} className="event-card">
                        <div className="event-image-wrapper">
                            <img src={event.image} alt={event.title} className="event-image" />
                        </div>
                        <div className="event-details">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-meta">{event.date} – {event.time}</p>
                            <p className="event-meta">{event.location}</p>
                            <p className="event-description">{event.description}</p>
                            <a href={event.link} className="event-link" target="_blank" rel="noreferrer">
                                Läs mer & boka
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Events;
