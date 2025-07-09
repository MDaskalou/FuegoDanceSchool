import React from 'react';
import ModalComponent from "./ModalComponent";
import '../css/instructorModal.css';

export default function InstructorModal({ isOpen, onClose, instructor }) {
    if (!isOpen || !instructor) return null;

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} className="instructor-modal">
            <div className="instructor-modal-content">
               
                <h2 className="modal-title">{instructor.name}</h2>
                <p className="modal-description">{instructor.description}</p>

                {/* Favoritdel */}
                {instructor.favoriteTeaching && (
                    <div className="modal-section">
                    <p className="modal-highlight">🧡 <strong>Favorit att undervisa:</strong> </p>
                        <ul>
                            {instructor.favoriteTeaching.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}


                {/* Nivåer */}
                {instructor.levels && instructor.levels.length > 0 && (
                    <div className="modal-section">
                        <p className="modal-highlight">🎯 <strong>Undervisar i:</strong></p>
                        <ul>
                            {instructor.levels.map((level, index) => (
                                <li key={index}>{level}</li>
                            ))}
                        </ul>
                    </div>

                )}

                {/* Certifikat */}
                {instructor.certificates && instructor.certificates.length > 0 && (
                    <div className="modal-section">
                        <p className="modal-highlight">📜 <strong>Certifikat:</strong></p>
                        <ul>
                            {instructor.certificates.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Sociala länkar */}
                <div className="social-links">
                    {instructor.socials?.instagram && (
                        <a href={instructor.socials.instagram} target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                    )}
                    {instructor.socials?.facebook && (
                        <a href={instructor.socials.facebook} target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    )}
                </div>

                {/* Extra bilder */}
                {instructor.extraImages && instructor.extraImages.length > 0 && (
                    <div className="extra-images">
                        {instructor.extraImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${instructor.name} extra ${index + 1}`}
                                className="extra-image"
                            />
                        ))}
                    </div>
                )}
            </div>
        </ModalComponent>
    );
}
