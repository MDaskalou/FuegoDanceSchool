// src/components/Instructors.jsx
import "../css/instructors.css";

const instructors = [
    {
        name: "Mikael D.",
        image: require("../img/instruktörMikael.png"),
        role: "Instruktör",
        levels: "Levels: 1 & 2",
        specialty: "Teknik & musikalitet",
        description: "Med 10 års erfarenhet inom dans, fokuserar Mikael på teknik, uttryck och kontakt.",
        social: {
            instagram: "https://instagram.com/mikael",
            facebook: "https://facebook.com/mikael"
        }
    },
    {
        name: "Georgia N.",
        image: "#",
        role: "Hjälpinstruktör",
        specialty: "Styling & flow",
        description: "Georgia brinner för musikalitet och att hjälpa elever hitta sitt flow.",
        social: {
            instagram: "https://instagram.com/georgia",
            facebook: "https://facebook.com/georgia"
        }
    }
    // Lägg till fler här
];

function Instructors() {
    return (
        <section className="instructors-section">
            <h2 className="instructors-title">Våra Instruktörer</h2>
            <div className="instructor-grid">
                {instructors.map((inst, index) => (
                    <div key={index} className="instructor-card">
                        <img src={inst.image} alt={inst.name} className="instructor-image" />
                        <h3>{inst.name}</h3>
                        <p className="instructor-role">{inst.role}</p>
                        <p className="instructor-specialty">{inst.specialty}</p>
                        <p className="instructor-levels">{inst.levels}</p>
                        <p className="instructor-description">{inst.description}</p>
                        <div className="instructor-socials">
                            <a href={inst.social.instagram} target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={inst.social.facebook} target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Instructors;
