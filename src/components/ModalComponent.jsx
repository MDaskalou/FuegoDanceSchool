// src/components/ModalComponent.jsx
import React, { useEffect } from 'react';
import '../css/Modal.css'; // Se till att denna fil importeras!

export default function Modal({ isOpen, onClose, instructor }) {
    // Handle escape key press and prevent background scroll
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Debug - lägg till console.log för att se vad som händer
    console.log('Modal render - isOpen:', isOpen, 'instructor:', instructor);

    if (!isOpen || !instructor) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button className="modal-close" onClick={onClose}>×</button>
                    <h2>{instructor.name}</h2>
                </div>

                <div className="modal-body">
                    <p>{instructor.description}</p>

                    {instructor.levels && (
                        <p>
                            <strong>Nivåer:</strong>
                            <span className="info-tag">{instructor.levels}</span>
                        </p>
                    )}

                    {instructor.favoriteTeaching && (
                        <p>
                            <strong>Favoritområde:</strong>
                            {instructor.favoriteTeaching}
                        </p>
                    )}

                    {instructor.extraImages && instructor.extraImages.length > 0 && (
                        <div className="modal-images">
                            <h3>Bilder</h3>
                            <div className="images-grid">
                                {instructor.extraImages.map((img, idx) => (
                                    <div key={idx} className="image-container">
                                        <img
                                            src={img}
                                            alt={`${instructor.name} bild ${idx + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}