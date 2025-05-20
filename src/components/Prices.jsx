// src/components/Prices.jsx
import "../css/prices.css";

const prices = [
    { label: "1 kurs", price: "1600 kr", link: "https://dinbokning.se/1kurs" },
    { label: "2 kurser", price: "2600 kr", link: "https://dinbokning.se/2kurser" },
    { label: "3 kurser", price: "3600 kr", link: "https://dinbokning.se/3kurser" },
    { label: "4 kurser", price: "4600 kr", link: "https://dinbokning.se/4kurser" },
    { label: "5 kurser", price: "5600 kr", link: "https://dinbokning.se/5kurser" }
];

function Prices() {
    return (
        <section id="prices" className="prices-section">
            <h2 className="prices-title">Priser</h2>
            <p className="prices-note">Första gången är alltid gratis – kom och prova!</p>
            <div className="price-cards">
                {prices.map((item, index) => (
                    <div key={index} className="price-card">
                        <h3>{item.label}</h3>
                        <p className="price-amount">{item.price}</p>
                        <a href={item.link} className="price-button" target="_blank" rel="noopener noreferrer">
                            Boka nu
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Prices;
