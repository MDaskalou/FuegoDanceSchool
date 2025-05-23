// src/components/Events.jsx
import "../css/events.css";
import LinkButton from "./UI/Button/LinkButton";
import Card from './UI/Card/Card';
import Section from './UI/Section/Section';

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
        <Section id="events" className="events-section">
            <h2 className="events-title">Kommande Event</h2>
            <div className="events-grid">
                {events.map((event, index) => (
                    <Card image={event.image} title={event.title} className="card-event">
                            <p className="event-meta">{event.date} – {event.time}</p>
                            <p className="event-meta">{event.location}</p>
                            <p className="event-description">{event.description}</p>
                            <LinkButton href="#"  target="_blank" className="btn btn-small">
                                Läs mer & boka
                            </LinkButton>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

export default Events;
