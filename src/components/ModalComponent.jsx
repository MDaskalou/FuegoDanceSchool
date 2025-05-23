import React from 'react';
import '../css/Modal.css';

export default function Modal({ isOpen, onClose, instructor }) {
    if (!isOpen || !instructor) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>

                <h2>{instructor.name}</h2>
                <p>{instructor.description}</p>
                {instructor.levels && <p><strong>Nivåer:</strong> {instructor.levels}</p>}
                {instructor.favoriteTeaching && <p><strong>Favoritområde:</strong> {instructor.favoriteTeaching}</p>}

                <div className="modal-images">
                    {instructor.extraImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Extra ${idx + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
