import React from 'react';
import '../css/values.css';

export default function Values() {
    return (
        <section className="values-page">
            <div className="values-header">
                <h1>Våra värderingar</h1>
                <p>Vi på Fuego Dance School tror på mer än bara steg – vi bygger gemenskap, glädje och utveckling.</p>
            </div>

            <div className="values-list">
                <div className="value-card">
                    <h3>💃 Glädje</h3>
                    <p>Dans ska vara roligt! Vi vill att varje lektion ska fyllas av energi, skratt och positiv stämning.</p>
                </div>
                <div className="value-card">
                    <h3>🤝 Gemenskap</h3>
                    <p>Alla är välkomna – nybörjare, veteraner, med eller utan partner. Hos oss är stämningen varm och inkluderande.</p>
                </div>
                <div className="value-card">
                    <h3>📈 Utveckling</h3>
                    <p>Vi hjälper dig växa tekniskt, stilistiskt och självförtroendemässigt. Alla elever ska känna att de utvecklas.</p>
                </div>
            </div>
        </section>
    );
}
