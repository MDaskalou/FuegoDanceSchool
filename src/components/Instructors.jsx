// src/components/Instructors.jsx
import "../css/instructors.css";
import Card from './UI/Card/Card';
import Section from './UI/Section/Section';
import React, {useState} from 'react';
import mikaelImage from '../img/instruktörMikael.png';
import mikaelImage1 from '../img/instruktörMikael1.jpg';
import mikaelImage2 from '../img/instruktörMikael2.jpg';
import Modal from './ModalComponent'; 


const instructors = [
    {
        name: "Mikael",
        role: "Instruktör",
        image: mikaelImage,
        socials: {
            instagram: "#",
            facebook: "#"
        },
        description: "Mikael har undervisat i 6 år och är grundaren av Fuego Dance School.",
        levels: "Nivå 1, Nivå 2, Nivå 3",
        favoriteTeaching: "Teknik och musikalitet i bachata sensual.",
        extraImages: [mikaelImage1, mikaelImage2]
    },
    {
        name: "Sanela",
        role: "Hjälpinstruktör",
        image: "#",
        socials: {
            instagram: "https://instagram.com/sara"
        },
        description: "Sara assisterar på nivå 1 och 2, och fokuserar mycket på teknik.",
        extraImages: [
            "#",
        ]
    }
];
    // Lägg till fler här

export default function InstructorSection() {
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    const openModal = (instructor) => setSelectedInstructor(instructor);
    const closeModal = () => setSelectedInstructor(null);

    const renderCards = (role) => (
        <div className="instructor-grid">
            {instructors.filter(i => i.role === role).map((i, index) => (
                <div className="instructor-card" key={index}>
                    <img src={i.image} alt={i.name} className="instructor-img" />
                    <h3>{i.name}</h3>
                    <div className="instructor-socials">
                        {i.socials.instagram && <a href={i.socials.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
                        {i.socials.facebook && <a href={i.socials.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>}
                    </div>
                    <button className="btn-secondary-outline" onClick={() => openModal(i)}>Mer info</button>
                </div>
            ))}
        </div>
    );

    return (
        <section className="instructor-section">
            <h2>Instruktörer</h2>
            {renderCards("Instruktör")}
            <h2>Hjälpinstruktörer</h2>
            {renderCards("Hjälpinstruktör")}

            <Modal isOpen={!!selectedInstructor} onClose={closeModal} instructor={selectedInstructor} />

        </section>
    );
}

