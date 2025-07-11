import React from 'react';
import '../css/values.css';
import SectionTitle from "./UI/SectionTitle";
import valueData from '../Data/valuesData';
export default function Values() {
    return (
        <section className="values-page">
            <div className="values-header">
                <SectionTitle color="white">Våra Värderingar</SectionTitle>
                <p>Vi på Fuego Dance School tror på mer än bara steg – vi bygger gemenskap, glädje och utveckling.</p>
            </div>

            <div className="values-list">
                {valueData.map((value, index) => (
                    <div className="value-card" key={index}>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
