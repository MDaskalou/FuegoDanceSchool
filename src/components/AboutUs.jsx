// src/components/About.jsx
import "../css/aboutus.css";
import BackgroundHero from "../img/BackgroundHero.png"; // eller .png
import Section from "./UI/Section/Section";

function About() {
    return (
        <Section className="about-section">
            <div className="about-container">
                <h2 className="about-title">Om Fuego Dance School</h2>
                <p className="about-description">
                    Fuego Dance School grundades med en passion för Bachata Sensual – en dansstil som förmedlar känsla, kontakt och musikalitet. Vi strävar efter att skapa en trygg och energisk miljö där alla, oavsett nivå, kan utvecklas och njuta av dansen.
                </p>
                <p className="about-description">
                    Våra instruktörer är passionerade och erfarna, och vår undervisning fokuserar på teknik, kommunikation och självuttryck. Hos oss får du mer än bara dans – du blir en del av ett varmt och välkomnande community.
                </p>
                <img src={BackgroundHero} alt="Danssal" className="about-image" />
            </div>
        </Section>
    );
}

export default About;
