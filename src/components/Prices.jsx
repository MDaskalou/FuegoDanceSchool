// src/components/Prices.jsx
import "../css/prices.css";
import LinkButton from './UI/Button/LinkButton';
import Card from './UI/Card/Card';
import Section from './UI/Section/Section';



const prices = [
    { label: "1 kurs", price: "1600 kr", link: "https://dinbokning.se/1kurs" },
    { label: "2 kurser", price: "2600 kr", link: "https://dinbokning.se/2kurser" },
    { label: "3 kurser", price: "3600 kr", link: "https://dinbokning.se/3kurser" },
    { label: "4 kurser", price: "4600 kr", link: "https://dinbokning.se/4kurser" },
    { label: "5 kurser", price: "5600 kr", link: "https://dinbokning.se/5kurser" }
];

function Prices() {
    return (
        <Section id="prices" className="prices-section">
            <h2 className="prices-title">Priser</h2>
            <p className="prices-note">Första gången är alltid gratis – kom och prova!</p>
            <div className="price-cards">
                {prices.map((item, index) => (
                    <Card key={index} title={item.label} image={require("../img/FuegoLogoimg.png")}>
                        <p className="price-amount">{item.price}</p>
                        <LinkButton href={item.link} target="_blank" className="btn btn-small">
                            Boka nu
                        </LinkButton>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

export default Prices;
