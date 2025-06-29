import React from "react";
import "../css/Modal.css"; // gemensam stil för modaler

export default function ModalComponent({ isOpen, onClose, children, className = "" }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${className}`}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
